
import { RouterProvider, createBrowserRouter , createRoutesFromElements , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';
import LandingPage from './pages/LandingPage';
import AddBlog from './pages/AddBlog';
import SingleBlogPage from './pages/SingleBlogPage';
import EditBlog from './pages/EditBlog';
import UsersProfile from './pages/UsersProfile';
import Settings from './pages/Settings';
import MyLibrary from './components/MyLibrary';
import MyBlogs from './components/MyBlogs';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Navbar />}>
          <Route index element={<LandingPage />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='home' element={<Home />} />
          <Route path='addblog' element={<AddBlog />} />
          <Route path='singleblog/:id' element={<SingleBlogPage />} />
          <Route path='editblog/:id' element={<EditBlog />} />
          <Route path='profile' element={<UsersProfile />} >
            <Route path='mylist' element={<MyBlogs />} />
            <Route path='library' element={<MyLibrary />} />
          </Route>
          <Route path='/settings' element={<Settings />} />
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
