import JosephIcon from '../../img/JosephIcon.jpg'

const Avatar = () => {
    return(
        <div className="rounded-full bg-gray flex-shrink-0 w-10 h-10 overflow-hidden">
            <img src={JosephIcon}></img>
        </div>
    )
}

export default Avatar