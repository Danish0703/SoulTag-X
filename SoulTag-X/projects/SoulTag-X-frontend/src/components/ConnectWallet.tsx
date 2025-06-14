import { useWallet } from '../context/WalletContext'

const ConnectWallet = () => {
  const { account, connect, disconnect } = useWallet()

  return (
    <div className="flex gap-2 items-center">
      {account ? (
        <>
          <span className="text-sm text-gray-600">Connected: {account.slice(0, 6)}...{account.slice(-4)}</span>
          <button onClick={disconnect} className="px-3 py-1 bg-red-500 text-white rounded">Disconnect</button>
        </>
      ) : (
        <button onClick={connect} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Connect Wallet
        </button>
      )}
    </div>
  )
}

export default ConnectWallet
