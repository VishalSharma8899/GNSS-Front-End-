import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom icon (You can also skip using the icon if you only want text)
const redArrowIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/482/482553.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const MyMap = ({ coordinatesWithWords }) => {
  return (
    <MapContainer center={coordinatesWithWords[0].coords} zoom={66} style={{ height: '500px', width: '100%' }}>
      {/* OpenStreetMap Tile Layer for non-satellite view */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Loop through coordinates and words */}
      {coordinatesWithWords.map((item, index) => (
        <Marker key={index} position={item.coords} icon={redArrowIcon}>
          {/* Tooltip to display words */}
          <Tooltip direction="top" offset={[0, -20]} permanent>
            {item.word}
          </Tooltip>
        </Marker>
      ))}

      {/* Polyline to connect points */}
      <Polyline positions={coordinatesWithWords.map((item) => item.coords)} />
    </MapContainer>
  );
};

export default MyMap;
