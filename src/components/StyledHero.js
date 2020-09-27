import Styled from 'styled-components'
import defImg from '../images/room-1.jpeg'


const StyledHero = Styled.header`
    min-height: 60vh;
    background: url(${props=> props.img ? props.img : defImg}) center/cover no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default StyledHero;