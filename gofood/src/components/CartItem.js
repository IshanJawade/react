import { useState } from 'react';


export default function CartItem () {

    let [count, setCount] = useState (0);

    const incCount = () => {
        if (count < 10){
            setCount(++count);
        }
    }
    const decCount = () => {
        if (!count <= 0){
            setCount(--count);
        }
    }

    return(
        <div>
            <div className="container d-grid gap-2 col-9 mx-auto mt-5">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex card-title fs-4 me-auto">
                            Item Name
                            <button className="d-flex btn btn-success m-2" onClick={incCount}> + </button>
                                <div className="fs-4">  <h4><span class="badge bg-secondary">{count}</span></h4> </div>
                            <button className="d-flex btn btn-danger m-2" onClick={decCount}> - </button>
                            <div className='d-flex card-title fs-4'> itemPrice x {count} = Price </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}