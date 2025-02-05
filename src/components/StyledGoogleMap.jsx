import { useEffect, useRef } from "react";

const StyledGoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // We create this function to load the map once the component mounts
    const initializeMap = () => {
      // Example coordinates for Los Angeles
      const coordinates = { lat: 52.44515647072069, lng: -1.8895282000000004 };
      // Custom map styling to match your website's dark theme
      const mapStyle = [
        {
          elementType: "geometry",
          stylers: [{ color: "#212121" }],
        },
        {
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          elementType: "labels.text.fill",
          stylers: [{ color: "#757575" }],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [{ color: "#212121" }],
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [{ color: "#757575" }],
        },
        {
          featureType: "administrative.country",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9e9e9e" }],
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#bdbdbd" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#757575" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#181818" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#616161" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#1b1b1b" }],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [{ color: "#2c2c2c" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#8a8a8a" }],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{ color: "#373737" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#3c3c3c" }],
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry",
          stylers: [{ color: "#4e4e4e" }],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [{ color: "#616161" }],
        },
        {
          featureType: "transit",
          elementType: "labels.text.fill",
          stylers: [{ color: "#757575" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#000000" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#3d3d3d" }],
        },
      ];

      // Map configuration options
      const mapOptions = {
        center: coordinates,
        zoom: 15,
        styles: mapStyle,
        disableDefaultUI: true, // Removes default UI controls
        zoomControl: true, // But we'll add back just the zoom control
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_BOTTOM,
        },
      };

      // Create the map instance
      const map = new google.maps.Map(mapRef.current, mapOptions);

      // Add a marker for your location
      const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: "Shades Music School",
      });

      // Optional: Add an info window that opens when clicking the marker
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; color: black;">
            <h3 style="margin: 0 0 4px; font-weight: bold;">Shades Music School</h3>
            <p style="margin: 0;">123 Music Avenue<br>Los Angeles, CA 90001</p>
          </div>
        `,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    };

    // We check if the Google Maps script is already loaded
    if (!window.google) {
      // If not loaded, create and append the script
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    } else {
      // If already loaded, just initialize the map
      initializeMap();
    }
  }, []);

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
      {/* Map container */}
      <div ref={mapRef} className="w-full h-full" />

      {/* Optional overlay with contact information */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
        <h3 className="font-bold text-gray-900 mb-2">Visit Our Studio</h3>
        <p className="text-gray-700">
          214-218 Alcester Rd
          <br />
          Birmingham B13 8EY
        </p>
      </div>
    </div>
  );
};

export default StyledGoogleMap;
