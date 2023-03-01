import Dot from '../Tweet/Dot'

interface Props {
    topic: string,
    title: string
}


const News = (props: Props) => {
    return(
        <div className="flex flex-col text-base">

            <span className="flex flex-row items-center text-gray text-sm mb-1">{props.topic}<Dot/>Assunto do momento</span>

            <strong className='text-start'>{props.title}</strong>
        </div>
    )
}

export default News