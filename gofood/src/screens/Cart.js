import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

export default function Cart() {
    return(
        <div>
            <div> <Navbar /> </div>
            <div className='container'>
                <div> <CartItem /> </div>
                <div className='d-grid gap-2 col-9 mx-auto'>
                    <div className='container fs-3'> 
                        <div className='row'>
                            <div className='d-flex me-auto col'>Total Amount</div> 
                            <div className='d-flex col'> </div>
                            <div className='d-flex col'>Amount{}</div> 
                        </div>
                    </div>
                    <button className='btn btn-warning fs-5'> Checkout </button>
                </div>
            </div>
        </div>
    )
}
