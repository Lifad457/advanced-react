import { 
  Container,
  Images,
  Links
} from '../styles/index-styles.css'
import viteLogo from '../assets/icons/vite.svg'
import reactLogo from '../assets/icons/react.svg'
import { Link } from 'react-router-dom'

function Index() {
  return(
      <>
          <Container>
              <Images src={viteLogo} alt="Vite logo" />
              <Images src={reactLogo} alt="React logo" />
              <h1>Advanced React : </h1>
              <Links>
                  <Link to='simple-life'>Simple Life</Link>
              </Links>
          </Container>
      </>
  )
}
export default Index