import React from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibGFtYWhhIiwiYSI6ImNsNTB1Y3kybjA5bGozZXBkZHcycmg5MjgifQ.TmKOtL10kavuCH5s2p-T2Q';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 33.3,
            lat: 47.8,
            zoom: 9
        };
        this.mapContainer = React.createRef();
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    }

    render() {
        return (
            <div>
            <div ref={this.mapContainer} className="map-container" />
            </div>
        );
    }
} 