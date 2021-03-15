import React from 'react'
import TopMenu from './TopMenu'
import Footer from './footer/Footer'
import getData from '../api/apis'
import {endPoints} from '../constants'

import '../styles/app.scss'

export default function Layout ({ children }){
    getData(endPoints.GET_ALL_SERRIES)
    getData(endPoints.GET_RECENT)
    getData(endPoints.GET_PROGRAM)
    getData(endPoints.GET_NOW_PLAYNG)

    return (
        <div className="d-flex flex-column justify-content-center ">
            <main id="page">
                <TopMenu />
                {children}
            </main>
            <Footer />
        </div>
    )
}