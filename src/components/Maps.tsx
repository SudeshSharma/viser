import React from 'react'
import {Map,GoogleApiWrapper,Marker} from 'google-maps-react'


const mapStyles = {
    width: '100%',
    height: '100%'
}

 export default class Maps extends React.Component{
    render(){
        return(
            <div>
                {/* <Map
                    google={this.props.google}
                    zoom={8}
                    style={{mapStyles}}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
        >
            <Marker position={{lat:48.00,lng: -122.00}}/>
        </Map> */}
            </div>
        )
    }

}

// export default GoogleApiWrapper({
//     apiKey: 'TOKEN HERE'
//   })(Maps);