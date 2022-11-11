import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';

const Reviews = () => {
    
    const { user } = useContext(AuthContext);
    
    const review = useLoaderData();

    const handleReviewSubmit = e => {
        
        e.preventDefault();
        
        const form = e.target;
        const name = `${form.firstname.value}  ${form.lastname.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const address = form.address.value;


        const order = {
            id: review?._id,
            serviceName: review?.service_name,
            serviceImage:review?.service_img,
            price: review?.price,
            customer: name,
            email: email,
            phone: phone,
            message: message,
            address: address

        }

        if (phone.length > 11) {
            alert('Enter valid phone number')
        }
        
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review submitted')
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }
    

    return (

        <div>
            <section className="mt-20 mb-20 p-6 bg-gray-100 text-gray-900">
	<form onSubmit={handleReviewSubmit} noValidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
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
					<input id="firstname" type="text" name='firstname' placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" required/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Last name</label>
					<input id="lastname" type="text" name='lastname' placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" required/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="phone" className="text-sm">Phone</label>
					<input id="phone" type="text" name='phone' placeholder="your phone" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" type="email" name='email' placeholder="your Email" defaultValue={user?.email} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" required/>
				</div>
				<div className="col-span-full">
					<label htmlFor="address" className="text-sm">Address</label>
					<input id="address" type="text" placeholder="address" name='address' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full">
					<label htmlFor="message" className="text-sm">Review</label>
					<input id="message" type="text"  name='message' placeholder="write your review here" className="w-full h-25 rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" required/>
				</div>
					{
                        user?.uid? <>
                         <label htmlFor="submit" className="text-sm"></label>
                        <button type="submit" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-50">post</button>
                        </>
                        :
                        <p>please <Link to='/login'>login</Link> to add review</p>
                    }
			</div>
		</fieldset>
	</form>
</section>
        </div>
    );
};

export default Reviews;