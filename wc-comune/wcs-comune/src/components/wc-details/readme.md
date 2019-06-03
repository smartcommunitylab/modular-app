# wc-path-info



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                         | Type     | Default     |
| -------------- | --------------- | ------------------------------------------------------------------- | -------- | ----------- |
| `contacts`     | `contacts`      | Oggetto JSON per contatti e info aggiuntive                         | `string` | `undefined` |
| `headingColor` | `heading-color` | Colore titoli                                                       | `string` | `"red"`     |
| `img`          | `img`           | Immagine del percorso                                               | `string` | `undefined` |
| `info`         | `info`          | Informazioni a fine pagina                                          | `string` | `undefined` |
| `subtitle`     | `subtitle`      | Sottotitolo del percorso                                            | `string` | `undefined` |
| `text`         | `text`          | Descrizione e testo                                                 | `string` | `undefined` |
| `title`        | `title`         | Oggeto JSON contenente i dettagli dei contatti. Titolo del percorso | `string` | `undefined` |

## Oggetto JSON "contacts" di tipo "DetailsInfo"
```javascript
    { 
        address: <string>, --> Indirizzo
        distance: <string>, --> Distanza da posizione attuale
        email?: <string>, --> Indirizzo Email
        phone?: <string>, --> Numero di telefono
        url?: <string> --> Link Homepage POI
        date?: <string>, --> Date evento
        time?: <string>, --> Orari Evento
        price?: <string>, --> Prezzi evento
        cat?: Array<string>, --> Categoria Evento
    }
```
#### Vedi `utils/utils.ts/DetailsInfo`
---

## Events

| Event          | Description | Type                |
| -------------- | ----------- | ------------------- |
| `contactClick` |             | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
