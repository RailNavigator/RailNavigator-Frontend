import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Journey from './pages/Journey'
import Booking from './pages/Booking'
import Profile from './pages/Profile'
import Ticket from './pages/Ticket'
import UserList from './pages/UserList'
import Header from './components/Header'
import Footer from './components/Footer'
import JourneySearch from './components/JourneySearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      
      <JourneySearch />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/journey/:id" element={<Journey />}></Route>
        <Route path="/journey/:id/booking" element={<Booking />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/ticket/:id" element={<Ticket />}></Route>
        <Route path="/userlist" element={<UserList />}></Route>
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
