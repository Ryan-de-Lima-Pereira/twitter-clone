import {LocationIcon, CakeIcon, CalendarIcon} from './Icons'
import Container from './Container'
import Banner from './Banner'
import ProfileData from './ProfileData'
import Avatar from './Avatar'
import Followage from './Followage'


function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar></Avatar>
      </Banner>

      <ProfileData>
        {/*<EditButton>
          Edite seu perfil
        </EditButton>*/}

        <h1 className='font-bold text-xl'>Joseph Daguerre</h1>
        <h2 className='font-normal text-base text-gray'>@DaguerreJoseph</h2>

        <p className='text-base mt-3'>
          Um fotógrafo brincalhão que quer mudar o mundo
        </p>

        <ul className='py-3'>

          <li className='text-base text-gray'>
            <LocationIcon/>
            Atualmente morando no inferno
          </li>
          <li className='text-base text-gray'>
            <CakeIcon/>
            Nascido(a) em 2061 
          </li>
          <li className='text-base text-gray'>
            <CalendarIcon/>
            Ingressou em abril de 2084
          </li>

        </ul>

        <Followage>
          <span>Seguindo <strong> 189</strong> </span>

          <span> <strong>30 </strong> seguidores</span>
        </Followage>

      </ProfileData>
    </Container>
  )
}

export default ProfilePage