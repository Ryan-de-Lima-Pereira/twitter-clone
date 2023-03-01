import SearchWrapper from './SearchWrapper'
import SearchInput from './SearchInput'
import SearchIcon from './SearchIcon'
import Body from './Body'
import List from '../List/List'
import FollowSugestion from '../FollowSugestion/FollowSugestion'
import New from '../News/News'

const SideBar = () => {

    return(
        <div className="hidden lg:flex w-[min(399px,100%)] flex-col py-1 px-2">
            <SearchWrapper>
                <SearchInput/>
                <SearchIcon/>
            </SearchWrapper>

            <Body>
                <List title="Talves você curta"
                elements={[
                    <FollowSugestion name='Richard Kante' nickname='@Pensador'/>,
                    <FollowSugestion name='Maria Schneider' nickname='@MariaSchneider'/>,
                    <FollowSugestion name='Jessica Lima' nickname='@JessicaLima'/>
                ]}/>

                <List title="O que está acontecendo"
                elements={[
                    <New title='Faz o L' topic='Política'/>,
                    <New title='Ataque ao Festival' topic='Noticia'/>,
                    <New title='Julgamento de Edward' topic='Justiça'/>,
                    <New title='Terremoto no Japão' topic='Noticia'/>
                ]}/>
            </Body>
        </div>
    )
}

export default SideBar