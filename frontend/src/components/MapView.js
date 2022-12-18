import React, {useState,useEffect} from 'react'
// import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import { YMaps,Map ,Placemark, withYMaps} from '@pbe/react-yandex-maps';
import "../CSS/MapView.css"


const MapNote = () =>{

  //updating state
  let [events,setNotes] = useState([])
  useEffect(()=>{
      // calling get notes
      getNotes()
  },[])

  let getNotes = async() =>{
      // getting notes
     let response = await fetch('https://geocode-maps.yandex.ru/1.x/?apikey=49e7b902-73b4-431d-8b04-330c8c80f907&geocode=Петрозаводск+Черняховского+32&format=json')
     let data = await response.json()
     console.log('DATA: ', data["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["Point"]["pos"])
     let data1 = data["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["Point"]["pos"]

     data1 = data1.split(" ")
     console.log('one coord',data1[0])
     
     setNotes(data1)

  }

    return(
        <YMaps>
                <ConnectedTemplateProvider>
      {({ template }) => (
        
   
        <Map state={{ center: [events[1], events[0]], zoom: 9 }}>
          
            <Placemark
              geometry={[events[1], events[0]]}
              options={{ balloonContentLayout: template }}
              // Load balloon addon for all geo objects
              modules={['geoObject.addon.balloon']}
            />
         
        </Map>
        )}

        </ConnectedTemplateProvider>
      </YMaps>
    )
}

export default MapNote



class TemplateProvider extends React.Component {
    constructor() {
      super();
      this.state = { template: null };
    }
  
    componentDidMount() {
      this.setState({
        template: this.props.ymaps.templateLayoutFactory.createClass(
          '<h3>Hello</h3>'
        ),
      });
    }
  
    render() {
      return this.props.children({ template: this.state.template });
    }
  }
  
  const ConnectedTemplateProvider = withYMaps(TemplateProvider, true, [
    'templateLayoutFactory',
  ]);
// function Map(){
//     return <GoogleMap zoom={10} center={{lat:44, lng:-80}} mapContainerClassName="map-container">

//     </GoogleMap>
// }