import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Card from '../components/Card';

function randomFoodItem () {    // code to select random food item and place it in the url
  let image = "https://source.unsplash.com/random/286x180/?"
  const food = ['pizza', 'burger', 'fries', 'cocacola', 'icecream'];
  const randomIndex = Math.floor(Math.random() * food.length);
  let randomWord = food[randomIndex];
  image = image+randomWord;
  return (image)
}

randomFoodItem();

export default function Home() {



  return (
    <>
      <div> <Navbar /> </div>
      <div><Carousel /> </div>
      <section>
        <div className='container m-2'>
        <h2 className="text-center mb-4">Popular in your area</h2>
          <div className="row">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
      <div> <Footer /> </div>
    </>
  )
}
