import Vue from 'vue'

// 高德地图
// 高德离线地图
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
//初始化
VueAMap.initAMapApiLoader({
    // 高德key
    key: '95d695a40e84e8ea6d7fecb6b18cb958',
    // 插件集合
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4',
    uiVersion: '1.0.11'//高德 UI 组件库
});