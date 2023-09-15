import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {hits.map((hit) => (
          <li key={hit.objectID}>{hit.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default apiSample;
