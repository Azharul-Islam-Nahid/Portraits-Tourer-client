import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
import Reviewrow from './Reviewrow';

const Myreview = () => {

    const {user}= useContext(AuthContext);

    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


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
                        <th>
                        </th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Cost</th>
                        <th>message</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => <Reviewrow
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                            // handleStatusUpdate={handleStatusUpdate}
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