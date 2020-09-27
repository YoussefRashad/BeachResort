import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import { withRoomConsumer } from '../context';
import Loading from './Loading'

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if(loading){
        return <Loading />
    }
    return(
        <>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </>
    );
}
export default withRoomConsumer(RoomContainer)

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value)=>{
//                     const { loading, sortedRooms, rooms } = value;
//                     if(loading){
//                         return <Loading />
//                     }
//                     return(
//                         <div>
//                             Hello Froms Rooms Container
//                             <RoomFilter rooms={rooms} />
//                             <RoomList rooms={sortedRooms} />
//                         </div>
//                     );
//                 }
//             }
//         </RoomConsumer>
//     )
// }
