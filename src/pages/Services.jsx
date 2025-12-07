import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';


const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => alert(err))
    }, [])
    return (
        <div className='grid grid-cols-3 mt-12 gap-10 px-[145px]'>
            {
                services.map(service =>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img className='h-[300px] w-full object-cover'
                                src={service?.image}
                                alt="Pet Image" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{service?.name}</h2>
                            <div className='flex justify-between text-lg'>
                                <p>Price: <span className='font-bold'>${service?.price}</span></p>
                                <p className='text-end'>Date: {service?.date}</p>
                            </div>
                            <div className="card-actions justify-end mt-5">
                                <Link to={`/details/${service?._id}`}><button className="btn btn-primary">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Services;