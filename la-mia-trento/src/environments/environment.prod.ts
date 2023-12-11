export const environment = {
  production: true,
  serverURL: "https://tn.smartcommunitylab.it/core.mobility",
  mobilityDataURL: "https://raw.githubusercontent.com/smartcommunitylab/modular-app/2023-new-version/data",
  dbURL:"https://cit.platform.smartcommunitylab.it/comuneintasca2",
  dbName:"comune-in-tasca",
  trentorientaBaseDataAPI:"https://tn.smartcommunitylab.it/trentorienta/api/",
  funeraliAPI:"funerali/",
  eventiAPI:"events",
  streetcleaningBaseDataAPI:"https://tn.smartcommunitylab.it/streetcleaning/rest/street",
  carouselUrl : 'https://cit.platform.smartcommunitylab.it/comuneintasca-multi/highlights/TrentoInTasca',
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
