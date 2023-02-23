import JosephIcon from '../../img/JosephIcon.jpg'

function Avatar() {
  return (
    <div className="w-12 h-12 rounded-full flex-shrink-0 bg-gray absolute top-0 left-0 overflow-hidden">
      <img src={JosephIcon}></img>
    </div>
  )
}

export default Avatar