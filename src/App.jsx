import { BrowserRouter, Routes, Route } from "react-router-dom"
import Places from "./pages/Places"
import Houses from "./pages/Houses"
import Food from "./pages/Foods"
import Currency from "./pages/Currency"
import Default from "./components/Default"
import { GlobalProvider } from "./context/GlobalContext"
import House from "./pages/House"
import Place from "./pages/Place"
import Fun from "./pages/Fun"
import Foods from "./pages/Foods"

export default function App(){
  return <BrowserRouter>
  <GlobalProvider>
     <Routes>
      <Route path="/" element={<Default/>}>
        <Route path="/places" element={<Places/>}/>
        <Route path="/places/:id" element={<Place/>}/>
        <Route path="/houses" element={<Houses/>}/>
        <Route path="/houses/:id" element={<House/>}/>
        <Route path="/foods" element={<Foods/>}/>
        <Route path="/fun" element={<Fun/>}/>
        <Route path="/currency" element={<Currency/>}/>
      </Route>
    </Routes>
  </GlobalProvider>
  </BrowserRouter>
}