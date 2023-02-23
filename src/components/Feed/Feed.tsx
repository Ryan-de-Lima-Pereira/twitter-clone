import Tab from './Tab'
import { useState } from 'react'
import Tweets from './Tweets'
import Tweet from '../Tweet/Tweet'

function Feed() {
    const [abaAtiva,setAba] = useState(0)

    const btnDefault = 'flex justify-center items-center flex-grow h-14 px-4 cursor-pointer text-gray hover:bg-secondary border-solid border-b-outline border-b'

    const btnActive = 'flex justify-center items-center flex-grow relative h-14 px-4 cursor-pointer text-white font-bold border-solid border-b-outline border-b'

    const spanDefault = 'flex justify-center items-center relative h-full';

    const spanActive = 'flex justify-center items-center relative h-full before:absolute before:bottom-0 before:bg-twitter before:h-1 before:w-full before:rounded';

    return (
        <div className="flex flex-col">
            <Tab>
                <a className={abaAtiva === 1 ? btnActive : btnDefault} onClick={() => {setAba(1)}} href="#" >
                    <span className={abaAtiva === 1 ? spanActive : spanDefault}>Tweets</span>
                </a>

                <a className={abaAtiva === 2 ? btnActive : btnDefault} onClick={() => {setAba(2)}} href="#">
                    <span className={abaAtiva === 2 ? spanActive : spanDefault}>Tweets e respostas</span>
                </a>

                <a className={abaAtiva === 3 ? btnActive : btnDefault} onClick={() => {setAba(3)}} href="#">
                    <span className={abaAtiva === 3 ? spanActive : spanDefault}>Mídia</span>
                </a>

                <a className={abaAtiva === 4 ? btnActive : btnDefault} onClick={() => {setAba(4)}} href="#">
                    <span className={abaAtiva === 4 ? spanActive : spanDefault}>Curtidas</span>
                </a>
            </Tab>

            <Tweets>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
            </Tweets>
        </div>
  )
}

export default Feed