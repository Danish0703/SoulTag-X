export interface SoulTagMetadata {
  name: string
  description: string
  image: string
}

export interface SoulTag {
  address: string
  type: string
  metadata: SoulTagMetadata
  issued: string
  lastReissue?: string
}

const TAG_KEY = 'soultags'

const getAllTags = (): SoulTag[] => {
  const stored = localStorage.getItem(TAG_KEY)
  return stored ? JSON.parse(stored) : []
}

const saveTags = (tags: SoulTag[]) => {
  localStorage.setItem(TAG_KEY, JSON.stringify(tags))
}

export const mintSoulTag = (tag: SoulTag) => {
  const tags = getAllTags()
  const existing = tags.find(
    (t) => t.address === tag.address && t.type === tag.type
  )
  if (existing) return false // Already exists
  tags.push(tag)
  saveTags(tags)
  return true
}

export const getSoulTagsByWallet = (wallet: string): SoulTag[] => {
  return getAllTags().filter((t) => t.address === wallet)
}

export const reissueSoulTag = (userHash: string, type: string): boolean => {
  const tags = getAllTags()
  const now = new Date().toISOString()

  const tag = tags.find((t) => t.address === userHash && t.type === type)
  if (!tag) return false

  const lastReissue = tag.lastReissue ? new Date(tag.lastReissue) : new Date(tag.issued)
  const cooldownPassed =
    new Date().getTime() - lastReissue.getTime() > 1000 * 60 * 60 * 24 * 30 // 30 days

  if (!cooldownPassed) return false

  tag.lastReissue = now
  saveTags(tags)
  return true
}

export const getSoulTagCooldown = (userHash: string, type: string): number => {
  const tags = getAllTags()
  const tag = tags.find((t) => t.address === userHash && t.type === type)
  if (!tag) return 0

  const lastTime = tag.lastReissue || tag.issued
  const next = new Date(lastTime).getTime() + 1000 * 60 * 60 * 24 * 30
  const now = Date.now()

  return next > now ? next - now : 0
}
