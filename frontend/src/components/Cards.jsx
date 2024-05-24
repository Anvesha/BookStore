import React from "react";

function Cards({item}) {
  return (
    <>
    <div className="p-10">
      <div className="card w-80 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.image}
            alt="Books"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="cursor-pointer px-3 py-2 border-[2px] rounded-full hover:bg-pink-500 hover:text-white duration-300">${item.price}</div>
            <div className="cursor-pointer px-3 py-2 border-[2px] rounded-full hover:bg-pink-500 hover:text-white duration-300">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


export default Cards;
