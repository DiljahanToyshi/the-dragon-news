import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import LeftCard from './LeftCard';


const LeftNav = () => {

    const [categories,setCategories] = useState([]);
    useEffect (() =>{
        fetch("http://localhost:5000/categories")
          .then((res) => res.json())
          .then((data) => setCategories(data))
          .catch((error) => console.log(error));
    },[])
   
    return (
      <div className="ps-4 ">
        <h4>All Category</h4>
        <div>
          {categories.map((category) => (
            <p key={category.id}>
              <Link to={`/category/${category.id}`} className="text-decoration-none"> {category.name} </Link>
            </p>
          ))}
        </div>
        <LeftCard></LeftCard>
      </div>
    );
};

export default LeftNav;