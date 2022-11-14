import React, { useState } from 'react';
import toast from 'react-hot-toast';

const MyReviewCards = ({ myReview, handleDelete }) => {

    // console.log(myReview)
    const { _id, image, name, review, service_name } = myReview;
    const [showModal, setShowModal] = useState(false);
    

    const [text, setText] = useState();
   
    const handleBlur = event =>{
        event.preventDefault();
        const form = event.target;
        const review = form.value;
        setText(review);
        // form.reset()
    }

    const handleUpdate = id =>{
       
        // console.log(id);

        fetch(`http://localhost:5000/review/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({review: text})
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                toast.success('Review updated succesfully')
                setShowModal(false)
                // form.reset();
            }
            
        })
    }
   
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost btn-sm bg-slate-700 rounded-full text-white'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-gray-600">{name}</div>
                        
                        <div className="text-sm font-semibold opacity-80">{service_name}</div>
                        <div className="text-sm opacity-50">{_id}</div>
                    </div>
                </div>
            </td>
            <td className='font-bold text-gray-600'> 
                <div className="font-bold text-gray-600">{review}</div>
            </td>
            
            <th>
                <button onClick={() => setShowModal(true)}  className="btn bg-slate-700 border-none btn-sm ">Update</button>
                { showModal ? (
                    <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 mx-auto h-56 my-auto flex-col max-w-md gap-2 p-6 rounded-md shadow-md bg-[#e3eafe]">
                        <button onClick={() => setShowModal(false)} className="btn btn-sm btn-circle absolute right-6 top-5 ">✕</button>
                        <h3 className="font-bold text-lg">Edit your review</h3>
                        <input onBlur={handleBlur} id="text" type="text" className="w-full p-3 mt-4 rounded dark:bg-gray-50 " defaultValue={review} />
                        <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">  
                            <button onClick={()=>handleUpdate(_id)}  className="px-3 py-2 rounded-md shadow-sm btn btn-sm  text-white">Update</button>
                        </div>
                    </div>
                ) : null }
            </th>

            {/* <th>
                <label onClick={()=> handleTakeId(_id)} htmlFor="my-modal-6" className="btn bg-slate-700 border-none btn-sm"><FaPen/></label>

                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                    <form>
                        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg">Edit your review</h3>
                        
                            <input onBlur={handleBlur} id="text" type="text" className="w-full p-3 mt-2 rounded dark:bg-gray-200 " defaultValue={review} />
                        
                        <div onClick={()=> handleEdit() } id="my-modal-6" className="modal-action">
                            <label  htmlFor="my-modal-6" className="btn">Edit</label>
                        </div>
                        </form>
                    </div>
                </div>
            </th> */}


        </tr>
        
    );
};

export default MyReviewCards;


