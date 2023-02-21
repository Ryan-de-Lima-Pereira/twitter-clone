import JosephIcon from '../../../img/JosephIcon.jpg'

function Avatar() {
  return (
    <div className="absolute bottom-[max(-70px,-12vw)] left-4 w-[max(45px,min(135px,22vw))] h-[max(45px,min(135px,22vw))] border-solid border-primary border-4 rounded-full bg-gray overflow-hidden">

      <img src={JosephIcon} alt="Joseph" />

    </div>
  )
}

export default Avatar