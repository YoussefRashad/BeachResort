import React, { Component } from 'react'

import { RoomContext } from '../context';
import Title from './Title';
import Room from './Room';
import Loading from './Loading';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featuredRooms } = this.context;
        let rooms = featuredRooms.map((room, index)=>{
            return <Room key={index} room={room}/>
        })
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms }
                </div>
            </section>
        )
    }
}
