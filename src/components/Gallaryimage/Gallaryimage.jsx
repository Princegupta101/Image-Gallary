import { useNavigate } from "react-router-dom";

function Gallaryimage({ image,id}){
    const navigate = useNavigate()
    const redirectToPage=()=>{
        navigate(`${id}`)
    }
    return(
        <div >
            <img src={image}  className=" rounded-md w-25vw h-64" onClick={redirectToPage} />
        </div > 
    )
}
export default Gallaryimage;