import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services:[
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            }, 
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <div key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        )
    }
}
