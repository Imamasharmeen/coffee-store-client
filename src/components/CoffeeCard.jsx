import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handelDelete = _id =>{
    console.log(_id)
  }
  return (
    <div>
      <h1>CoffeeCard: {name}</h1>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="coffee" />
        </figure>
        <div className="flex w-full m-4 items-center justify-between">
          <div>
            <p>Name: {name}</p>
            <p>Chef: {chef}</p>
            <p>Taste: {taste}</p>
          </div>
          <div className="card-actions justify-end join join-vertical">
            <button className="btn join-item">View</button>

            <button className="btn join-item">Edit</button>

            <button 
            onClick={()=> handelDelete(_id)}
            className="btn join-item bg-red-500">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
