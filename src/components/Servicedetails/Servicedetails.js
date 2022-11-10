import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Servicedetails = () => {

    const service = useLoaderData();
    return (
       
            <div className="m-auto mt-20 mb-20 w-2/4 rounded-md shadow-md bg-gray-50 text-gray-800">
                    <img src={service.service_img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{service.service_name}</h2>
                        <p>Country: {service.country_name}</p>
                        <p>Duration: {service.duration}</p>
                        <p>Price: {service.price} $</p>
                        <p className="text-gray-800">Description: {service.description}</p>
                    </div>
                        <Link to={`/review/${service._id}`}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-50">Review</button>
                        </Link>
                    </div>
            </div>
    );
};

export default Servicedetails;