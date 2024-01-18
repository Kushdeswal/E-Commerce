import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import FrontPageLayout from './layout/FrontPageLayout';
import DashboardMain from './Dashboard/DashboardMain';
import Users from  './DashboardPages/Users';
import Setting from './DashboardPages/Setting';
import Products from './DashboardPages/Products';
import Addproducts from './DashboardPages/Addproducts';
import Sales from './DashboardPages/Sales';
import Orders from './DashboardPages/Order';
import Error from './Pages/Error';


function App() {
  return (
      <>
      
      <Routes>
      <Route exact path='/' element={<FrontPageLayout/>}  />
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route  path='*' element={<Error/>}/>
      <Route exact path='/dashboard' element={<DashboardMain/>}>
         <Route index element={<Users/>} />
        <Route exact path='setting' element={<Setting/>} />
        <Route exact path='products' element={<Products/>} />
        <Route exact path='addproducts' element={<Addproducts/>} />
        <Route exact path='sales' element={<Sales/>} />
        <Route exact path='orders' element={<Orders/>} />
        </Route>
      </Routes>
     

   </>
  );
}

export default App;
