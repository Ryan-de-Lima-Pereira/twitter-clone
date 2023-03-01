import Avatar from './Avatar'
import Info from './Info'
import FollowButton from './FollowButton'

interface Props {
    name: string,
    nickname: string
}

const FollowSugestion: React.FC<Props> = (props) => {
    return(
        <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center'>
                <Avatar/>
                <Info>
                    <strong className='text-base'>{props.name}</strong>
                    <span className='text-base text-gray'>{props.nickname}</span>
                </Info>
            </div>

            <FollowButton> Seguir </FollowButton>
        </div>
    )
}

export default FollowSugestion