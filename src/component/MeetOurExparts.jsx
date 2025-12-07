import React from 'react';
const vets = [
    {
        "Id": 2,
        "Name": "Dr. Sarah Chen",
        "spacialization": "Joint Pain and Mobility",
        "expariance": "15 years",
        "image": "https://plus.unsplash.com/premium_photo-1661718954553-f775043016d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "Id": 3,
        "Name": "Dr. Alex Rodriguez",
        "spacialization": "Pet Dermatology in Winter",
        "expariance": "6 years",
        "image": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "Id": 4,
        "Name": "Dr. Emily Hayes",
        "spacialization": "Feline Cold Sensitivity",
        "expariance": "10 years",
        "image": "https://plus.unsplash.com/premium_photo-1661578535048-7a30e3a71d25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

const MeetOurExparts = () => {
    return (
        <div className='py-12 bg-base-100 px-[145px]'>
            <h3 className='text-3xl font-bold text-center text-primary mb-8'>Meet Our Experts</h3>

            <div className='grid grid-cols-3 mt-12 gap-10'>
                {
                    vets.map((vet) => 
                        <div  className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img className='h-[300px] w-full object-cover'
                                    src={vet?.image}
                                    alt="Pet Image" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{vet?.Name}</h2>
                                <p className='text-sm font-semibold'>Specialization: {vet?.spacialization}</p>
                                <p className='text-sm opacity-70'>Experience: {vet?.expariance}</p>
                                <button className="btn btn-primary btn-sm mt-3">Book Now</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MeetOurExparts;