import { Link } from 'react-router-dom'
import GallaryList from './components/GallaryList/GallaryList'
import CustonRoutes from './components/routes/CoustomRoutes'
function App() {
  return (
    <div className="text-center">
      <Link to="/">
        <h1 className=" text-5xl font-bold underline underline-offset-1 tracking-[.35em] mt-8  ">  GALLARY</h1>
      </Link>
      <CustonRoutes/>
    </div>
  ) 
}

export default App
