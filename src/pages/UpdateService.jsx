import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useParams } from 'react-router';
import axios from 'axios';

const UpdateService = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams()
    const [service, setServices] = useState()
    const [category, setCategory] = useState(service?.category)
    useEffect(() => {
        axios.get(`http://localhost:3000/services/${id}`)
            .then(res => {
                setServices(res.data)
                setCategory(res.data.category)
            })
    }, [id])
    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;
        const date = form.date.value;
        const email = form.email.value;

        const formData = {
            name,
            category,
            price,
            location,
            description,
            image,
            date,
            email,
            createdAt:service?.createdAt
        }
        axios.put('http:localhost:3000/update', formData)
        .then(res =>{
            console.log(res.data)
        })
        .catch(err =>{
            console.log(err);  
        })
    }
    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
            <h2 className="text-2xl font-semibold mb-4">Update Product / Pet</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
                {/* Product / Pet Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Product / Pet Name
                    </label>
                    <input
                        defaultValue={service?.name}
                        type="text"
                        name="name"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                        required
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Category
                    </label>
                    <select
                        value={category}
                        name="category"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    >
                        <option value="pets">Pets</option>
                        <option value="foods">Foods</option>
                        <option value="accessories">Accessories</option>
                        <option value="care products">Care Products</option>
                    </select>
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        defaultValue={service?.price}
                        type="number"
                        name="price"
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500`}
                        min="0"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Location
                    </label>
                    <input
                        defaultValue={service?.location}
                        type="text"
                        name="location"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        defaultValue={service?.description}
                        name="description"
                        rows="4"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    ></textarea>
                </div>

                {/* Image URL */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Image URL
                    </label>
                    <input
                        defaultValue={service?.image}
                        type="text"
                        name="image"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Pick Up Date
                    </label>
                    <input
                        defaultValue={service?.date}
                        type="date"
                        name="date"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>

                {/* Email (Read-only) */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        value={user?.email}
                        type="email"
                        name="email"
                        readOnly
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-200"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateService;