import { useEffect, useState } from "react";

const UseFetching = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);

      try {
        console.log("trying");
        const res = await fetch(url);
        const json = await res.json();
        setData(json.data);
        console.log(json.data);
        setloading(false);
      } catch (error) {
        setError(error);
        setloading(false);
      }
    };
    fetchData();
    console.log(data);
  }, [url]);
  return { loading, error, data };
};

export default UseFetching;
