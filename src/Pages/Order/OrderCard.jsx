import React from 'react';

const OrderCard = ({ item }) => {
    const { _id, name, image, price } = item
    return (
        <div className=" card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
                <p className='absolute right-0 mr-5 mt-3 bg-black text-white p-2'>Price: ${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default OrderCard;
