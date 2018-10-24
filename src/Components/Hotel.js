import React from 'react';

const Hotel = ({imgSrc, name, address, rating, price}) => (
        <div className="hotel-detail">
            <div className="img">
                <img src={imgSrc} alt="hotel-info" /><br />
            </div>

            <div className="detail-info">

                    <label className="hotel-name">{name}</label><br />
                    <label className="hotel-address">Address : {address}</label><br/>
                    <label className="hotel-rating">Rating:{rating}</label><br />
                <label className="hotel-price">${price}</label><br />
            </div>
        </div>
    )

export default Hotel;