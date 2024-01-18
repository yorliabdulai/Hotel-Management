'use client'

import { Room } from "@/app/models/room";
import Search from "@/components/Search/Search";
import { getRooms } from "@/libs/apis";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

const Rooms = () =>{
    const [roomTypeFilter, setRoomTypeFiter] = useState("");
    const [searchQuery, setSeachQuery] = useState("");
    const searchParams = useSearchParams();
    useEffect(()=>{
      const searchQuery = searchParams.get("searchQuery")
      const roomType = searchParams.get("roomType")

      if (roomType) setRoomTypeFiter(roomType);
      if (searchQuery) setSeachQuery(searchQuery);
    },[]);
   async function fetchData(){
    return getRooms()
   }
    const {data, error, isLoading} = useSWR("get/hotelRooms", fetchData)
    if (error) throw new Error("Cannot fetch data");
    if (typeof data === "undefined" && !isLoading) throw new Error("Cannot fetch data");
    
    const filterRooms = (rooms: Room[]) =>{
      return rooms.filter(room => {
        if (roomTypeFilter && roomTypeFilter.toLowerCase() !== "all" && room.type.toLowerCase() !== roomTypeFilter.toLowerCase()){
          return false;
        };
       if (searchQuery && !room.name.toLowerCase().includes(searchQuery.toLowerCase())){
        return false;
       } 
        return true;
      
      })
    };

    const filteredRooms = filterRooms(data || [])
    
    return (
        <div className="container mx-auto pt-10">
          <Search roomTypeFilter={roomTypeFilter} searchQuery={searchQuery} setRoomTypeFilter={setRoomTypeFiter} setSearchQuery={setSeachQuery}/>
        </div>
    )
}
export default Rooms;