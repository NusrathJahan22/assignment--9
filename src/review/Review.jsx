import React from 'react';

const Review = () => {
    return (
        <div className='mx-20'>
           <div className='text-center font-bold m-8 text-pink-800'>
           <p className='text-5xl '>LATEST FORM THE BLOG</p>
           <p>Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat</p> 
           </div>
           <div className='grid grid-cols-1 lg:grid-cols-3'>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/564w5QH/blog-1.webp" alt="Shoes" /></figure>
  <div className="card-body font-bold">
    
    <p>Hundreds of design for every event</p>
    <div className="card-actions justify-end">
      <button className="btn bg-pink-500">You can add your choose</button>
    </div>
  </div>
</div>



           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/HBzYG3M/blog-3.webp" alt="Shoes" /></figure>
  <div className="card-body font-bold">
    
    <p>How to plan a perfact event with in a moments </p>
    <div className="card-actions justify-end">
      <button className="btn bg-pink-500">You can add your choose</button>
    </div>
  </div>
</div>


           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-96' src="https://i.ibb.co/jk6pZyL/indoor.webp" alt="Shoes" /></figure>
  <div className="card-body font-bold">
    
    <p >Possible no matter where you are on your journay</p>
    <div className="card-actions justify-end">
      <button className="btn bg-pink-500">You can add your choose</button>
    </div>
  </div>
</div>


           </div>
        </div>
    );
};

export default Review;