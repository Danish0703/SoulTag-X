import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './routes/Landing'
import Admin from './routes/Admin'
import Dashboard from './routes/Dashboard'
import Verify from './routes/Verify'
import Help from './routes/Help'
import Docs from './routes/Docs'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/help" element={<Help />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  )
}

export default App
