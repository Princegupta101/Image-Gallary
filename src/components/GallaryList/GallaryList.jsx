import axios from "axios";
import { useEffect, useState } from "react";
import Gallaryimage from "../Gallaryimage/Gallaryimage";
 
function GallaryList(){
    const [imageList, setImageList]=useState([]);
    const [isLoading, setLoading ]= useState(true);

    async function downloadImage(){
            setLoading(false);
        const response= await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');
        const {photos}=  response.data;
        console.log(photos);
        setImageList(photos);
    }
    useEffect(()=>{
        downloadImage();
    },[])
    return(         
        <div className=" flex mt-12 items-center flex-row flex-wrap gap-5 justify-around">
                {(isLoading)?"Loading...":
                imageList.map((p,i)=>
                < Gallaryimage image={p.url} key={i}/>
                )}
        </div>

    )
}
export default GallaryList;