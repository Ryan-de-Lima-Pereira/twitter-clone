import ProfileInfo from "./ProfileInfo"
import Header from "./Header"

function index() {
  return (
    <div>
      <Header>

        <button>
          {/*<BackIcon/>*/}
        </button>

        <ProfileInfo>
          <strong>Joseph Daguerre</strong>
          <span>10 tweets</span>
        </ProfileInfo>

        {/*<ProfilePage></ProfilePage>*/}

        {/*<BottomMenu>
            <HomeIcon/>
            <SearchIcon/>
            <BellIcon/>
            <EmailIcon/>
          </BottomMenu>*/}

      </Header>
    </div>
  )
}

export default index