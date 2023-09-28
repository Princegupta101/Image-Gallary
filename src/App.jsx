import GallaryList from './components/GallaryList/GallaryList'
import Search from './components/Search/Search'

function App() {

  return (
    <div className="flex flex-col justify-center  text-center">
    <h1 className="text-3xl font-bold tracking-[.5em] mt-8  ">  GALLARY</h1>
    <Search/>
    <GallaryList/>
  </div>
)
  
}

export default App
