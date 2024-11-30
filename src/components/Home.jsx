import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const[coffees, setCoffees] =useState(loadedCoffees)
  return (
    <div>
      <div>
        <h2>Welcome Coffee home: {coffees.length}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coffees.map((coffee) => (
            <CoffeeCard
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
              key={coffee._id}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
