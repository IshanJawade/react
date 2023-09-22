
// https://source.unsplash.com/random/286x180/?

export default function Card() {
    return (
        <div>
            <div className="card m-3" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://source.unsplash.com/random/286x180/?fastfood" alt=" "/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Description about this card item</p>
                        <div className="container w-100 ">
                            <select className="m-2  rounded">
                                {Array.from(Array(5), (e,i) => { 
                                    return (
                                            <option key={i+1} value={i+1}> {i+1} </option>
                                    )
                                })}
                            </select>
                            <select className="m-2 rounded">
                                    <option value={"half"}>Half</option>
                                    <option value={"Full"}>Full</option>
                            </select>
                            <h5>Total Price</h5>
                        </div>
                    </div>
            </div>
        </div>
    )
}
