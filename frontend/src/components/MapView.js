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
      let response = await fetch('http://127.0.0.1:8000/afinapp/events/')
      let data = await response.json()
      let data1;
      console.log('data from bd ', data)
      // data = data.split(" ")
    
      console.log("only address: ",data[0]["address"])

      const re_city = ".*(?=, )";
      const re_street = "(?<=, ).*(?= [0-9])"
      const re_house = "(?=.*)[0-9]+.*"
        let data2;
       for(let i=0; i<data.length; i++){
         let addr = data[i]["address"]


         const city_arr = addr.match(re_city);
         const city_street = addr.match(re_street);
         const city_house = addr.match(re_house); 

         console.log(city_arr[0],"+",city_street[0],"+",city_house[0])
         let city = city_arr[0]
         let street = city_street[0]
         let house = city_house[0]
        
        let response2 = await fetch("https://geocode-maps.yandex.ru/1.x/?apikey=49e7b902-73b4-431d-8b04-330c8c80f907&geocode="+city+"+"+street+"+"+house+"&format=json")
        data2 = await response2.json()
        // console.log("ful",data2)
        console.log('DATA: ', data2["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["Point"]["pos"])
        let coords = data2["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["Point"]["pos"]
        // setNotes(data2)
        coords = coords.split(" ")
        data[i]["location_lat"]=coords[1]
        data[i]["location_lon"]=coords[0]

        //  console.log(data[i]["location_lat"][coords[0]])
        // data1 += data2["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["Point"]["pos"]

    //  data1 = data1.split(" ")
    //  console.log('one coord',data1[0])
        
        
       }

       console.log(data)
       setNotes(data)



      // let response2 = await fetch('https://geocode-maps.yandex.ru/1.x/?apikey=49e7b902-73b4-431d-8b04-330c8c80f907&geocode=${data[0]}+data[1]+data[2]&format=json')
      // let data2 = await response2.json()
      // console.log('DATA: ', data2["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["Point"]["pos"])
      // let data1 = data2["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["Point"]["pos"]



      // setNotes(data2)

   }


  // //updating state
  // let [events,setNotes] = useState([])
  // useEffect(()=>{
  //     // calling get notes
  //     getNotes()
  // },[])

  // let getNotes = async() =>{
  //     // getting notes
  //    let response = await fetch('https://geocode-maps.yandex.ru/1.x/?apikey=49e7b902-73b4-431d-8b04-330c8c80f907&geocode=Петрозаводск+Черняховского+32&format=json')
  //    let data = await response.json()
  //    console.log('DATA: ', data["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["Point"]["pos"])
  //    let data1 = data["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["Point"]["pos"]

  //    data1 = data1.split(" ")
  //    console.log('one coord',data1[0])
     
  //    setNotes(data1)

  // }

    return(
      <div className='map-container'>
        <YMaps>
          
                <ConnectedTemplateProvider>
      {({ template }) => (
        
         
        <Map state={{ center: [61.780372, 34.357011], zoom:  9}} width={"100%"} height={"100%"}>
          {events.map((event,index)=>(
            <Placemark
              geometry={[event.location_lat, event.location_lon]}
              options={{ balloonContentLayout: template }}
              // Load balloon addon for all geo objects
              modules={['geoObject.addon.balloon']}
            />
         ))}
        </Map>
        )}

        </ConnectedTemplateProvider>
        
      </YMaps>
      </div>
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
          '<h3>Сюда нужно вставить значение переменной event, но я пока не знаю как :(</h3>'
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