"use client"

import { getRoom } from "@/libs/apis";
import useSWR from "swr";
import LoadingSpinner from "../../loading";
import {Room} from "@/app/models/room";
import HotelPhotoGallery from "@/components/HotelPhotoGallery/HotelPhotoGallery";

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
           <HotelPhotoGallery photos={room.images} />
              <div className="container mx-auto pt-20">
                <div className="md:grid md:grid-cols-12 gap-10 px-3">
                  <div className="md:col-span-8 md:w-full">
                        {/*Room infomation */}
                  </div>  
                  <div className="md:col-span-4 rounded-xl shadow-lg dark:shadow dark:shadow-white sticky top-10 h-fit overflow-auto">
                    {/*Room booking form */}
                  </div> 
                </div>
              </div>
        </div>
    );
};

export default RoomDetails;
