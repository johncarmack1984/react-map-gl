(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{IOtm:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c})),a.d(t,"renderToDom",(function(){return s}));var n=a("q1tI"),r=a("i8i4"),m=a("bzer");function l(e){return n.createElement("div",{className:"control-panel"},n.createElement("h3",null,"3D Terrain"),n.createElement("p",null,"Add 3D terrain and sky to a map."),n.createElement("div",{className:"source-link"},n.createElement("a",{href:"https://github.com/visgl/react-map-gl/tree/7.0-release/examples/terrain",target:"_new"},"View Code ↗")))}var i=n.memo(l),o={id:"sky",type:"sky",paint:{"sky-type":"atmosphere","sky-atmosphere-sun":[0,0],"sky-atmosphere-sun-intensity":15}};function c(){return n.createElement(n.Fragment,null,n.createElement(m.default,{initialViewState:{latitude:32.6141,longitude:-114.34411,zoom:14,bearing:80,pitch:80},maxPitch:85,mapStyle:"mapbox://styles/mapbox/satellite-v9",mapboxAccessToken:"",terrain:{source:"mapbox-dem",exaggeration:1.5}},n.createElement(m.Source,{id:"mapbox-dem",type:"raster-dem",url:"mapbox://mapbox.mapbox-terrain-dem-v1",tileSize:512,maxzoom:14}),n.createElement(m.Layer,o)),n.createElement(i,null))}function s(e){Object(r.render)(n.createElement(c,null),e)}}}]);