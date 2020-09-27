import React, { Component } from 'react';
import data from './data';

const RoomContext = React.createContext();
export default class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    }
    componentDidMount(){
        // getData
        let rooms = this.formatData(data);
        let featuredRooms = rooms.filter(item => item.featured);
        let maxPrice = Math.max(...rooms.map(room => room.price))
        let maxSize  = Math.max(...rooms.map(room => room.size))

        this.setState({
            rooms,
            sortedRooms:rooms,
            featuredRooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            size: maxSize,
            maxSize
        })
    }
    formatData = (data)=>{
        let items = data.map(item=>{
            let ID = item.sys.id;
            let images = item.fields.images.map(img=> img.fields.file.url);
            return { ...item.fields, images, ID };
        })
        return items;
    }
    getRoom = (slug)=>{
        // const Rooms = [...this.state.rooms];
        // const room2 = Rooms.find((room) => room.slug === slug);
        const room = this.state.rooms.find((room) => room.slug === slug);
        return room;
    }
    handleChange = (e)=>{
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name   = target.name;

        this.setState({
            [name] : value
        }, this.filterRooms );

    }
    filterRooms = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state;
        // all the rooms
        let tempRooms = [...rooms];
        // transform value
        capacity = parseInt(capacity);
        price = parseInt(price);

        // filter by type
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        }

        // filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }
        // filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);
        // filter by size
        tempRooms = tempRooms.filter(
            room => room.size >= minSize && room.size <= maxSize
        );
        // filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        // filter by pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }
        // change state
        this.setState({
            sortedRooms: tempRooms
        });
    };

    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRoom: this.getRoom,
                handleChange: this.handleChange
                }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props) {
        return(
            <RoomContext.Consumer>
                {
                    (value)=><Component {...props} context={value} />
                }
            </RoomContext.Consumer>
        );
    }
}

export {RoomProvider, RoomConsumer, RoomContext};
