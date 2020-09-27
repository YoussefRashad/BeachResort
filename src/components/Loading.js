import React from 'react'
import loading from '../images/gif/loading-arrow.gif';

export default function Loading() {
    return (
        <div className="loading">
            <img src={loading} alt="loading" draggable="false" />
        </div>
    )
}
