import { Routes, Route } from "react-router-dom";

import {
  Header,
  Cards,
  CityOne,
  About,
  Footer

} from "./components";

const App = () => {

  return (
    <>
      <Header />

      <div className="container wrapper">

        <Routes>

          <Route path="/" element={<Cards />} />
          <Route path="/about" element={<About />} />
          <Route path="/city/:idCity" element={

              <> 
                <CityOne />
                <Cards />
              </>
                
          } />
          
          <Route
            path="*"
            element={
              <div>
                <p style={{textAlign: "center", marginBottom: "1rem", color: "#2229"}}>There's nothing here!</p>
              </div>
            }
          />

        </Routes>
      
      </div>

      <Footer />

    </>
  )
}

export default App;
