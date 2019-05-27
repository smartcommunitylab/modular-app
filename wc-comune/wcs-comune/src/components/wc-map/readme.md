# wc-map



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                                           | Type     | Default             |
| ---------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------- | -------- | ------------------- |
| `mainMarkerIcon` | `main-marker-icon` | Icona marker per "posizione attuale"                                                                                  | `string` | `"marker-icon.png"` |
| `poiMarkerIcon`  | `poi-marker-icon`  | Icona marker POI                                                                                                      | `string` | `"marker-icon.png"` |
| `points`         | `points`           | Oggeto JSON contenente i dettagli dei POI. ULTIMO ELEMENTO = Posizione attuale Array di punti da inserire nella mappa | `string` | `undefined`         |

## Oggetto JSON "points --> Ultimo elemento = Posizione attuale"
```javascript
    [
        {
          lat: <number>, --> Latitidune
          lon: <number>, --> Longitudine
          name: <string>, --> Nome POI
          distance: <string>, --> Distanza da posizione attuale
          address: <string>,
          id: <string> --> Indirizzo
        }
          
      ]
```
---------------------------------------------

## Events

| Event         | Description | Type                |
| ------------- | ----------- | ------------------- |
| `poiSelected` |             | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
