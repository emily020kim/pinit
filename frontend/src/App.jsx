import { Routes, Route, useNavigate } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/Login'
import Home from './container/Home'

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </ChakraProvider>
  )
}

export default App
