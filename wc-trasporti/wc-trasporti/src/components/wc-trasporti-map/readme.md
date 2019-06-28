# my-component



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                                           | Type     | Default                   |
| ---------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------- |
| `center`         | `center`           |                                                                                                                       | `string` | `undefined`               |
| `mainMarkerIcon` | `main-marker-icon` | Icona marker per "posizione attuale"                                                                                  | `string` | `"./assets/mymarker.png"` |
| `poiMarkerIcon`  | `poi-marker-icon`  | Icona marker POI                                                                                                      | `string` | `"./assets/marker.png"`   |
| `points`         | `points`           | Oggeto JSON contenente i dettagli dei POI. ULTIMO ELEMENTO = Posizione attuale Array di punti da inserire nella mappa | `string` | `undefined`               |
| `userPoisition`  | `user-poisition`   |                                                                                                                       | `string` | `undefined`               |
| `zoomLevel`      | `zoom-level`       |                                                                                                                       | `number` | `undefined`               |


## Events

| Event          | Description | Type                |
| -------------- | ----------- | ------------------- |
| `mapInitiated` |             | `CustomEvent<void>` |
| `mapMoved`     |             | `CustomEvent<void>` |
| `poiSelected`  |             | `CustomEvent<void>` |


## Methods

### `showPoints() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
