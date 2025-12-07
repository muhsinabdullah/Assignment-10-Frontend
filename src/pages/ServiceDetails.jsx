import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const { id } = useParams();
    const [service, setService] = useState([]);
    // const [serviceDetails, setServiceDetails] = useState(null)


    useEffect(() => {
        fetch(`http://localhost:3000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
            .catch(err => alert(err))
    }, [id])


    return (
        <div className='flex flex-col items-center justify-center'>
            <img className='h-[300px] w-[400px] object-cover' src={service?.image} alt="" />
            <h3 className='font-semibold text-lg'>{service?.name}</h3>
            <h2 className='font-bold'>Details About This:</h2>
            <p>{service?.description}</p>
            <div className='items-start'>
                <p>Product Name: {service?.name}</p>
                <p>Product Category: {service?.category}</p>
                <p>Price: ${service?.price}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;