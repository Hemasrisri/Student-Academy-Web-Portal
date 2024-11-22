import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './pages/chat/Chat'
import ViewUsers from './pages/Users/ViewUsers'
import Home from './pages/home/Home'
import SignUp from './pages/sign in/SignUp'
import Signin from './pages/sign in/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserHome from './pages/home/UserHome'
import ViewProfile from './pages/Users/ViewProfile'
import FeedbackForm from './pages/Users/FeedbackForm'
import ViewOthersProfile from './pages/Users/ViewOthersProfile '
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import UpdateProfile from './pages/Users/UpdateProfile'
import { SearchProvider } from './pages/api/SearchContext'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <SearchProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/update/:id' element={<UpdateProfile/>}/>
      <Route path='/login' element={<Signin/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/user' element={<UserHome/>}/>
      <Route path='/users' element={<ViewUsers/>}/>
      <Route path='/feedback/:id' element={<FeedbackForm/>}/>
      <Route path='/view/:id' element={<ViewOthersProfile/>}/>
   
    </Routes>
    </BrowserRouter>
<ToastContainer/>
</SearchProvider>
  </div>
  )
}

export default App
