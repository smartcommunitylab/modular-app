<a name="readme-top"></a>
<br />

<div align="center">
  <a href="https://github.dev/smartcommunitylab/modular-app/tree/2023-new-version">
    <img src="la-mia-trento/resources/icon.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Modular App</h3>

<p align="center">
    This modular app aims to bring together different applications developed for the municipality of Trento within a single app. Each module can be developed independently and easily integrated within the container. In the following README you can find details on how the container and the separate modules' are integrated. Choosing the branch 'new-modules-example' you will find example of creating a new module and the authentication part.
    <br />
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#implementation">Implementation</a>
    <ul>
        <li><a href="#structure">Structure of the project</a></li>
      </ul>
    </li>
        <li><a href="#How application works">How application works</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project was born from the need of the municipality of Trento to collect all citizens' services in a single application accessible by the user

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Angular][Angular.io]][Angular-url]
* [![Ionic][Ionic.com]][Ionic-url]
* [![Stencil][Stencil.com]][Stencil-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Once the project has been downloaded, several folders will be present within the main folder:
la-mia-trento: the main application that acts as a container for the individual modules
others: each of them represents an independent module that can be integrated with the main application. (my-trento-info, my-trento-transport, etc.)
It is possible to work on the individual modules separately by entering the specific folder.

### Prerequisites

To develop and edit using the same tools used for development you will need
Angular CLI: 16.2.2
Node: 16.14.0
Package Manager: npm 8.3.1
OS: darwin x64

Angular: 16.2.5
... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router

Package                         Version
---------------------------------------

@angular-devkit/architect       0.1602.2
@angular-devkit/build-angular   16.2.2
@angular-devkit/core            16.2.2
@angular-devkit/schematics      16.2.2
@angular/cdk                    16.2.4
@angular/cli                    16.2.2
@schematics/angular             16.2.2
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.3

For install the package you can use a tool like npm using the following syntax

```sh
npm install npm@8.3.1 -g
```

Instruction for setup Angular are provided [here](https://angular.io/guide/setup-local)

Others tools and framework used are the following

* ionic >=7.1.1

  ```sh
  npm install ionic@latest -g
  ```

  Instruction for setup ionic are provided [here](https://ionicframework.com/docs/intro/cli)
* stencil

  ```sh
  npm install stencil@latest -g
  ```

  Instruction for setup stencil are provided [here](https://stenciljs.com/docs/getting-started)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.dev/smartcommunitylab/modular-app/tree/2023-new-version
   ```
2. Enter in the application folder
   ```sh
    cd la-mia-trento
   ```
3. Install NPM packages
   ```sh
   npm i
   ```
4. Run the application
   ```sh
   npm run start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- IMPLEMENTING YOUR OWN MODULE -->

## Implementation

Below we describe the current implementation of the modular app. The branch'new-modules-example' shows how implements a new module and how to integrate authentication.

### Structure

The structure of the application, as described above, is composed of a container (folder: la-mia-trento) which provides some basic tools for the separate modules and a series of modules integrated with it.


Inside the la-mia-trento/src folder, there are the following sub-folders:

*app*

* **credits**: page and information for the app credits
* **directive**: Angular directives used in the app
* **module-x**: each module x represents the separate container for the individual module. Each module will include pages to manage the web components created
* **pages**: the pages of the application container (home, settings, ...)
* **services**: common functions and services
* **shared**: Shared pages and components in the app

*assets*

* **configuration**: the main configuration for the container in the shape of different JSON files: the carousel, the modules entries, the citizen and tourist profile
  * module-entries.json: the configuration file for accessing the modules, contains the names in the various languages, the routing for the app, the icon to show and if there are parameters to pass to the module
  * default-profiles-module.json:the configuration file that groups the modules by tourist and citizen type. The modules are the same as the modules-entries.json content
* **common**: todo
* **credits**: todo
* **fonts**: todo
* **x**: x is the asset folder for the singolar module. Inside you can find translation files, icons e single configuration files.
  Some important files are present

## How the application works
The basic idea is that the container application store a set of shared information that every module can access (for example the language).
After the installation of the application, for example, the application ask to the user the profile and store on localStorage the choices.
Every module in the application is lazy loaded and keep a set of local assets, pages and service. After that the button is clicked, the router check the routing using the module-entries.json and loading the module with the subcomponent. Inside the different pages of the modules, a set of web components created using stencil are loaded using the local data. For example wc-anteprima is a web component loaded inside notizie.page.html that show news coming from Comune di Trento. Based on the configuration of the web component, it shows different options like image, link and so on.

In the main project folders there are the modules project folders:

* la-mia-trento-comune: the module responsible for loading info of events, restaurants, museum, tourist path and mode
* la-mia-trento-funerale: the module that show the last funerals in town
* la-mia-trento-info: this module show last news with eventually links for videos
* la-mia-trento-trasporti: this module show the city council public transportation timetable

Let's enter in la-mia-trento-info, for example. Inside you can find the stencil project. The src folder contains *components* amd *utils* and opening you can find the details of the webcomponent used directly into the ionic application.
The separate modules are composed of web components created using Stencil and contain:

* **src/components**: the folder with the web components sources
* **src/assets**: xxx
* **src/utils**: folder with various utility functions


<!-- LICENSE -->

## License

distributed under Apache [2.0](https://www.apache.org/licenses/LICENSE-2.0) license.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)
Comune di Trento app's page: [https://www.comune.trento.it/Aree-tematiche/Smart-city/App-e-Servizi-in-Comune/Tutte-le-APP-disponibili/APP-La-mia-Trento](https://www.comune.trento.it/Aree-tematiche/Smart-city/App-e-Servizi-in-Comune/Tutte-le-APP-disponibili/APP-La-mia-Trento)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

* [FBK](https://www.fbk.eu/)
* [Comune di Trento](https://www.comune.trento.it/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Ionic.com]: https://img.shields.io/badge/ionic-0769AD?style=for-the-badge&logo=ionic&logoColor=white
[Ionic-url]: https://ionic.com
[Stencil.com]: https://img.shields.io/badge/stencil-0769AD?style=for-the-badge&logo=stencil&logoColor=white
[stencil-url]: https://stencil.com
