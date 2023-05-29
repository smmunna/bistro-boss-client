import React from 'react';

const AddProducts = () => {
    const handleAddProducts = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const image = form.image.files[0]
        const formData = new FormData()
        formData.append('image', image)

        const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`
        fetch(imageUploadUrl, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success == true) {
                    const products = { name: name, image: imageData.data.display_url }
                    fetch(`http://localhost:5000/addproducts`, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(products)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                        })
                }
                else {
                    alert('No image hasbeen selected/ Properly select image type jpg/jpeg/png')
                }
            })
            .catch(error => {
                console.log(error)
            })


    }
    return (
        <div>
            <form onSubmit={handleAddProducts}>
                <h3 className='text-3xl font-semibold'>Add Products to the Database</h3> <br />
                <label htmlFor="">Name:</label> <br />
                <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" /> <br /> <br />
                <input type="file"
                    name='image'
                    accept='image/*'
                    className="file-input w-full max-w-xs" /> <br /> <br />
                <button type='submit' className='btn btn-primary'>Add</button>
            </form>
        </div>
    );
}

export default AddProducts;
