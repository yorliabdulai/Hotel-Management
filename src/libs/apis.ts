import { Room } from "@/app/models/room";
import sanityClient from "./sanity";
import * as queries from "./sanityQueries"

export async function getFeaturedRoom(){
  const results = await sanityClient.fetch<Room>(queries.getFeaturedRoomQuery,{},{cache:'no-cache'})
  return results
}
export async function getRooms() {
   const result = await sanityClient.fetch(queries.getRoomsQuery)
 }