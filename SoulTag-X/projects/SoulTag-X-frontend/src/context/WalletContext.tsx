import React, { createContext, useContext, useState, useEffect } from 'react'
import PeraWalletConnect from '@perawallet/connect'

const peraWallet = new PeraWalletConnect()
const ADMIN_WALLET = import.meta.env.VITE_ADMIN_WALLET

interface WalletContextType {
  account: string | null
  isAdmin: boolean
  connect: () => Promise<void>
  disconnect: () => void
}

const WalletContext = createContext<WalletContextType | null>(null)

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [account, setAccount] = useState<string | null>(null)

  const connect = async () => {
    try {
      const accounts = await peraWallet.connect()
      setAccount(accounts[0])
    } catch (err) {
      console.error('Wallet connect error', err)
    }
  }

  const disconnect = () => {
    peraWallet.disconnect()
    setAccount(null)
  }

  const isAdmin = account === ADMIN_WALLET

  useEffect(() => {
    peraWallet.reconnectSession().then((accounts) => {
      if (accounts.length) setAccount(accounts[0])
    })
  }, [])

  return (
    <WalletContext.Provider value={{ account, isAdmin, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => {
  const context = useContext(WalletContext)
  if (!context) throw new Error('useWallet must be used within WalletProvider')
  return context
}
