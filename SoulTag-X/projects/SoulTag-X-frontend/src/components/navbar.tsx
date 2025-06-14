import { Link } from 'react-router-dom'
import ConnectWallet from './ConnectWallet'
import Account from './Account'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-lg font-bold text-blue-700">SoulTag X</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/verify">Verify</Link>
        <Link to="/help">Help</Link>
        <Link to="/docs">Docs</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Account />
        <ConnectWallet />
      </div>
    </nav>
  )
}

export default Navbar
