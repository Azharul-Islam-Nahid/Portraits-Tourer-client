import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
import Reviewrow from './Reviewrow';

const Myreview = () => {

    const navigate = useNavigate();

    const {logOut,user}= useContext(AuthContext);

    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('portraits-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                    return navigate('/login')
                }
                return res.json()
            })
            .then(data => {

                setReviews(data)
            })
    }, [user?.email,logOut,navigate])


    const handleDelete = id => {
        const proceed = window.confirm('Do you really want to delete this order?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('review deleted successfully')
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })

        }
    };


   

    return (
        <div>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Price</th>
                        <th>message</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => <Reviewrow
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                        ></Reviewrow>)
                    }
                </tbody>

                <tfoot>
                </tfoot>

            </table>
        </div>
    </div>
    );
};

export default Myreview;