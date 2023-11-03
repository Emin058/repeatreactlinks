
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import ContactUs from './components/ContactUs/ContactUs';
import Layout from './components/Layout/Layout';



function App() {
  return (
<BrowserRouter>
  <Routes>
     <Route path="/" element={<Layout/>}>
     <Route index element={<Home/>}/>
     <Route path="/blogs" element={<Blogs/>}/>
     <Route path="/contacts" element={<ContactUs/>}/>
     </Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
