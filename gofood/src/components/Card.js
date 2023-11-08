import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { useDispatchCart, useCart } from './ContextReducer';


export default function Card({foodItems, foodOption}) {

    let dispatch = useDispatchCart();
    let options = foodOption; 
    let priceOptions = Object.keys(options);
    let data = useCart();
    const priceRef = useRef();


    const [qyt, setQyt] = useState(1)
    const [size, setSize] = useState("")

    const handleAddToCart = async () =>{
        await dispatch({type:"ADD", id: foodItems._id, name: foodItems.name, price: finalPrice, qyt: qyt, size: size, img: foodItems.img })
        console.log(data);
    }
    
    let finalPrice = qyt * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value);
    },[])

    return (
        <div>
            <div className="card m-3" style={{width: "18rem"}}>
                <img className="card-img-top " width={200} height={160} src={foodItems.img} alt=" "/>
                    <div className="card-body">
                        <h5 className="card-title">{foodItems.name}</h5>
                        <p className="card-text">{foodItems.description}</p>
                        <div className="container w-100 ">
                            <select className="m-2  rounded" onChange={(e)=> setQyt(e.target.value)}>
                                {Array.from(Array(5), (e,i) => { 
                                    return (
                                            <option key={i+1} value={i+1}> {i+1} </option>
                                    )
                                })}
                            </select>
                            <select className="m-2 rounded" ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
                                    {
                                        priceOptions.map((data)=>{
                                            return (
                                                <option key={data} value={data}> {data} </option>
                                            )
                                        })
                                    }
                            </select>
                            <h5 className="mt-2">{finalPrice}</h5>
                            <hr></hr>
                            <div className="d-grid gap-2 mx-auto">
                                <button className=" btn btn-warning" onClick={handleAddToCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
