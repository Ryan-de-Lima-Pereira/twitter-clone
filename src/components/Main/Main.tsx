import ProfileInfo from "./Header/ProfileInfo"
import Header from "./Header/Header"
import {BackIcon, HomeIcon, BellIcon, EmailIcon, SearchIcon} from "./Header/Icons"
import BottomMenu from './Header/BottomMenu'
import ProfilePage from './ProfilePage/ProfilePage'

function index() {
  return (
    <div className="flex flex-col w-[min(601px,100%)] 
    min-[500px]:border-l min-[500px]:border-solid min-[500px]:border-outline ">
      <Header>

        <button className="rounded-full p-2 cursor-pointer
        hover:bg-twitter-dark-hover">
          <BackIcon/>
        </button>

        <ProfileInfo>
          <strong className="text-lg">Joseph Daguerre</strong>
          <span className="text-[15px] text-gray">10 tweets</span>
        </ProfileInfo>

        <BottomMenu>
            <HomeIcon/>
            <SearchIcon/>
            <BellIcon/>
            <EmailIcon/>
        </BottomMenu>

      </Header>

      <ProfilePage/>      
    </div>
  )
}

export default index