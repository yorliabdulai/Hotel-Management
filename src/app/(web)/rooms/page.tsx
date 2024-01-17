'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Rooms = () =>{
    const [roomTypeFilter, setRoomTypeFiter] = useState("");
    const [searchQuery, setSeachQuery] = useState("");
    const searchParams = useSearchParams();
    useEffect(()=>{
      const searchQuery = searchParams.get("searchQuery")
      const roomType = searchParams.get("roomType")

      if (roomType)
    },[])
    return (
        <div className="rooms"></div>
    )
}
export default Rooms;