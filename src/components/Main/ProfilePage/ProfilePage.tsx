import {LocationIcon, CakeIcon, CalendarIcon} from './Icons'
import Container from './Container'
import Banner from './Banner'
import ProfileData from './ProfileData'
import Avatar from './Avatar'
import Followage from './Followage'
import EditButton from './EditButton'
import Feed from '../../Feed/Feed'

function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar></Avatar>
      </Banner>

      <ProfileData>
        <EditButton>
          Edite seu perfil
        </EditButton>

        <h1 className='font-bold text-xl'>Joseph Daguerre</h1>
        <h2 className='font-normal text-base text-gray'>@DaguerreJoseph</h2>

        <p className='text-base mt-3'>
          Um fotógrafo brincalhão que quer mudar o mundo
        </p>

        <ul className='flex flex-col py-3'>

          <li className='flex flex-col text-base text-gray sm:flex-row'>
            <div className='flex flex-row items-center'>
              <LocationIcon/>
              <span>Atualmente morando no inferno</span>
            </div>
            <div className='flex flex-row items-center sm:ml-8'>
              <CakeIcon/>
              <span>Nascido(a) em 2061</span>
            </div>
          </li>

          <li className='flex flex-row itens-center text-base text-gray'>
            <CalendarIcon/>
            <span>Ingressou em abril de 2084</span>
          </li>

        </ul>

        <Followage>
          <span className='text-gray'><strong className='text-white'>189 </strong>Seguindo</span>

          <span className='ml-4 text-gray'> <strong className='text-white'>30 </strong> Seguidores</span>
        </Followage>

      </ProfileData>

      <Feed/>

    </Container>
  )
}

export default ProfilePage