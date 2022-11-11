import React from 'react';

const Reviewrow = ({ review, handleDelete, handleStatusUpdate }) => {



        const { _id, serviceName,serviceImage, phone, customer, price, message, status } = review;
    
        // const [orderService, setOrderService] = useState({})
    
        // useEffect(() => {
        //     fetch(`http://localhost:5000/services/${service}`)
        //         .then(res => res.json())
        //         .then(data => setOrderService(data));
        // }, [service])


    return (
        <tr>
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
                {message.slice(0, 20) + '...'}
            </th>
            <th>
                <button onClick={() => handleStatusUpdate(_id)} className='btn btn-ghost'>{status ? status : 'pending'}
                </button>
            </th>
        </tr>
    );
};

export default Reviewrow;