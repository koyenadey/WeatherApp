const locations = [
    { lat: 37.7749, lng: -122.4194, name: "San Francisco" },
    { lat: 40.7128, lng: -74.006, name: "New York" },
    { lat: 19.4326, lng: -99.1332, name: "Mexico" },
    { lat: 43.6510, lng: -79.3470, name: "Toronto" },
    { lat: 34.0522, lng: -118.2437, name: "Los Angeles" },
    { lat: 49.2827, lng: -123.1207, name: "Vancouver" },
    { lat: 41.8781, lng: -87.6298, name: "Chicago" },
    { lat: 45.5017, lng: -73.5673, name: "Montreal" },
    { lat: 25.7617, lng: -80.1918, name: "Miami" },
    { lat: 34.6037, lng: -58.3816, name: "Buenos Aires" },
    { lat: 22.9068, lng: -43.1729, name: "Rio de Janeiro" },
    { lat: 12.0464, lng: -77.0428, name: "Lima" },
    { lat: 4.7109, lng: -74.0721, name: "Bogotá" },
    { lat: 33.4489, lng: -70.6693, name: "Santiago" }, 
    { lat: 15.7942, lng: -47.8825, name: "Brasilia" }, 
    { lat: 51.5074, lng: -0.1278, name: "London" },
    { lat: 26.8206, lng: 30.8025, name: "Egypt" },
    { lat: 15.5007, lng: 32.5599, name: "Sudan" },
    { lat: 48.3794, lng:31.1656, name: "Ukraine"},
    { lat: 59.3293, lng:18.0686, name: "Stockholm"},
    { lat: 31.2304, lng:121.4737, name: "Shanghai"},
    { lat: 39.9042, lng:116.4074, name: "Beijing"},
    { lat: 22.3193, lng:114.1694, name: "Hong Kong"},
    { lat: 35.6895, lng:139.6917, name: "Tokyo"},
    { lat: 34.3853, lng:132.4553, name: "Hiroshima"},
    { lat: 14.5995, lng:120.9842, name: "Manilla"},
    { lat: 6.9271, lng:79.8612, name: "Colombo"},
    { lat: 19.7633, lng:96.0785, name: "Naypyidaw"},
    { lat: 13.7563, lng:100.5018, name: "Bangkok"},
    { lat: 21.0285, lng:105.8542, name: "Hanoi"},
    { lat: 28.6139, lng:77.2090, name: "Delhi"},
    { lat: 3.1390, lng:101.6869, name: "Kuala Lumpur"},
    { lat: -6.2088, lng:106.8456, name: "Jakarta"},
    { lat: -33.8688, lng:151.2093, name: "Sydney"},
    { lat: -37.8136, lng:144.9631, name: "Melbourne"},
    { lat: -27.4698, lng:153.0251, name: "Brisbane"},
    { lat: -31.9505, lng:115.8605, name: "Perth"},
    { lat: -34.9285, lng:138.6007, name: "Adelaide"},
    { lat: 59.9343, lng:30.3351, name: "Saint Petersburg"},
    { lat: -26.2041, lng:28.0473, name: "Johannesburg"},
    { lat: -33.9249, lng:18.4241, name: "Cape Town"},
    { lat: -29.8587, lng:18.4241, name: "Durban"},
    { lat: -25.7461, lng:28.1881, name: "Pretoria"},
    { lat: -33.9608, lng:25.6022, name: "Port Elizabeth"},
  ];

  export function GetLocations()
  {
    return locations;
  }

  export function SetLocationList(location)
  {
    locations.push(location);
  }