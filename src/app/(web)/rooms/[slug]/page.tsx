"use client"

import { getRoom } from "@/libs/apis";
import useSWR from "swr";
import LoadingSpinner from "../../loading";

const RoomDetails = (props: {params: {slug: string}}) => {
    const {params: {slug},
} = props;
const fetchRoom = async () => getRoom(slug)
const {data: room, error, isLoading} = useSWR("/api/room", fetchRoom);
    if (error) throw new Error("Cannot fetch data");
    if (typeof room === "undefined" && !isLoading) throw new Error("Cannot fetch data");
    if (!room) return <LoadingSpinner />
    
    return (
        <div>
            <h1>Room Details</h1>
            {/* Add your room details here */}
        </div>
    );
};

export default RoomDetails;
