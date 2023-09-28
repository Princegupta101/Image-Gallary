import axios from "axios";
import { useEffect, useState } from "react";
import Gallaryimage from "../Gallaryimage/Gallaryimage";
 
function GallaryList(){
    const [imageList, setImageList]=useState([]);// collect all image in array for render
    const[isLoading, setIsLoading]=useState(true);// image loading and  download

    async function downloadImage(){
        setIsLoading(false);//image are download
        const response= await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');// link to fetch image 
        const {photos}=  response.data;// access the api data in filter through photos  attribute
        console.log(photos); 
        setImageList(photos); // set all in array for traverse
    }
    useEffect(()=>{
        downloadImage();
    },[])
    return(         
        <div className=" flex mt-12 items-center flex-row flex-wrap gap-5 justify-around text-center">
             {(isLoading)? 'Loading....': 
                imageList.map((p,i)=>< Gallaryimage image={p.url} key={i} id={p.id}/> )  
                 }

        </div>

    )
}
export default GallaryList;