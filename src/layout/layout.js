import React from "react"

import { Container } from './layoutStyles'

export const Layout = ({ children }) => {
    return (
        <Container>
            <main>{children}</main>
        </Container>
    )
}