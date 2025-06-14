interface TagCardProps {
  type: string
  metadata: {
    name: string
    description: string
    image: string
  }
  issuedDate: string
}

const TagCard: React.FC<TagCardProps> = ({ type, metadata, issuedDate }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-sm border border-gray-200">
      <img
        src={metadata.image}
        alt={metadata.name}
        className="rounded w-full h-48 object-cover mb-3"
      />
      <h3 className="text-lg font-semibold text-blue-700">{metadata.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{metadata.description}</p>
      <p className="text-xs text-gray-400">Type: {type}</p>
      <p className="text-xs text-gray-400">Issued: {issuedDate}</p>
    </div>
  )
}

export default TagCard
