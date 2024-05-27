import React, {useState, useEffect} from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
function Freebook() {
  const [book, setbook] = useState([])
  useEffect(() => {
    const getbook=async()=>{
     try{
      const res = await axios.get("http://localhost:4001/book");
      console.log(res.data);
      setbook(res.data.filter((data) => data.category === "free"));
     }catch(errors){
       console.log("can not get the data", errors);
     }
    }
    getbook();
  }, [])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="max-width-2-xl container mx-auto md:px-20 px-4">
        <div>
        <h1 className="font-semibold text-xl pb-2">Free Courses Offered!!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              beatae blanditiis cupiditate reprehenderit voluptatum quam quia
              vel reiciendis ea, dolorum eum consequatur id.</p>
      </div>
      <div>
      <div className="slider-container">
      <Slider {...settings}>
      {book.map((item)=>(
        <Cards item = {item} key = {Cards.id} />
      ))}
      </Slider>
    </div>
    </div>
      </div>
    </>
  );
}

export default Freebook;
