
import Marquee from "react-fast-marquee";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Review from '../review/Review';
import { Link } from "react-router-dom";



const Home = () => {
  // const handleSeeMore = ()=>{

  // }
  
    return (
        <div>
          <div className='justify-between  flex'>
            <div className='flex'>
            <button className='bg-pink-400 p-2 rounded-lg font-bold '>Booked this package</button>
            <Marquee  className='text-pink-700' speed={130}>
            Wedding , Anniversary, Birthday,Congrats Parties,Baby shower,Engagement parties so on.................
            </Marquee>
            </div>

           
          
          </div>
           <div className="gap-4 p-3">
           <div className="hero min-h-screen mt-5">
            <img src="https://i.ibb.co/T0PLSdK/home.jpg" alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl font-bold text-pink-500 ">Share the moment</h1>
      <p className='text-pink-500 '>Wedding , Anniversary, Birthday,Congrats Parties so on.......</p>
      <p className="mb-5 text-pink-500">With the help of this theme ..........</p>
      
    </div>
  </div>
</div>
           </div>

           <p  className='text-6xl text-center mt-5 font-bold text-pink-600'>Our Servises</p>
          

<div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center mx-20 mt-5">
  {/* card 1 */}
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="rounded-full" src="https://i.ibb.co/HgY9CZS/wedding.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <p className='text-3xl font-bold text-pink-400'>Wedding Parties</p>
    <div className="card-actions justify-end">
      <Link to='/wedding'>
      <button  className="btn bg-pink-600">See More</button>
      </Link>
    </div>
  </div>
</div>

{/* card 2 */}
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="rounded-full" src="https://i.ibb.co/6Fz1x5k/engagement-1-servises.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <p className='text-3xl font-bold text-pink-400'>Engagement Parties</p>
    <div className="card-actions justify-end">
      <Link to="/engagement">
      <button className="btn bg-pink-600">See More</button>
      </Link>
    </div>
  </div>
</div>
{/* card 3 */}

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="rounded-full" src="https://i.ibb.co/mSWYsJJ/congratulation-1.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <p className='text-3xl font-bold text-pink-400'>Congratulation parties</p>
    <div className="card-actions justify-end">
      <Link to='/service3'>
      <button className="btn bg-pink-600">See More</button>
      </Link>
    </div>
  </div>
</div>
{/* card 4 */}

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="rounded-full" src="https://i.ibb.co/QYG8GsR/birth-servises.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <p className='text-3xl font-bold text-pink-400'>Birthday Parties</p>
    <div className="card-actions justify-end">
    <Link to='/service4'>
      <button  className="btn bg-pink-600">See More</button>
      </Link>
    </div>
  </div>
</div>
{/* card 5 */}

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="rounded-full" src="https://i.ibb.co/jGs3pV8/baby-servises-1.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <p className='text-3xl font-bold text-pink-400'>Baby Shower</p>
    <div className="card-actions justify-end">
      <Link to="/baby">
      <button className="btn bg-pink-600">See More</button>
      </Link>
    </div>
  </div>
</div>

{/* card 6 */}
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img  className="rounded-full" src="https://i.ibb.co/3WcdfCj/retirement-2.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <p className='text-3xl font-bold text-pink-400'>Retirement Parties</p>
    <div className="card-actions justify-end">
      <Link to="/retirement">
      <button className="btn bg-pink-600">See More</button>
      </Link>
    </div>
  </div>
</div>
{/* card 7 */}

{/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="rounded-full" src="https://i.ibb.co/ZVWvzXs/riksha-1.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <p className='text-3xl font-bold text-pink-400'>Receptions</p>
    <div className="card-actions justify-end">
      <button className="btn bg-pink-600">See More</button>
    </div>
  </div>
</div> */}



</div>

<Review></Review>
        </div>
    );
};

export default Home;