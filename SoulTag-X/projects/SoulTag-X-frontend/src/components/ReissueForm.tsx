import { useState } from 'react'
import sha256 from 'crypto-js/sha256'

interface ReissueFormProps {
  onRequest: (userHash: string, tagType: string) => void
}

const ReissueForm: React.FC<ReissueFormProps> = ({ onRequest }) => {
  const [email, setEmail] = useState('')
  const [tagType, setTagType] = useState('KYC')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const userHash = sha256(email).toString()
    onRequest(userHash, tagType)
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow max-w-md">
      <h3 className="text-xl font-semibold">Request Reissue</h3>
      <input
        className="input w-full"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <select
        className="input w-full"
        value={tagType}
        onChange={(e) => setTagType(e.target.value)}
      >
        <option value="KYC">KYC</option>
        <option value="Developer">Developer</option>
        <option value="DAO">DAO</option>
        <option value="Access">Access</option>
        <option value="Custom">Custom</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Request
      </button>
    </form>
  )
}

export default ReissueForm
