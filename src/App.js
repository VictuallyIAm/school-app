import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Teachers from './pages/Teachers'
import MainLayout from './Layout/MainLayout'
import NotFound from './pages/NotFound'
import Courses from './pages/Courses'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/school-app" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="tutors" element={<Teachers />} />
            <Route path="courses" element={<Courses />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
