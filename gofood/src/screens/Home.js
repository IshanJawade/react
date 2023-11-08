import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Home() {

  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch('http://localhost:4000/api/foodData', {
      method: "POST",
      headers: {
        'Content-Type': 'applicatio/json'
      }
    });
    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
    //console.log(foodItem, foodCat);
  }

  useEffect(() => {
    loadData();
  },[]);

  return (
      <div>
        <div> <Navbar /> </div>
        <div>
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
                        <div className="form-inline d-flex">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img className="d-block w-100" style={{ filter: "brightness(60%)" }} src="https://source.unsplash.com/random/1920x800/?food" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{ filter: "brightness(60%)" }} src="https://source.unsplash.com/random/1920x800/?burger" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{ filter: "brightness(60%)" }} src="https://source.unsplash.com/random/1920x800/?noodles" alt="Third slide" />
                    </div>
                </div>

                <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </Link>
                <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </Link>
            </div>
        </div>
        <div className='container'>
          {
            foodCat == []
            ? <div> No categories found ! </div>
              : 
              foodCat.map((data)=>{
                return(
                  <div className='row mb-3'>
                    <div key={data._id} className='fs-3 m-3'> {data.CategoryName} </div>
                    <hr />
                    {
                      foodItem == [] ? <div> No food items found</div>
                      : foodItem.filter((item)=> (item.CategoryName == data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                      .map(filterItems=>{
                        return (
                          <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                            <Card 
                              foodItems = {filterItems}
                              foodOption = {filterItems.options[0]}
                            />
                          </div>
                        )
                      })
                    }
                  </div>
                  )
              })
          }
        </div>
        <div> <Footer /> </div>
      </div>
  )
}
