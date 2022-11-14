import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Servicedetails = () => {
  const service = useLoaderData();
  const { _id, service_name } = service;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://portraits-tourer-server-side.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

  // console.log(reviews);
  return (
    <div className=" w-full">
      <div className="m-auto mt-20 mb-20 w-2/4 rounded-md shadow-md bg-gray-50 text-gray-800">
        <img
          src={service.service_img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {service?.service_name}
            </h2>
            <p className="text-gray-800 text-justify">Description: {service?.description}</p>
              <div className="flex justify-between font-bold">
                <p>Duration: {service?.duration}</p>
                <p>Price: {service?.price} $</p>
              </div>
          </div>
        </div>
      </div>
      <div className="divider lg:divider-vertical"></div>
      <div className="text-center">
      <Link to={`/review/${service._id}`}>
          <button
            type="button"
            className="mb-10  w-25 p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-50"
          >
            Add your Review
          </button>
        </Link>
      </div>
      <div className="mt-20 grid lg:grid-cols-2  card  rounded-box place-items-center">
        
        {reviews.map((review) => (
          <div
            key={review._id}
            className="mb-20 w-8/12 flex flex-col p-6 divide-y rounded-md divide-gray-300 bg-gray-200 text-gray-800"
          >
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src={review?.image}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Name: {review?.name}</h4>
                  <h4 className="font-xl">Service: {service_name}</h4>
                  <span className="text-xs text-gray-600">{}</span>
                </div>
              </div>
              <div className="flex items-center ml-5 space-x-2 text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-600">
              <p>review: {review?.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicedetails;
