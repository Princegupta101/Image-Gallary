import { Route, Routes } from "react-router-dom"
import GallaryList from "../GallaryList/GallaryList"
import ImageDetail from "../ImageDetail/ImageDetail"

function CustonRoutes(){
    return(
        <Routes>
            <Route path="/"  element={<GallaryList/>}/>
            <Route path="/:id"  element={<ImageDetail/>}/>
        </Routes>
    )
}
export default CustonRoutes