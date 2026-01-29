import Image from 'next/image'

interface AvatarProps {
  name: string
  picture: string
}

export default function Avatar({ name, picture }: AvatarProps) {
  return (
    <div className="avatar-image">
      <Image src={picture} alt={name} width={48} height={48} />
    </div>
  )
}
