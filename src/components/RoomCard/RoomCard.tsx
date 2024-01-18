import { Room } from "@/app/models/room";
import { FC } from "react"
type Props = {
    room: Room;
}
const RoomCard: FC<Props> = props =>{
    const {
        room: {
        name,
        type,
        price,
    
    }} = props;
  return (
    <div>
      
    </div>
  )
}
export default RoomCard