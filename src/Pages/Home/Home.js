import React, { useState } from 'react';

const Home = () => {

    const [color, setColor] = useState("")



    return (
        <div>
            <h1>Choose Your Color</h1>



            <div className=''>
                <div className='mb-4'>
                    <textarea style={{ backgroundColor: color }} className="textarea textarea-bordered w-48 h-48" ></textarea>
                </div>
                <input type="text" placeholder="Input Your Color" className="input input-bordered w-48 max-w-xs " value={color} onChange={(e) => setColor(e.target.value)} />
            </div>


        </div>
    );
};

export default Home;