import React, { useEffect } from 'react'
import * as ms from '../mapSource'
import * as tt from "three-tile";
import { Vector3 } from "three";
// import { log } from 'three/src/nodes/TSL.js';
import "./Style.css";

const MAPBOXKEY = ms.mapBoxKey

const mapBoxImgSource = new tt.plugin.MapBoxSource({
	token: MAPBOXKEY,
	dataType: "image",
	style: "mapbox.satellite",
});
console.log(mapBoxImgSource);

export const mapBoxDemSource = new tt.plugin.MapBoxSource({
	token: MAPBOXKEY,
	dataType: "terrain-rgb",
	style: "mapbox.terrain-rgb",
	maxLevel: 15,
});
console.log(mapBoxDemSource);
function createMap() {
	// 创建地图对象
	const map = new tt.TileMap({
		// 影像数据源
		imgSource: mapBoxImgSource,
		// 高程数据源
		demSource: mapBoxDemSource,
		// 地图投影中央经线经度
		lon0: 90,
		// 最小缩放级别
		minLevel: 2,
		// 最大缩放级别
		maxLevel: 20,
	});

	// 地图旋转到xz平面
	map.rotateX(-Math.PI / 2);
	return map;
}

function initViewer(id: string, map: tt.TileMap) {
	// 地图中心坐标(经度，纬度，高度)
	const centerGeo = new Vector3(110, 30, 0);
	// 摄像坐标(经度，纬度，高度)
	const camersGeo = new Vector3(110, 0, 10000);
	// 地图中心转为世界坐标
	const centerPostion = map.localToWorld(map.geo2pos(centerGeo));
	// 摄像机转为世界坐标
	const cameraPosition = map.localToWorld(map.geo2pos(camersGeo));
	// 初始化场景
	const viewer = new tt.plugin.GLViewer(id, { centerPostion, cameraPosition });
	// 地图添加到场景
	viewer.scene.add(map);

	return viewer;
}


function Map() {
    useEffect(()=>{
        const map = createMap();
initViewer("#map", map);
document.querySelector("#mapbox")!.addEventListener("click", () => {
	map.imgSource = mapBoxImgSource;
	map.reload();
});
document.querySelector("#bing")!.addEventListener("click", () => {
	map.imgSource = new tt.plugin.BingSource();
	map.reload();
});
document.querySelector("#gd")!.addEventListener("click", () => {
	map.imgSource = [new tt.plugin.GDSource({ style: "6" }), new tt.plugin.GDSource({ style: "8" })];
	map.reload();
});
document.querySelector("#tx")!.addEventListener("click", () => {
	map.imgSource = [new tt.plugin.TXSource(), new tt.plugin.GDSource({ style: "8" })];
	map.reload();
});
    },[])
    
  return (
    <> 
    <div style={{height:'95vh',width:'90%'}} id='map'></div>
    <div id="tools">
                <button id="mapbox">MapBox影像</button>
                <button id="bing">Bing影像</button>
                <button id="gd">高德影像标注</button>
                <button id="tx">腾讯影像+高德标注</button>
            </div>
    </>
   
  )
}

export default Map