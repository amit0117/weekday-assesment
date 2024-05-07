import React, { useState, useEffect, useCallback } from "react";
// import Loader from "./Loader";
import JobCard from "./components/JobCard";
const url='https://api.weekday.technology/adhoc/getSampleJdJSON';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);

  const fetchData = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    const body = JSON.stringify({
      "limit": 10,
      "offset": 0
     });
     const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
     };
     fetch(url, config)
     .then((response) => response.text())
     .then((result) => console.log(result))
     .catch((error) => console.error(error));
    setIndex((prevIndex) => prevIndex + 1);

    setIsLoading(false);
  }, [index, isLoading]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const body = JSON.stringify({
          "limit": 12,
          "offset": 10
         });
         const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body
         };

       const response = await fetch(url,config);
       const data=(await response.json()).jdList;
       console.log("in first use effect response",data[0]);
        setItems(data);

      } catch (error) {
        console.log(error);
      }
      finally{
      setIsLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  return (
    <div className='container'>
      <div className="min-w-full text-center text-lg font-bold border-[2px] rounded-lg mb-4 py-2">All Jobs</div>
      <div className='flex justify-center items-center gap-2 flex-wrap'>
       {
        items.map((job)=><JobCard job={job} key={job.jdUid}/>)
       }
      </div>
      {/* {isLoading && <Loader />} */}
    </div>
  );
};

export default App;