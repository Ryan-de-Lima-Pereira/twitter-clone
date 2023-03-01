import {BellIcon, EllipseCircleIcon, EmailIcon, HashTagIcon, UserIcon, HomeIcon, ExitIcon} from './Icons'

import Logo from './Logo'
import MenuButton from './MenuButton'
import Topside from './Topside'
import Button from '../Button/Button'
import ProfileData from './ProfileData'
import Botside from './Botside'
import Avatar from './Avatar'

const MenuBar = () => {
  return (
    <div className='hidden min-[500px]:flex min-[500px]:flex-col min-[500px]:justify-between min-[500px]:sticky min-[500px]:top-0 min-[500px]:left-0 min-[500px]:pt-2 min-[500px]:px-5 min-[500px]:pb-5 min-[500px]:max-h-screen overflow-y-auto'>
      <Topside>

        <Logo/>

        <MenuButton>
          <HomeIcon/>
          <span>Pagina inicial</span>
        </MenuButton>

        <MenuButton>
          <HashTagIcon/>
          <span>Explorar</span>
        </MenuButton>

        <MenuButton>
          <BellIcon/>
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon/>
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <UserIcon/>
          <span>Perfil</span>
        </MenuButton>

        <MenuButton>
          <EllipseCircleIcon/>
          <span>Mais</span>
        </MenuButton>

        <Button>
          <span>Twettar</span>
        </Button>
        
      </Topside>

      <Botside>
        <Avatar/>

        <ProfileData>
          <strong>Joseph Daguerre</strong>
          <p className="text-gray">@DaguerreJoseph</p>

        </ProfileData>
        <ExitIcon/>

      </Botside>
    </div>
  )
}

export default MenuBar