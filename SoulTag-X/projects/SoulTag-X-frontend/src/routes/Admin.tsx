import MintForm from '../components/MintForm'
import TagCard from '../components/TagCard'
import { mintSoulTag, getSoulTagsByWallet } from '../utils/soulTagStore'
import { useState, useEffect } from 'react'

const Admin = () => {
  const [tags, setTags] = useState([])

  const handleMint = (data) => {
    const result = mintSoulTag({
      address: data.address,
      type: data.type,
      metadata: data.metadata,
      issued: new Date().toISOString(),
    })
    if (result) {
      alert('Minted successfully')
      setTags(getSoulTagsByWallet(data.address))
    } else {
      alert('Tag already exists for this wallet and type')
    }
  }

  return (
    <div className="p-6 space-y-6">
      <MintForm onMint={handleMint} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tags.map((tag, idx) => (
          <TagCard key={idx} {...tag} />
        ))}
      </div>
    </div>
  )
}
