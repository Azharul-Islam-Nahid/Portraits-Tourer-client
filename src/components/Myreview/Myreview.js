import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
import useTitle from '../../hooks/useTitle';
import Loading from '../Shared/Loading/Loading';

// import { AuthContext } from '../../context/AuthProvider/AuthProvider';

import MyReviewCards from './MyReviewCards';


const MyReviews = () => {

    useTitle('My review')

    const { user, logOut } = useContext(AuthContext);

    const [myReviews, setMyReviews] = useState([])
    const [ spinner, setSpinner ] = useState(false);
    // console.log(myReviews);
    
    useEffect(()=>{
        fetch(`https://portraits-tourer-server-side.vercel.app/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('portraits-token')}`
            }
        })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
        
            return res.json();
        })
        .then(data => {
            setMyReviews(data);
            setSpinner(true);
        })
   }, [ user?.email, logOut, myReviews ])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to remove this review!!');
        
        if(proceed){
            fetch(`https://portraits-tourer-server-side.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0){
                    toast.success('Successfully deleted one review');
                    const remaining = myReviews.filter(myReview => myReview._id !== id);
                    setMyReviews(remaining);
                }
            })
        }
    }

    return (
        <div>
  
            <div className='mt-5'>
                {
                   spinner ?  (myReviews?.length ? <h2 className="text-xl text-center">You have {myReviews?.length} reviews</h2> : <h2 className='text-xl text-center'>You have no reviews yet</h2> ) 
                   : <Loading/>
                }
            </div> 

            <div>
                {
                   <div className="overflow-x-auto w-full my-10"> 
                        <table className="table w-full">
                            <tbody>
                                {
                                    myReviews.map(myReview => <MyReviewCards
                                        key={myReview._id}
                                        myReview={myReview}
                                        handleDelete={handleDelete}
                                        // handleStatusUpdate={handleStatusUpdate}
                                    ></MyReviewCards>)
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>            
            
        </div>
    );
};

export default MyReviews;