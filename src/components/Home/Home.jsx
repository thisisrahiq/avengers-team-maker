/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    
    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors] = useState([]);


    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setAllActors(data));
    },[]);

    

    const handleSelectActor = (actor) =>{
        setSelectedActors([...selectedActors, actor]);
    };

    console.log(selectedActors);

    return (
        <div className='container'>
          
            <div className="home-container">
                <div className="card-container">
                    {
                        allActors.map(actor =>(
                            <div key={actor.id} className="card">
                    <div className="card-img">
                        <img className='photo' 
                        src={actor.image} 
                        alt="" />
                    </div>
                    <h2>{actor.name}</h2>
                    <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, magni.</small></p>
                    <div className="info">
                        <p>Salary: ${actor.salary}</p>
                        <p>{actor.role}</p>
                    </div>
                    <button onClick={()=>handleSelectActor(actor)} className='card-btn'>Select</button>
                </div>
                        ))
                    }
                </div>
                <div className="cart">
                    <h1>This is Cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;