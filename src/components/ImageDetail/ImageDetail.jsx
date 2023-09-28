import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ImageDetail(){
    const {id}=useParams();
    const[data, setData]= useState();
    async function imadeDownload(){
        const resp=await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
       const {photo}=resp.data;
       setData(photo);
    }
    useEffect(()=>{
        imadeDownload();
    },[])
    return(
        <div className="flex items-center text-white   rounded-lg shadow content-center self-center  p-6 m-auto mt-36  w-4/6  bg-[#02438d]" >
        <img src={data?.url} className="w-80 shadow rounded-xl h-72" />
        <div>
            <h1 className=" p-3  text-3xl font-extrabold">{data?.title}</h1>
            <p className="p-3 text-base">
                {data?.description}
            </p>
        </div>
        </div>
    )
}
export default ImageDetail;