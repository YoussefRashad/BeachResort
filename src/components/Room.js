import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default function Room({ room }) {
    let { name, slug, price, images } = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt={name} draggable="false" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    features
                </Link>
                <p className="room-info">{name}</p>
            </div>
        </article>
    )
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}
