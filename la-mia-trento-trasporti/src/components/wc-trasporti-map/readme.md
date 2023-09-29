# my-component



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                            | Type     | Default                   |
| ---------------- | ------------------ | -------------------------------------- | -------- | ------------------------- |
| `center`         | `center`           |                                        | `string` | `undefined`               |
| `mainMarkerIcon` | `main-marker-icon` | Icona marker per "posizione attuale"   | `string` | `"./assets/mymarker.png"` |
| `poiMarkerIcon`  | `poi-marker-icon`  | Icona marker POI                       | `string` | `"./assets/marker.png"`   |
| `points`         | `points`           | Array di punti da inserire nella mappa | `string` | `undefined`               |
| `userpoisition`  | `userpoisition`    |                                        | `string` | `undefined`               |
| `zoomlevel`      | `zoomlevel`        |                                        | `number` | `undefined`               |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `mapInitiated` |             | `CustomEvent<any>` |
| `mapMoved`     |             | `CustomEvent<any>` |
| `poiSelected`  |             | `CustomEvent<any>` |


## Methods

### `showPoints() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
