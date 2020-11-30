import React from 'react'
import TopMenu from './TopMenu'
import Footer from './Footer'

import '../styles/app.scss'

const Layout = ({ children }) => {
    return (
        <div className="App d-flex flex-column justify-content-center ">
            <main id="page">
                <TopMenu />
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
