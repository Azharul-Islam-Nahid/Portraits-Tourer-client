import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';

const Reviews = () => {
    <Helmet>
        <title>add review</title>
      </Helmet>
     
    
    const { user } = useContext(AuthContext);
    const { _id, service_name} = useLoaderData();
    const navigate = useNavigate();
    
    // const review = useLoaderData();
    const location = useLocation()

    const handleReviewSubmit = event => {
        
        event.preventDefault();
            const form = event.target;
            const name = form.name.value ;
            const image = form.url.value;
            // console.log(image);
            const email = user?.email || 'uregistered';
            const message = form.message.value;


        const order = {
            id: _id,
                name,
                review: message,
                image,
                email,
                service_name

        }
        
        fetch('https://portraits-tourer-server-side.vercel.app/addreviews', {
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
                    form.reset();
                    toast.success('review posted');
                    navigate('/myreview')
                }
            })
            .catch(err => console.error(err))

    }
    

    return (

        <div className="grid max-w-screen-xl mt-10 items-center grid-cols-1 mb-5 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-sky-800 dark:text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's add review</h2>
                </div>
                {/* <img src={image} alt="" className="p-6 h-auto " /> */}
            </div>
            <form onSubmit={handleReviewSubmit} noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full text-gray-800 p-3 rounded dark:bg-gray-300" defaultValue={user?.displayName}  required />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" type="email" placeholder="" className="w-full text-gray-800 p-3 rounded dark:bg-gray-300" defaultValue={user?.email} readOnly />
                </div>
                <div>
                    <label htmlFor="url" className="text-sm">Image Url</label>
                    <input id="url" type="text" className="w-full text-gray-800 p-3 rounded dark:bg-gray-300" defaultValue={user?.photoURL} required />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Feedback</label>
                    <textarea id="message" rows="3" className="w-full text-gray-800 p-3 rounded dark:bg-gray-300"></textarea>
                </div>
                {
                    user?.uid ? <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-gray-300 dark:text-gray-800">Send Feedback</button>
                    :
                    <h3 className="font-bold text-lg">Please <Link to='/login' state={{from: location}} replace className='underline'>Login</Link> to add a review</h3>
                }
            </form>
        </div>
    );
};

export default Reviews;