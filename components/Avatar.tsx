interface AvatarProps {
  name: string
  picture: string
}

export default function Avatar({ name, picture }: AvatarProps) {
  return (
    <div className="avatar-image">
      <img src={picture} alt={name} />
    </div>
  )
}
