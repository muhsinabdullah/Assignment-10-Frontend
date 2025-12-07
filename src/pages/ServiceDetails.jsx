import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const { id } = useParams();
    const [services, setServices] = useState([]);
    // const [serviceDetails, setServiceDetails] = useState(null)


    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => alert(err))
    }, [])

    const findResult = services.find(service => service.serviceId == id);

    return (
        <div className='flex flex-col items-center justify-center'>
            <img className='h-[300px] w-[400px] object-cover' src={findResult?.image} alt="" />
            <h3 className='font-semibold text-lg'>{findResult?.serviceName}</h3>
            <h2 className='font-bold'>Details About This:</h2>
            <p>{findResult?.description}</p>
            <div className='items-start'>
                <p>Provider Name: {findResult?.providerName}</p>
                <p>Provider Contact: {findResult?.providerEmail}</p>
                <p>Price: ${findResult?.price}</p>
                <p>Rating: {findResult?.rating}</p>
                <p>Avilable Quantity: {findResult?.slotsAvailable} pis</p>
            </div>
        </div>
    );
};

export default ServiceDetails;