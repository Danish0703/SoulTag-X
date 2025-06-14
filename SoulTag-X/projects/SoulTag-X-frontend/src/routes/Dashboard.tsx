import { useWallet } from '../context/WalletContext'
import { useEffect, useState } from 'react'
import TagCard from '../components/TagCard'
import { getSoulTagsByWallet } from '../utils/soulTagStore'

const Dashboard = () => {
  const { account } = useWallet()
  const [tags, setTags] = useState([])

  useEffect(() => {
    if (account) {
      setTags(getSoulTagsByWallet(account))
    }
  }, [account])

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Your SoulTags</h2>
      {tags.length === 0 ? (
        <p className="text-gray-500">No tags issued to this account yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tags.map((tag, idx) => (
            <TagCard key={idx} {...tag} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Dashboard
