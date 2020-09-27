import React, { Component } from 'react'
import { RoomContext } from '../context'
//import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import StyledHero from '../components/StyledHero'


export default class SingleRoom extends Component{
    static contextType = RoomContext;
    constructor(props){
        super(props);
        // console.log(props.match.params.slug);
        this.state = {
            slug: props.match.params.slug,

        }
    }

    render(){
        // get room from context by slug
        const Room = this.context.getRoom(this.state.slug);
        console.log(Room);
        
        if(!Room){
            return (
                <div className="error">
                    <h3>no such room could be found...</h3>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </div>
            );
        }

        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = Room;

        const [ defImg, ...imgs ] = images;
        return(
            <>
                <StyledHero img={defImg} >
                    <Banner title={name}>
                        <Link to="/" className="btn-primary">
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {imgs.map((item, index)=>{
                            return(
                                <img key={index} src={item} alt={name} draggable="false" />
                            );
                        })}
                    </div>
                    <div className="single-room-info">
                        <div className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </div>
                        <div className="info">
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : ${size} SQFT</h6>
                            <h6>
                                max capacity :{" "}
                                {capacity > 1 ? `${capacity} people` : `${capacity} person `}
                            </h6>
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </div>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index)=>{
                            return(
                                <li key={index}>- {item}</li>
                            );
                        })}
                    </ul>
                </section>
            </>
        );
    }
}