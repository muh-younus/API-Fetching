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

    <div className="h-screen bg-blue-600">

        <h1 className="text-blue-600 ">Hello</h1>
        

      {data1.map((item, index) => {

        return(
 
    <div key={index} className="bg-blue-500">
      <h3>{item.title || "No title"}</h3>
    </div>

    );
 
})}
    </div>

    
    </>
  )
}

export default Axios
