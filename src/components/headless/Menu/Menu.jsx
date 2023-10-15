import { StyledMenu } from '../../../styles/compound/styles.css'
import Toggle from '../toggle/index'

export default function Menu({ children }) {
    return (
      <Toggle>
        <StyledMenu>
          { children }
        </StyledMenu>
      </Toggle>
    )
}
