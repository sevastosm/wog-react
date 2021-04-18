import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Playlist from '../../components/playlist/Playlist'
import { GetSeries } from '../../mocks/mocks'
import AppContext from '../../components/AppContext'
import { UncontrolledCollapse } from 'reactstrap'
import { ReactComponent as Arrow } from '../../Assets/Header/Arrow.svg'
import VideoPlayer from '../../components/player/VideoPlayer'
import Filter from '../../components/filter/Filter'
import { Button } from 'reactstrap'

import './AllSeriesPage.scss'

let customList = GetSeries.Data

class AllSeriesPage extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.onClick = this.onClick.bind(this)
        this.state = { collapse: false, sermons: [] }
    }

    toggle = () => {
        this.setState(state => ({ collapse: !state.collapse }))
    }

    onClick = async e => {
        try {
            const { id } = e.target
            console.log(id)
            const response = await fetch(
                'https://www.wordofgod.gr/api/contents/search',
                {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({
                        Lang: 'gr',
                        DateFrom: '',
                        DateTo: '',
                        SpeakersList: [],
                        SeriesList: [id],
                        AllSeries: false,
                        Text: ''
                    })
                }
            )

            const data = await response.json()
            console.log(data.Data)
            this.setState({ sermons: data.Data })
        } catch (error) {
            console.log(error)
        }
    }

    // If serries has childern

    multiSerries = listItem => {
        return (
            <div>
                <div id={listItem.Name + listItem.ID} className="adv d-flex">
                    <a id="ctl00_main_adv1">{listItem.Name}</a>
                </div>
                <UncontrolledCollapse
                    style={{ padding: '4px 0px' }}
                    toggler={'#' + listItem.Name + listItem.ID}
                >
                    {listItem.Series.map(listItem => {
                        return (
                            <div key={listItem.ID} className="adv d-flex">
                                <Button
                                    id={listItem.ID}
                                    className="button"
                                    onClick={this.onClick}
                                >
                                    {listItem.Name}
                                </Button>
                            </div>
                        )
                    })}
                </UncontrolledCollapse>
            </div>
        )
    }

    render() {
        return (
            <AppContext.Consumer>
                {appState => (
                    <div>
                        {' '}
                        <div
                        >
                            <div className="col-lg-9 col-sm-12">
                                <VideoPlayer />
                            </div>
                        </div>
                        <div className="d-flex flex-wrap mt-2">
                            <div className="d-flex right-banners col-lg-3 col-sm-12">
                                <div className="d-flex flex-column  w-100">

                                    <Filter />
                                    {customList.map(listItem => {
                                        return (
                                            // If serries has childern
                                            listItem.Series ? (
                                                this.multiSerries(listItem)
                                            ) : (
                                                <div
                                                    key={listItem.ID}
                                                    className="adv d-flex"
                                                >
                                                    <Button
                                                        id={listItem.ID}
                                                        onClick={this.onClick}
                                                        className="button"
                                                    >
                                                        {listItem.Name}
                                                    </Button>
                                                </div>
                                            )
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="col-lg-9 col-sm-12">
                                <Playlist sermons={this.state.sermons} />
                            </div>
                        </div>
                    </div>
                )}
            </AppContext.Consumer>
        )
    }
}

export default AllSeriesPage
