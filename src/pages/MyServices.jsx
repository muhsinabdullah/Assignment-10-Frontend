import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Services from './Services';
import { Link } from 'react-router';

const MyServices = () => {
    const [myServices, setMyServices] = useState([]);

    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://backend-10-alpha.vercel.app/my-services?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyServices(data))
            .catch(err => alert(err))
    }, [user?.email])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myServices?.map(service =>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={service?.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{service?.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{service?.description}</span>
                                    </td>
                                    <th className=' flex gap-3'>
                                        <button className="btn btn-error btn-xs">Delete</button>
                                        <Link to={`/update-services/${service?._id}`}> <button className="btn btn-info btn-xs">Edit</button></Link>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyServices;