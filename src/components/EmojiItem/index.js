import './index.css'

const EmojiItem = props => {
  const {item, updatestatusonclick} = props
  const {name, imageUrl} = item

  const clicked = () => {
    updatestatusonclick()
  }

  return (
    <li className="emoji-item-container">
      <img
        src={imageUrl}
        alt={name}
        className="emoji-image"
        onClick={clicked}
      />
      <p className="emoji-name">{name}</p>
    </li>
  )
}

export default EmojiItem
