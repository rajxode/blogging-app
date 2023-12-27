
import { RouterProvider, createBrowserRouter , createRoutesFromElements , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import AddBlog from './pages/AddBlog';
import SingleBlogPage from './pages/SingleBlogPage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/addblog' element={<AddBlog />} />
          <Route path='/singleblog' element={<SingleBlogPage />} />
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
