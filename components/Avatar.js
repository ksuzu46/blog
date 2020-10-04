export default function Avatar({ name, picture }) {
  return (
    <div className="avatar-image">
      <img src={picture} alt={name} />
    </div>
  )
}
