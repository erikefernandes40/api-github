import React from 'react'
import { useHistory } from 'react-router-dom';
import { Container, NumberContainer } from './styles'

const UserNumbers = props => {
    const history = useHistory()
    const handleOnClick = route => history.push(route)
    return(
    <Container>
        <NumberContainer  onClick={() => handleOnClick('/repos')}>
            <h1>{props.repos}</h1>
            <h2>repositorios</h2>
        </NumberContainer>

        <NumberContainer>
            <h1>{props.followers}</h1>
            <h2>seguidores</h2>
        </NumberContainer>

        <NumberContainer>
            <h1>{props.following}</h1>
            <h2>seguindo</h2>
        </NumberContainer>
    </Container>
)};

export default UserNumbers;