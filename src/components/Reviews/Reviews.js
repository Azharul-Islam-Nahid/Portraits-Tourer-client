import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Reviews = () => {

    const review = useLoaderData();
    console.log(review);
    return (
        <div>
            <section className="p-6 bg-gray-100 text-gray-900">
	<form noValidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Review</p>
				<p className="text-xs">Let me know about what can i improve more to provide the best service</p>
                <h2 className="text-3xl font-semibold tracking-wide">{review.service_name}</h2>
                <img src={review.service_img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">First name</label>
					<input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Last name</label>
					<input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full">
					<label htmlFor="address" className="text-sm">Address</label>
					<input id="address" type="text" placeholder="address" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full">
					<label htmlFor="review" className="text-sm">Review</label>
					<input id="review" type="text" placeholder="write your review here" className="w-full h-25 rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" />
				</div>
			</div>
		</fieldset>
	</form>
</section>
        </div>
    );
};

export default Reviews;