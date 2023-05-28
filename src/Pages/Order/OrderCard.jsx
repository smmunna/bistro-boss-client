import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useCart from '../../hooks/useCart';

const OrderCard = ({ item }) => {
    const { _id, name, image, price } = item
    const [, refetch] = useCart();
    const { user } = useContext(AuthContext)

    const handleCartItem = item => {
        const { _id, name, image, price } = item
        if (user) {
            const cartItem = { itemId: _id, name, image, price, email: user.email }
            fetch(`http://localhost:5000/carts`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch() //update the cart number auto
                        alert('Item added to the cart')
                    }
                })
        }
        else {
            alert('You have to login first')
        }

    }
    return (
        <div className=" card m-3 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='absolute right-0 mr-5 mt-3 bg-black text-white p-2'>Price: ${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => handleCartItem(item)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default OrderCard;
