import { useWallet } from '../context/WalletContext'

const Account = () => {
  const { account, isAdmin } = useWallet()

  if (!account) return null

  return (
    <div className="text-sm text-gray-700">
      <p>Wallet: {account}</p>
      <p>Role: {isAdmin ? 'Admin' : 'User'}</p>
    </div>
  )
}

export default Account
