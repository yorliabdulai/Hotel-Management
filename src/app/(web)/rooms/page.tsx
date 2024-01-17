'use client'

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
    },[searchParams])
   async function fetchData(){
    return getRooms()
   }
    const {data, error, isLoading} = useSWR("get/hotelRooms", fetchData)
    if (error) throw new Error("Cannot fetch data");
    if (typeof data === "undefined" && !isLoading) throw new Error("Cannot fetch data");
    console.log(data)
    return (
        <div className="rooms"></div>
    )
}
export default Rooms;