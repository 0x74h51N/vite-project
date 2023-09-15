import React, { useEffect, useState } from "react";

const useEffecty = () => {
  const [count, setCount] = useState(() => {
    return 0;
  });

  useEffect(() => {
    document.title = `${count} kez tıklandı.`;
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Dıklat Kanks</button>
    </div>
  );
};

export default useEffecty;
