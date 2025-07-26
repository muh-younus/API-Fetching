import React from 'react'
import axios from 'axios'

function Axios() {

    const API = "https://unsplash.com/developers";

    const [image, setImage] = useState("");

    const getImage = async () =>{

        

        try{

            const resp = await axios.get(API);
            setImage(API)
            console.log(resp)

        }catch(error){

            console.log(error)

        }
    }

    useEffect(()=>{

        image();

    },[])
  return (
    <>

    <div>

        <h1>{getImage}</h1>
    </div>

    
    </>
  )
}

export default Axios
