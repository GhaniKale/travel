import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix for default marker icons in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// location structure: { lat: -8.409518, lng: 115.188919, name: "Bali" }
export default function InteractiveMap({ location, zoom = 10, height = "100%" }) {
    
    // Default location if none provided (e.g. Jakarta)
    const position = location ? [location.lat, location.lng] : [-6.2088, 106.8456];
    const markerName = location ? location.name : "Location";

    return (
        <div style={{ height: height, width: "100%", borderRadius: "inherit", overflow: "hidden" }}>
             <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <span className="font-headline font-bold">{markerName}</span>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
