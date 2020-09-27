import React from 'react'
import Title from './Title'
import { useContext} from 'react';
import { RoomContext } from '../context';

const getUnique = (items, value)=>{
    return [...new Set(items.map((item)=>item[value]))];
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    /* types */
    let types = getUnique(rooms, "type");
    types = ["all", ...types];
    types = types.map((item,index)=>{
        return(
            <option key={index} value={item}>{item}</option>
        );
    })

    let guests = getUnique(rooms, "capacity");
    guests = guests.map((item,index)=>{
        return (
            <option key={index} value={item}>{item}</option>
        );
    })

    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                {/* select type */ }
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* End select type */}
                
                {/* select guests */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select
                        id="capacity"
                        name="capacity"
                        className="form-control"
                        value={capacity}
                        onChange={handleChange}
                    >
                        {guests}
                    </select>
                </div>
                {/* End select guests */}

                {/* select price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input
                        id="price"
                        name="price"
                        type="range" 
                        className="form-control"
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        onChange={handleChange}
                        />
                </div>
                {/* End select price */}

                {/* select size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input 
                            type="number" 
                            className="size-input"
                            value={minSize}
                            id="size"
                            onChange={handleChange}
                            />
                        <input 
                            type="number" 
                            className="size-input"
                            value={maxSize}
                            id="size"
                            onChange={handleChange}
                            />
                    </div>
                </div>
                {/* End select size */}

                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            id="breakfast"
                            name="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            id="pets"
                            name="pets"
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* End extras */}

            </form>

        </section>
    )
}
