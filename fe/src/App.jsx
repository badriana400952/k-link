
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/user/login";
import Register from "./component/user/Register";
import Home from "./page/home";
const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />


          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
