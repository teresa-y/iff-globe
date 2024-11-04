// Import Globe.gl library
import Globe from 'globe.gl';

// Initialize Globe.gl instance
const globe = Globe({
  // Target the div element with id 'globe-container'
  target: '#globe-container',
  // Add more configuration options as needed
});

// Add location markers to the globe
const markers = [
  { lat: 40.7128, lng: -74.0060, label: 'New York City' },
  { lat: 34.0522, lng: -118.2437, label: 'Los Angeles' },
  { lat: 51.5074, lng: -0.1278, label: 'London' },
  // Add more markers as needed
];

markers.forEach(marker => {
  globe.markLatLon(marker.lat, marker.lng, {
    // Customize marker appearance
    label: marker.label,
    color: 'red', // Marker color
    size: 0.1, // Marker size
  });
});
