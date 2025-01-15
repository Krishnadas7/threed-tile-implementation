import * as tt from "three-tile";
import * as ms from "./mapSource";
import {
	Color,
	CubeTextureLoader,
	Matrix4,
	Mesh,
	MeshBasicMaterial,
	PlaneGeometry,
	SRGBColorSpace,
	TextureLoader,
	Vector2,
	Vector3,
} from "three";


export const createMap = (imgSource: tt.ISource | tt.ISource[] = ms.mapBoxImgSource, demSource?: tt.ISource) => {
	// 创建地图对象
	const map = new tt.TileMap({
		// 影像数据源
		imgSource: imgSource,
		// 高程数据源
		demSource: demSource,
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
};

export const createViewer = (
	id: string,
	map: tt.TileMap,
	centerGeo = new Vector3(110, 30, 0),
	camersGeo = new Vector3(110, 0, 10000),
) => {
	// 地图中心转为世界坐标
	const centerPostion = map.localToWorld(map.geo2pos(centerGeo));
	// 摄像机转为世界坐标
	const cameraPosition = map.localToWorld(map.geo2pos(camersGeo));
	// 初始化场景
	const viewer = new tt.plugin.GLViewer(id, { centerPostion, cameraPosition });
	// 地图添加到场景
	viewer.scene.add(map);
	return viewer;
};
