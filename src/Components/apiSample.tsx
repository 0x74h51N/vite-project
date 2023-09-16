import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../App.css";



const apiSample = () => {
  const [hits, setHits] = useState<any[]>([]);
  const [query, setQuery] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(data.hits);
    };
    fetchData();
  }, [query]);



  return (
    <div className= "apiSample">
        <input type="text" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
        <ul>
          {hits.map((hit) => (
            <div className="card mb-1" key={hit.objectID}>
              <div className="card-body">
               <h5 className="card-title">Title: {hit.title}</h5>
                <p className="card-text">Author: {hit.author}</p>
              </div>
            </div>
         ))}
        </ul>
    </div>
);
};

export default apiSample;
