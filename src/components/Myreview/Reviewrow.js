import React, { useState } from 'react';

const Reviewrow = ({ review, handleDelete}) => {



        const { _id, serviceName,serviceImage, phone, customer, price, message} = review;

        const [text,setText]= useState();

        const handleBlur = e =>{
            const form = e.target;
            const review = form.value;
            setText(review);
        }

        const handleMessageUpdate = id => {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({  message: text })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        alert('message updated')
                    }
                })
        }
    


    return (
        <tr>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
<div  className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">update your review</h3>
    <input onBlur={handleBlur} defaultValue={message} ></input>
    <div className="modal-action">
      <label htmlFor="my-modal" onClick={()=>handleMessageUpdate(_id)} className="btn" type="submit" >update</label>
    </div>
  </div>
</div>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                           
                                <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm"></span>
            </td>
            <td>{price}</td>
            <th>
                {message}
            </th>
            <th>
                <button className='btn btn-ghost'>
                </button>
                {/* The button to open modal */}
<label htmlFor="my-modal" className="btn">update message</label>

{/* Put this part before </body> tag */}

            </th>
        </tr>
    );
};

export default Reviewrow;