import React,{useEffect, useState} from 'react'
import '../index.css';
import '../App.css' 



function Axios() {

    const API = "https://hn.algolia.com/api/v1/search?query=html";

    const [data1 , setData] = useState([]);

 

    const getText = async (url) =>{

        

        try{

            const resp = await fetch(url);
            const data = await resp.json();
            setData(data.hits)
            console.log("datais",data.hits)

            
            

           

        }catch(error){

            console.log(error)

            

        }
    }

    useEffect(()=>{

        getText(API);
        
        

        
    },[])

  return (
    <>

    {/* <h1 className="bg-gray-300 p-5 rounded-xl w-[400px] ">This is My Title Page</h1> */}

    <div className=" text-center grid grid-cols-3 place-items-center h-screen mx-auto bg-gray-500 ">

        
        

      {data1.map((item, index) => {

        return(
 
    <div key={index} className=" w-[300px] text-center bg-gray-300  shadow-xl p-3 rounded-xl text-center m-3  h-[100px]">
      <h3>{item.title || "No title"}</h3>
    </div>

    );
 
})}
    </div>

    
    </>
  )
}

export default Axios
