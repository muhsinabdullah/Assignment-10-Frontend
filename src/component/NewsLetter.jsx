import React from 'react';

const NewsLetter = () => {
    return (
        <div className='w-cover h-[500px] flex justify-center items-center bg-amber-100 m-20 gap-50 px-5'>
            <form className="fieldset">
                <h6 className="font-bold text-4xl">Newsletter</h6>
                <p>Paws & Comfort is a trusted pet care company dedicated to helping pets live happier, healthier, and more comfortable lives. We offer high-quality pet products, personalized care tips, and reliable services designed to support the well-being of animals year-round. Whether it’s cozy winter essentials, nutritious treats, or safety advice, our mission is to provide pet owners with everything they need to keep their furry companions safe, comfortable, and loved. With a passion for animals and a commitment to quality, Paws & Comfort strives to make every pet feel right at home.</p>
                    <label className='text-xl'>Enter your email address</label>
                    <div className="join">
                        <input 
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item w-1/3" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
            </form>

        </div>
    );
};

export default NewsLetter;