import { Handler } from 'leaflet';
import React from 'react';  
import { MapContainer, TileLayer, Marker, Popup, LayerGroup, LayersControl, Circle } from 'react-leaflet';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';

export default function Dashboard() {
      /*  <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7719.916648557242!2d-17.4378091!3d14.6583066!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2ssn!4v1655946206503!5m2!1sfr!2ssn" className='w-4/5 h-4/5' style={{'border' : 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>*/
  /*  const navigate = useNavigate();
    const handleClick = (e) =>{
      navigate(`/${e.target.name}`);
}*/
  const Hydra1 = [14.661490086763088, -17.431026135203783];
  const Hydra2 = [14.681210150000137, -17.42651484777907];
  const Hydra3 = [14.67745796723286, -17.458927195580873];
  return (
    <div className='w-full h-full flex flex-col '>
      <Header categorie='page' title='Dashboard'/>
      <MapContainer className='w-full h-full justify-center items-center'  center={Hydra1} zoom={14} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayersControl position="topright">
        <LayersControl.Overlay checked name="Marker with popup">
          <Marker position={Hydra1} name='Hydrophone1'>
            <Popup>
            <Link to='/hydrophone1'> Hydrophone1</Link>
            </Popup>
          </Marker>
          <Marker position={Hydra2} name='Hydrophone2'>
            <Popup>
              <Link to='/hydrophone2'> Hydrophone2</Link>
            </Popup>
          </Marker>
          <Marker position={Hydra3} name='Hydrophone3'>
            <Popup>
              <Link to='/hydrophone3'> Hydrophone3</Link>
            </Popup>
          </Marker>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="Layer group with circles">
          <LayerGroup>
            <Circle
              center={Hydra1}
              pathOptions={{ fillColor: 'blue' }}
              radius={200}
            />
            <Circle
              center={Hydra2}
              pathOptions={{ fillColor: 'blue' }}
              radius={200}
            />
           <Circle
              center={Hydra3}
              pathOptions={{ fillColor: 'blue' }}
              radius={200}
            />
          </LayerGroup>
        </LayersControl.Overlay>
    </LayersControl>
    </MapContainer>
    </div>
  )
}
