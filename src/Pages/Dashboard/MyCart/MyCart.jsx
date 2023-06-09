import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart,refetch] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
     const handleDelete = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Item hasbeen Deleted',
                            'success'
                          )
                    }
                })
            }
          })
     }
    return (
        <div>
            <h3>Total Items: {cart.length}</h3>
            <h3>Total Price: ${total}</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map(row=>
                                <tr key={row._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            {row.name}
                            </td>
                            <td> ${row.price}</td>
                            <th>
                                <button onClick={()=>handleDelete(row._id)} className="btn btn-ghost btn-lg bg-red-600 text-white"><FaTrashAlt/></button>
                            </th>
                        </tr>
                            )
                        }

                        {/* row 1 */}
                      
                    
                    </tbody>
                </table>
            </div>
            <div className="btn btn-warning">Pay Now</div>
        </div>
    );
}

export default MyCart;
