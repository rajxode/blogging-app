
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import AddBlog from './pages/AddBlog';
import SingleBlogPage from './pages/SingleBlogPage';
import EditBlog from './pages/EditBlog';
import UsersProfile from './pages/UsersProfile';
import Settings from './pages/Settings';
import MyLibrary from './components/MyLibrary';
import MyBlogs from './components/MyBlogs';
import EditInfo from './components/EditInfo';
import ChangePassword from './components/ChangePassword';
import DeleteAccount from './components/DeleteAccount';
import { jwtDecode } from 'jwt-decode';


const isUserAuthenticated = () => {
  const token = localStorage.getItem('token');
  if(token){
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp < Date.now() / 1000) {
      return false;
    }
    return true;
  }
  return false;
};


const ProtectedRoute = () => {
  const isAuthenticated = isUserAuthenticated();
  const location = useLocation();
  return isAuthenticated 
    ?
    <Outlet /> 
    :
    <Navigate to="/" state={{from:location}} replace /> 
};


const ProtectedAuthRoute = () => {
  const isAuthenticated = isUserAuthenticated();
  const location = useLocation();
  return !isAuthenticated 
    ?
    <Outlet /> 
    :
    <Navigate to="/home" state={{from:location}} replace /> 
};


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<ProtectedAuthRoute />} >
        <Route path='/' element={<Navbar />}>
          <Route index element={<LandingPage />} />
          <Route path='singleblog/:id' element={<SingleBlogPage />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoute />} >
        <Route path='home' element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path='addblog' element={<AddBlog />} />
          <Route path='singleblog/:id' element={<SingleBlogPage />} />
          <Route path='editblog/:id' element={<EditBlog />} />
          <Route path='profile' element={<UsersProfile />} >
            <Route path='mylist' element={<MyBlogs />} />
            <Route path='library' element={<MyLibrary />} />
          </Route>
          <Route path='settings' element={<Settings />} >
            <Route path='account' element={<EditInfo />} />
            <Route path='delete' element={<DeleteAccount />} />
            <Route path='password' element={<ChangePassword />} />
          </Route>
        </Route>
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App;
