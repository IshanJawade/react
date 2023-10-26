
export default function Card({foodName, foodDec, foodImg, foodOption}) {

    let options = foodOption;
    let priceOptions = Object.keys(options);

    return (
        <div>
            <div className="card m-3" style={{width: "18rem"}}>
                <img className="card-img-top " width={200} height={160} src={foodImg} alt=" "/>
                    <div className="card-body">
                        <h5 className="card-title">{foodName}</h5>
                        <p className="card-text">{foodDec}</p>
                        <div className="container w-100 ">
                            <select className="m-2  rounded">
                                {Array.from(Array(5), (e,i) => { 
                                    return (
                                            <option key={i+1} value={i+1}> {i+1} </option>
                                    )
                                })}
                            </select>
                            <select className="m-2 rounded">
                                    {
                                        priceOptions.map((data)=>{
                                            return (
                                                <option key={data} value={data}> {data} </option>
                                            )
                                        })
                                    }
                            </select>
                            <h5 className="mt-2">Total Price</h5>
                            <hr></hr>
                            <div className="d-grid gap-2 mx-auto">
                                <button className=" btn btn-warning ">Add to Cart</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
