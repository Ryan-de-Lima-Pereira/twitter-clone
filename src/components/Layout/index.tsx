import Container from './Container'
import Warpper from './Warpper'
import Main from '../Main/Main'
//import MenuBar from './MenuBar'
import MenuBar from '../MenuBar/MenuBar'
import SideBar from '../SideBar/SideBar'

export default function Layout() {
  return (
    <Container>
        <Warpper>
            <MenuBar/>
            <Main/>
            <SideBar/>
        </Warpper>
    </Container>
  )
}
