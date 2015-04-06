# raba.openstreetmap.si
This webbsite (hosted at http://raba.openstreetmap.si) provides web interface for [Slovenia Landcover (RABA-KGZ) ](https://wiki.openstreetmap.org/wiki/Slovenia_Landcover_Import_-_RABA-KGZ) community import process.

Used libraries:
---
* [Leaflet](https://github.com/Leaflet/Leaflet) for showing the map
* [zlib.js](https://github.com/imaya/zlib.js) for unzipping zipped shapefiles
* [shapefile-js](https://github.com/calvinmetcalf/shapefile-js) for parsing shapefiles
* [leaflet.shapefile](https://github.com/calvinmetcalf/leaflet.shapefile) for integrating shapefiles into leaflet
* [catiline](https://github.com/calvinmetcalf/catiline) to do shapefile parsing in the background
* [Leaflet.MousePosition](https://github.com/ardhi/Leaflet.MousePosition) for showing geo-coordinates
* [leaflet-hash](https://github.com/mlevans/leaflet-hash) for preserving zoom and location in the URL
* [Bootstrap](https://github.com/twbs/bootstrap) for responsive site
* [Bootleaf](https://github.com/bmcbride/bootleaf) for responsive leaflet maps
* [jQuery](https://github.com/jquery/jquery) to help put everything together

Used APIs:
---
* [JOSM Remote Control](http://wiki.openstreetmap.org/wiki/JOSM/Plugins/RemoteControl) to streamline the import process
* [TagInfo project integration](https://wiki.openstreetmap.org/wiki/Taginfo/Projects) for import analysis

Used Tile layers:
---
* [OpenStreetMap mapnik layer](http://osm.org/) for comparing RABA with existing OSM data
* [RABA tiles](http://wms.openstreetmap.de/slippymap/RABA) - tiles from RABA dataset, kindly hosted on [Openstreetmap.de WMS-Server](http://wms.openstreetmap.de)
* [RABA3000 tiles](http://wms.openstreetmap.de/slippymap/RABA3000) - tiles from RABA dataset, kindly hosted on [Openstreetmap.de WMS-Server](http://wms.openstreetmap.de)
* [OpenSnowMap.org](http://opensnowmap.org/) relief overlay (SRTM based)
* [openstreetmap.fr tiles](http://openstreetmap.fr/) for high-level zooms rendering of OpenStreetMap data
* [watercolor tiles](http://maps.stamen.com/watercolor/) by Stamen Design for fun
