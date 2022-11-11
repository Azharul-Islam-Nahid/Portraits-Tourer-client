import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/limitservices')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div className='container m-auto mt-0'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-6/12' src='https://thumbs.dreamstime.com/b/tour-guide-provide-assistance-banner-organize-visit-museum-attraction-site-interest-cultural-historical-contemporary-heritage-143607771.jpg' alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Portraits Tourer</h1>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3  gap-1 mb-10">
                {
                    services.map(service=><div
                    key={service._id}
                     className="mx-auto mb-10 max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
                        <PhotoProvider>
      <PhotoView src={service?.service_img}>
        <img src={service?.service_img} alt=""  className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"  />
      </PhotoView>
    </PhotoProvider>
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">{service?.service_name}</h2>
                            <p>Duration: {service?.duration}</p>
                            <p>Price: {service?.price} $</p>
                            <p className="text-gray-800">Description: {service?.description.slice(0,100)+'...'}</p>
                        </div>
                        <Link to={`/serviceDetail/${service._id}`}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-50">Read more</button>
                        </Link>
                    </div>
                </div>)
                }
            </div>
                    <div className='text-center mb-10'>
                        <Link to='/allservices'>
                    <button type="button" className="px-8 py-3 font-semibold rounded bg-sky-600 text-gray-50">See all</button>
                        </Link>
                    </div>
            <div className='container mx-auto mb-20 w-9/12'>
                <h1 className='font-extrabold text-2xl mb-10'>​Tips for writing great customer reviews</h1>
                Provide useful, constructive feedback
        A good review includes enough detail to give others a feel for what happened.
        Explain which factors contributed to your positive, negative or just so-so experience.
        You might also offer your view on what the company is doing well, and how they can improve.
        But keep things friendly and courteous!
        Talk about a range of elements, including customer service
        Increase the relevance of your review by addressing your overall experience, including the level of customer service you received.
        Tell people how helpful the company was! Focusing on only one element,
        such as product quality or delivery options, provides limited insight to readers.

 Be detailed, specific, and honest
There’s no rule against only writing a handful of words in a review, but the more specific you can be, the more likely the review is to be useful. We suggest writing from your own individual perspective, keeping it honest and sticking to the facts. Help readers stand in your shoes.
            </div>
        </div>
    );
};

export default Home;