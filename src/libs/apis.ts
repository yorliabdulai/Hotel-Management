import { CreateBookingDto, Room } from "@/app/models/room";
import sanityClient from "./sanity";
import * as queries from "./sanityQueries"
import axios from "axios";

export async function getFeaturedRoom(){
  const result = await sanityClient.fetch<Room>(queries.getFeaturedRoomQuery,{},{cache:'no-cache'})
  return result
}
export async function getRooms() {
   const result = await sanityClient.fetch<Room[]>(queries.getRoomsQuery, {},{cache:'no-cache'})
    return result
 }
export async function getRoom(slug:string) {
   const result = await sanityClient.fetch<Room[]>(queries.getRoom, {slug}, {cache:'no-cache'})
    return result
 }

 export const createBooking = async ({
   user,
   hotelRoom,
   checkinDate,
   checkoutDate,
   numberOfDays,
   adults,
   children,
   totalPrice,
   discount,
 } : CreateBookingDto) => {
   const mutation = {
      mutations: [{create: {_type: "booking", user: {_type: "reference", _ref: user}, hotelRoom: {_type: "reference", _ref: hotelRoom}, checkinDate, checkoutDate, numberOfDays, adults, children, totalPrice, discount}}]
   }
   const { data } = await axios.post(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`, 
   mutation,
    {headers: {Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`}}
    );
    return data;
 } 
 