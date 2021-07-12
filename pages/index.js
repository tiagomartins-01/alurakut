import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import ProfileSideBar from '../src/components/ProfileSideBar/ProfileSideBar';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';

export default function Home() {
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
    ]

  return( 
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSideBar />
      </div>

      <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box>
          <h1 className="title">
            Bem Vindo(a)
          </h1>
          <OrkutNostalgicIconSet />
        </Box>
      </div>

      <div className="profileRealtionsArea" style={{gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
          Pessoas ({pessoasFavoritas.length})
          </h2>

          <ul>
          {pessoasFavoritas.map((itemAtual) => {
            return (
              <li>
                <a href={'/users/${itemAtual}'} key={itemAtual}>
                  <img src={`https://github.com/${itemAtual}.png`} />
                  <span>{itemAtual}</span>  
                </a>
              </li>
            )
          })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  );
}
