import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Loading from '../Shared/Loading/Loading';


const Allservices = () => {

    useTitle('Services')

    const [allServices, setAllServices] = useState([]);
    const [ spinner, setSpinner ] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => {
                setAllServices(data)
                setSpinner(true);
            });
    }, [])

    return (
        <div className="grid lg:grid-cols-3  gap-10 mx-10 my-20">
        {
           spinner ? allServices.map(service=><div
            key={service._id}
             className="mx-auto mb-10  rounded-md shadow-md bg-gray-50 text-gray-800">
                <PhotoProvider>
                    <PhotoView src={service?.service_img}>
                        <img src={service?.service_img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                    </PhotoView>
                </PhotoProvider>

            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{service.service_name}</h2>
                    <p>Duration: {service?.duration}</p>
                    <p>Price: {service?.price} $</p>
                    <p className="text-gray-800">Description: {service?.description.slice(0,100)+'...'}</p>
                </div>
                <Link to={`/serviceDetail/${service?._id}`}>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-50">Read more</button>
                </Link>
            </div>
            </div>) : <Loading/>
        }
    </div>
    );
};

export default Allservices;