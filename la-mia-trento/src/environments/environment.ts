// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverURL: "https://tn.smartcommunitylab.it/core.mobility",
  mobilityDataURL: "https://raw.githubusercontent.com/smartcommunitylab/modular-app/2023-new-version/data",
  dbURL: "https://apps.comune.trento.it/comuneintascadb",
  dbName: "comune-in-tasca",
  trentorientaBaseDataAPI: "https://apps.comune.trento.it/trentorienta/api/",
  funeraliAPI: "funerali/",
  eventiAPI: "events",
  streetcleaningBaseDataAPI: "https://apps.comune.trento.it/streetcleaning/rest/street",
  carouselUrl: 'https://apps.comune.trento.it/comuneintasca/highlights/TrentoInTasca',
  appId: "trento",
  accessibility: true,
  agencies: [5, 6, 10, 12, 17],
  extraurban_agencies: [17],
  center_map: [
    46.069672,
    11.121270
  ],
  zoom_map: 15,
  db_version: 25,
  visualization: {
    primaryLinks: [


      {
        state: "urbano",
        label: "menu_real_time_bus_urban",
        icon: "bus",
        color: "#eb8919"
      },
      {
        state: "trains",
        label: "menu_real_time_train",
        icon: "train",
        color: "#cd251c"
      }

    ],
    infomenu: [

      {
        state: "/app/ttlist/urbano",
        label: "menu_real_time_bus_urban",
        icon: "ic_urban-bus"
      },

      {
        state: "/app/ttlist/trains",
        label: "menu_real_time_train",
        icon: "ic_train"
      },
      {
        state: "/app/bikesharing/trento",
        label: "menu_real_time_bike",
        icon: "ic_bike"
      },
      {
        state: "/app/parking/COMUNE_DI_TRENTO",
        label: "menu_real_time_park",
        icon: "ic_parking-lot"
      }
    ]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
