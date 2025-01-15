var provider = new OpenStreetMapsProvider();

// Create the map view and add it to your THREE scene
var map = new MapView(MapView.PLANAR, provider);
scene.add(map);

// By default coordinates are to meter, can be resized to kilometer
map.scale.set(0.001, 0.001, 0.001);