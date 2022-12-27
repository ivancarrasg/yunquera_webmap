ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([319443.181031, 4063095.394929, 328438.817917, 4069153.680994]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Shannon_yunquera_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Shannon_yunquera",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Shannon_yunquera_1.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320922.237000, 4063575.854500, 327012.237000, 4069345.854500]
                            })
                        });
var lyr_Distancia_canales_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Distancia_canales",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Distancia_canales_2.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320920.000000, 4063570.000000, 327020.000000, 4069350.000000]
                            })
                        });
var lyr_Exposicion_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Exposicion",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Exposicion_3.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320920.000000, 4063570.000000, 327020.000000, 4069350.000000]
                            })
                        });
var lyr_RasterVirtual_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "RasterVirtual",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RasterVirtual_4.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320920.000000, 4063570.000000, 327020.000000, 4069350.000000]
                            })
                        });
var lyr_Segmentacion_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Segmentacion",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Segmentacion_5.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320920.000000, 4063570.000000, 327020.000000, 4069350.000000]
                            })
                        });
var lyr_dens_reclass_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "dens_reclass",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dens_reclass_6.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320920.000000, 4063570.000000, 327020.000000, 4069350.000000]
                            })
                        });
var format_limite_yunquera_7 = new ol.format.GeoJSON();
var features_limite_yunquera_7 = format_limite_yunquera_7.readFeatures(json_limite_yunquera_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_limite_yunquera_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_yunquera_7.addFeatures(features_limite_yunquera_7);
var lyr_limite_yunquera_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limite_yunquera_7, 
                style: style_limite_yunquera_7,
                interactive: true,
                title: '<img src="styles/legend/limite_yunquera_7.png" /> limite_yunquera'
            });
var format_Segmentacion_8 = new ol.format.GeoJSON();
var features_Segmentacion_8 = format_Segmentacion_8.readFeatures(json_Segmentacion_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Segmentacion_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Segmentacion_8.addFeatures(features_Segmentacion_8);
var lyr_Segmentacion_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Segmentacion_8, 
                style: style_Segmentacion_8,
                interactive: true,
                title: '<img src="styles/legend/Segmentacion_8.png" /> Segmentacion'
            });
var format_ocurrencias_gbif_ETRS89_30N_9 = new ol.format.GeoJSON();
var features_ocurrencias_gbif_ETRS89_30N_9 = format_ocurrencias_gbif_ETRS89_30N_9.readFeatures(json_ocurrencias_gbif_ETRS89_30N_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ocurrencias_gbif_ETRS89_30N_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ocurrencias_gbif_ETRS89_30N_9.addFeatures(features_ocurrencias_gbif_ETRS89_30N_9);cluster_ocurrencias_gbif_ETRS89_30N_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ocurrencias_gbif_ETRS89_30N_9
});
var lyr_ocurrencias_gbif_ETRS89_30N_9 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ocurrencias_gbif_ETRS89_30N_9, 
                style: style_ocurrencias_gbif_ETRS89_30N_9,
                interactive: true,
                title: '<img src="styles/legend/ocurrencias_gbif_ETRS89_30N_9.png" /> ocurrencias_gbif_ETRS89_30N'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Shannon_yunquera_1.setVisible(true);lyr_Distancia_canales_2.setVisible(true);lyr_Exposicion_3.setVisible(true);lyr_RasterVirtual_4.setVisible(true);lyr_Segmentacion_5.setVisible(true);lyr_dens_reclass_6.setVisible(true);lyr_limite_yunquera_7.setVisible(true);lyr_Segmentacion_8.setVisible(true);lyr_ocurrencias_gbif_ETRS89_30N_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Shannon_yunquera_1,lyr_Distancia_canales_2,lyr_Exposicion_3,lyr_RasterVirtual_4,lyr_Segmentacion_5,lyr_dens_reclass_6,lyr_limite_yunquera_7,lyr_Segmentacion_8,lyr_ocurrencias_gbif_ETRS89_30N_9];
lyr_limite_yunquera_7.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CODIGO_JA': 'CODIGO_JA', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Segmentacion_8.set('fieldAliases', {'value': 'value', });
lyr_ocurrencias_gbif_ETRS89_30N_9.set('fieldAliases', {'species': 'species', 'scientific': 'scientific', 'decimalLat': 'decimalLat', 'decimalLon': 'decimalLon', });
lyr_limite_yunquera_7.set('fieldImages', {'NOMBRE': 'TextEdit', 'CODIGO_JA': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Segmentacion_8.set('fieldImages', {'value': 'Range', });
lyr_ocurrencias_gbif_ETRS89_30N_9.set('fieldImages', {'species': '', 'scientific': '', 'decimalLat': '', 'decimalLon': '', });
lyr_limite_yunquera_7.set('fieldLabels', {'NOMBRE': 'no label', 'CODIGO_JA': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Segmentacion_8.set('fieldLabels', {'value': 'no label', });
lyr_ocurrencias_gbif_ETRS89_30N_9.set('fieldLabels', {'species': 'header label', 'scientific': 'no label', 'decimalLat': 'no label', 'decimalLon': 'no label', });
lyr_ocurrencias_gbif_ETRS89_30N_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});