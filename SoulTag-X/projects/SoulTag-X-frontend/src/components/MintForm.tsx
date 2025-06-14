import { useState } from 'react'

interface MintFormProps {
  onMint: (data: {
    address: string
    type: string
    metadata: { name: string; description: string; image: string }
  }) => void
}

const MintForm: React.FC<MintFormProps> = ({ onMint }) => {
  const [address, setAddress] = useState('')
  const [type, setType] = useState('KYC')
  const [metadata, setMetadata] = useState({
    name: '',
    description: '',
    image: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!address || !metadata.name || !metadata.image) return
    onMint({ address, type, metadata })
    setAddress('')
    setMetadata({ name: '', description: '', image: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow max-w-md">
      <h3 className="text-xl font-semibold">Mint SoulTag</h3>
      <input
        className="input w-full"
        placeholder="Recipient Wallet Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <select
        className="input w-full"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="KYC">KYC</option>
        <option value="Developer">Developer</option>
        <option value="DAO">DAO</option>
        <option value="Access">Access</option>
        <option value="Custom">Custom</option>
      </select>
      <input
        className="input w-full"
        placeholder="Tag Name"
        value={metadata.name}
        onChange={(e) => setMetadata({ ...metadata, name: e.target.value })}
        required
      />
      <input
        className="input w-full"
        placeholder="Description"
        value={metadata.description}
        onChange={(e) => setMetadata({ ...metadata, description: e.target.value })}
      />
      <input
        className="input w-full"
        placeholder="Image URL (IPFS or CDN)"
        value={metadata.image}
        onChange={(e) => setMetadata({ ...metadata, image: e.target.value })}
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Mint
      </button>
    </form>
  )
}

export default MintForm
