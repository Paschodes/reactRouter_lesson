import { Route, Routes, useRoutes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './pages/Navbar'
import Education from './pages/Education'
import Career from './pages/Career'
import Book from './pages/Book'
import BookDetail from './pages/BookDetail'

//Building a website with Home | About Us | Contact Us pages

function App() {

  // //useRoutes() Hook method of Routing routes
  // const routes = [
  //   {path: '/', element: <Home />},
  //   {path: '/about', element: <About />},
  //   {path: '/contact', element: <Contact />},
  //   {path: '*', element: <NotFound />}
  // ]

  // let routesElement = useRoutes(routes);

  // return routesElement;


  return (
    <>
    {/* For Navigation */}
    <Navbar />

    {/* Component Approach of Routing routes (<Routes> </Routes> and <Route> approach) */}
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}>
        <Route path='/about/education' element={<Education />}/>
        <Route path='/about/career' element={<Career />}/>
      </Route>
      <Route path='/books' element={<Book />}>
        <Route path='/books/:id' element={<BookDetail />}/>
      </Route>
      <Route path='/contact' element={<Contact />}/>

      {/* *** wildcard *** */}
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
    
  )
}

export default App
