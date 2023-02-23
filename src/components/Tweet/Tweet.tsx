import Avatar from './Avatar'
import Body from './Body'
import Retweet from './Retweet'
import Header from './Header'
import Content from './Content'
import Description from './Description'
import ImageContent from './ImageContent'
import Status from './Status'
import Date from './Date'
import Dot from './Dot'
import {Icons, LikeIcon, CommentIcon, RetweetIcon, RetweetIconMini} from './Icons'

function Tweet() {

  return (
    <div className="flex flex-col py-4 px-4 border-solid border-b-outline border-b relative cursor-pointer  before:bg-gray before:inset-0  before:absolute before:opacity-10 before:invisible hover:before:visible">
        <Retweet>
            <RetweetIconMini/>
            Você retweetou     
        </Retweet> 

        <Body>
            <Avatar/>

            <Content>
                <Header>
                    <strong className='truncate mr-1'>Joseph Daguerre</strong>
                    <span className='text-gray truncate'>@DaguerreJoseph</span>
                    <Dot/>
                    <Date><span className='text-gray'>26 de jun de 2021</span></Date>
                </Header>

                <Description>
                    <span>Ae rapaziada, deu ruim! héhéhé ferro muito</span>
                </Description>

                <ImageContent/>

                <Icons>
                    <Status>
                        <CommentIcon/>
                        2
                    </Status>
                    <Status>
                        <RetweetIcon/>
                        2
                    </Status>
                    <Status>
                        <LikeIcon/>
                        2
                    </Status>
                </Icons> 
            </Content>
        </Body>
    </div>)
};

export default Tweet