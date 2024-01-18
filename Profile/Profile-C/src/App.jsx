import './App.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Recovery from './pages/Recovery';
import Reset from './pages/Reset';
import Profile from './pages/Profile';
import Verify from './pages/Verify';
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
     <Routes>
        <Route path="/*" element={<Signin/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
       

      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
    </>
  
  )
}

export default App
