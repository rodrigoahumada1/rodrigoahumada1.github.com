var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_PruebaGDBPoligonos_CUS_Opcion_1_1 = new ol.format.GeoJSON();
var features_PruebaGDBPoligonos_CUS_Opcion_1_1 = format_PruebaGDBPoligonos_CUS_Opcion_1_1.readFeatures(json_PruebaGDBPoligonos_CUS_Opcion_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PruebaGDBPoligonos_CUS_Opcion_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PruebaGDBPoligonos_CUS_Opcion_1_1.addFeatures(features_PruebaGDBPoligonos_CUS_Opcion_1_1);
var lyr_PruebaGDBPoligonos_CUS_Opcion_1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PruebaGDBPoligonos_CUS_Opcion_1_1, 
                style: style_PruebaGDBPoligonos_CUS_Opcion_1_1,
                interactive: true,
    title: 'PruebaGDB Poligonos_CUS_Opcion_1<br />\
    <img src="styles/legend/PruebaGDBPoligonos_CUS_Opcion_1_1_0.png" /> Bombas de Impulsión<br />\
    <img src="styles/legend/PruebaGDBPoligonos_CUS_Opcion_1_1_1.png" /> Casino y Baños<br />\
    <img src="styles/legend/PruebaGDBPoligonos_CUS_Opcion_1_1_2.png" /> Domo<br />\
    <img src="styles/legend/PruebaGDBPoligonos_CUS_Opcion_1_1_3.png" /> Edificio de extracción por solventes<br />\
    <img src="styles/legend/PruebaGDBPoligonos_CUS_Opcion_1_1_4.png" /> Instalación de Faena<br />\
    <img src="styles/legend/PruebaGDBPoligonos_CUS_Opcion_1_1_5.png" /> Oficinas y Baños<br />\
    <img src="styles/legend/PruebaGDBPoligonos_CUS_Opcion_1_1_6.png" /> Osmosis<br />\
    <img src="styles/legend/PruebaGDBPoligonos_CUS_Opcion_1_1_7.png" /> Sala Eléctrica 8300-ER-002<br />\
    <img src="styles/legend/PruebaGDBPoligonos_CUS_Opcion_1_1_8.png" /> Sala Eléctrica 8300-ER-003<br />\
    <img src="styles/legend/PruebaGDBPoligonos_CUS_Opcion_1_1_9.png" /> Subestación Unitaria 8300-US-001<br />\
    <img src="styles/legend/PruebaGDBPoligonos_CUS_Opcion_1_1_10.png" /> <br />'
        });
var format_PruebaGDBAntucoya_rea_EIA_2 = new ol.format.GeoJSON();
var features_PruebaGDBAntucoya_rea_EIA_2 = format_PruebaGDBAntucoya_rea_EIA_2.readFeatures(json_PruebaGDBAntucoya_rea_EIA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PruebaGDBAntucoya_rea_EIA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PruebaGDBAntucoya_rea_EIA_2.addFeatures(features_PruebaGDBAntucoya_rea_EIA_2);
var lyr_PruebaGDBAntucoya_rea_EIA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PruebaGDBAntucoya_rea_EIA_2, 
                style: style_PruebaGDBAntucoya_rea_EIA_2,
                interactive: true,
                title: '<img src="styles/legend/PruebaGDBAntucoya_rea_EIA_2.png" /> PruebaGDB Antucoya_Área_EIA'
            });
var group_PruebaGDB = new ol.layer.Group({
                                layers: [lyr_WazeWorld_0,lyr_PruebaGDBPoligonos_CUS_Opcion_1_1,lyr_PruebaGDBAntucoya_rea_EIA_2,],
                                title: "PruebaGDB"});

lyr_WazeWorld_0.setVisible(true);lyr_PruebaGDBPoligonos_CUS_Opcion_1_1.setVisible(true);lyr_PruebaGDBAntucoya_rea_EIA_2.setVisible(true);
var layersList = [group_PruebaGDB];
lyr_PruebaGDBPoligonos_CUS_Opcion_1_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Nombre': 'Nombre', 'Ha': 'Ha', 'm': 'm', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PruebaGDBAntucoya_rea_EIA_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LAYER': 'LAYER', 'KML_FOLDER': 'KML_FOLDER', 'Area_ha': 'Area_ha', 'Area_has': 'Area_has', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PruebaGDBPoligonos_CUS_Opcion_1_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'Nombre': 'TextEdit', 'Ha': 'TextEdit', 'm': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PruebaGDBAntucoya_rea_EIA_2.set('fieldImages', {'OBJECTID': '', 'LAYER': '', 'KML_FOLDER': '', 'Area_ha': '', 'Area_has': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_PruebaGDBPoligonos_CUS_Opcion_1_1.set('fieldLabels', {});
lyr_PruebaGDBAntucoya_rea_EIA_2.set('fieldLabels', {});
lyr_PruebaGDBAntucoya_rea_EIA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});