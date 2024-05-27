import { useState, useEffect } from "react";
import React from "react";
import Cards from "./Cards";
import axios from "axios";

function Course() {
  const [book, setbook] = useState([])
  useEffect(() => {
    const getbook=async()=>{
     try{
      const res = await axios.get("http://localhost:4001/book");
      console.log(res.data);
      setbook(res.data);
     }catch(errors){
       console.log("can not get the data", errors);
     }
    }
    getbook();
  }, [])
  
  return (
    <>
      <div className="max-width-2-xl container mx-auto md:px-20">
        <div className="mt-28 item-center text-center justify-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">here:)</span>
          </h1>
          <p className = "mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            eum autem, amet placeat quod impedit nam ut fuga? Quisquam quasi
            rerum voluptas minus fuga exercitationem esse, magnam praesentium
            aut molestias, neque adipisci?Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet consectetur, adipisicing elit.
          </p>
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"><a href = "/">Back</a></button>
        </div>
        <div className = "mt-12 grid grid-cols-1 md:grid-cols-3">
        {
            book.map((item)=>(
                <Cards key = {item.id} item = {item}/>
            ))
        }
        </div>
      </div>
    </>
  );
}

export default Course;
