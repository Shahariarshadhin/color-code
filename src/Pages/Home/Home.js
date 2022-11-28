import React, { useState } from 'react';
import colorImage from '../../assests/colorPicker-removebg-preview.png'
import { TfiHandPointRight } from "react-icons/tfi";

const Home = () => {

    const [color, setColor] = useState("")



    return (
        <div className='bg-black'>

            <div className='flex justify-center'>
                <img src={colorImage} alt="" />
            </div>


            <div className="hero min-h-screen -mt-48 ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300 lg:ml-48  border-2 border-rose-600">
                        <div className="card-body">

                            <div className=''>
                                <div className='mb-4'>
                                    <textarea style={{ backgroundColor: color }} className="textarea  textarea-bordered w-48 h-48" ></textarea>
                                </div>
                                <input type="text" placeholder="Input Your Color" className="input input-bordered w-48 max-w-xs " value={color} onChange={(e) => setColor(e.target.value)} />
                            </div>

                        </div>
                    </div>

                    <div className="text-center lg:text-left text-white">

                        <h1 className="text-5xl font-bold text-[#EC0E0E] italic mb-2">Get Your</h1>
                        <h1 className="text-4xl font-semibold italic mt-2 mb-2">Color and Color Code From Color Picker.</h1>
                        <div className="flex">
                            <div>
                                <h1 className="text-3xl font-semibold italic mt-2">Let's Go</h1>
                            </div>
                            <div className="text-3xl">
                                <h1><TfiHandPointRight></TfiHandPointRight></h1>
                            </div>
                        </div>




                    </div>

                </div>
            </div>






        </div>
    );
};

export default Home;