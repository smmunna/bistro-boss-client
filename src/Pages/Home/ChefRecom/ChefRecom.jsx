import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle'

const ChefRecom = () => {
    const [recom, setRecom] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setRecom(data.slice(0, 3)))
    }, [])
    return (
        <section className='mb-4'>
            <SectionTitle subheading={'---Should Try---'} heading={'Our Recommends'} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    recom.map(reco => (
                        <>
                            <div key={reco._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={reco.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{reco.name}</h2>
                                    <p>{reco.recipe}</p>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </section>
    );
}

export default ChefRecom;
