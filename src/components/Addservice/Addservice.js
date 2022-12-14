import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
import useTitle from '../../hooks/useTitle';

const Addservice = () => {

    useTitle('Add Service')

    const { user } = useContext(AuthContext);


    const handleServiceSubmit = e => {
        
        e.preventDefault();
        
        const form = e.target;
        const serviceName = form.serviceName.value;
        const imgUrl= form.serviceImageUrl.value;
        const duration = form.duration.value;
        const price = form.price.value;
        const Description = form.Description.value;
        const countryName = form.countryName.value;


        const order = {
            service_name: serviceName,
            service_img: imgUrl,
            duration: duration,
            price: price,
            description:Description,
            country_name: countryName

        }

        
        fetch('https://portraits-tourer-server-side.vercel.app/allservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success('review posted');
                }
            })
            .catch(err => console.error(err))

    }
    


    return (
        <div>
        <section className="mt-20 mb-20 p-6 text-gray-900">
<form onSubmit={handleServiceSubmit} action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-sky-800">
        <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium text-white">Add Service</p>
            <p className="text-xs text-white">Let's add some new services</p>
        </div>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
                <label htmlFor="serviceName" className="text-white text-sm">Service name</label>
                <input id="serviceName" type="text" name='serviceName' placeholder="Service name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" required/>
            </div>
            <div className="col-span-full sm:col-span-3">
                <label htmlFor="duration" className="text-white text-sm">Duration</label>
                <input id="duration" type="text" name='duration' placeholder="duration" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" required/>
            </div>
            <div className="col-span-full sm:col-span-3">
                <label htmlFor="serviceImageUrl" className="text-white text-sm">service Image Url</label>
                <input id="serviceImageUrl" type="text" name='serviceImageUrl' placeholder="Image Url" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" required/>
            </div>
            <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-white text-sm">Description</label>
                <input id="Description" type="text" name='Description' placeholder="add Description"  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" required/>
            </div>
            <div className="col-span-full">
                <label htmlFor="price" className="text-white text-sm">price</label>
                <input id="price" type="text" placeholder="price" name='price' className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" required />
            </div>
            <div className="col-span-full">
                <label htmlFor="message" className="text-white text-sm">Country Name</label>
                <input id="countryName" type="text"  name='countryName' placeholder="countryName" className="w-full p-2 h-25 rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-300 text-gray-900" required/>
            </div>
                {
                    user?.uid? <>
                     <label htmlFor="submit" className="text-white text-sm"></label>
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

export default Addservice;