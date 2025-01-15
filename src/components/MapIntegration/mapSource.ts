
import * as tt from "three-tile";
export const mapBoxKey = 'pk.eyJ1IjoibXlreXRhcyIsImEiOiJjbTA1MGhtb3YwY3Y0Mm5uY3FzYWExdm93In0.cSDrE0Lq4_PitPdGnEV_6w'

export const mapBoxImgSource = new tt.plugin.MapBoxSource({
    token: mapBoxKey, // The API key to access Mapbox services.
    dataType: "image", // Specifies that the data is an image (satellite imagery).
    style: "mapbox.satellite", // Defines the style of the map (satellite view).
});
console.log(mapBoxImgSource);
// 3d model of the earth
export const mapBoxDemSource = new tt.plugin.MapBoxSource({
    token: mapBoxKey,       // The API key to access Mapbox services.
    dataType: "terrain-rgb", // Specifies that the data is for elevation (terrain).
    style: "mapbox.terrain-rgb", // Defines the style (terrain in RGB format).
    maxLevel: 15,           // Limits the maximum zoom level to 15.
});