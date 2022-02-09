import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import SSentryIMG from '../assets/images/sentry-logo.svg'

export default function Header() {
    return (
        <Jumbotron fluid style={{ backgroundColor: "#F7F7F7", padding: 0 }}>
            <Container>
                <img src={SSentryIMG} alt="sentry-img" className="img-responsive" width="15%" />
            </Container>
        </Jumbotron> 
    )
}
