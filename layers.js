var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_BatasAdministrasiKotaKediri_1 = new ol.format.GeoJSON();
var features_BatasAdministrasiKotaKediri_1 = format_BatasAdministrasiKotaKediri_1.readFeatures(json_BatasAdministrasiKotaKediri_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKotaKediri_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKotaKediri_1.addFeatures(features_BatasAdministrasiKotaKediri_1);
var lyr_BatasAdministrasiKotaKediri_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKotaKediri_1, 
                style: style_BatasAdministrasiKotaKediri_1,
                popuplayertitle: 'Batas Administrasi Kota Kediri',
                interactive: false,
                title: '<img src="styles/legend/BatasAdministrasiKotaKediri_1.png" /> Batas Administrasi Kota Kediri'
            });
var format_CakupanServiceArea800m_2 = new ol.format.GeoJSON();
var features_CakupanServiceArea800m_2 = format_CakupanServiceArea800m_2.readFeatures(json_CakupanServiceArea800m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CakupanServiceArea800m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CakupanServiceArea800m_2.addFeatures(features_CakupanServiceArea800m_2);
var lyr_CakupanServiceArea800m_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CakupanServiceArea800m_2, 
                style: style_CakupanServiceArea800m_2,
                popuplayertitle: 'Cakupan Service Area 800m',
                interactive: true,
                title: '<img src="styles/legend/CakupanServiceArea800m_2.png" /> Cakupan Service Area 800m'
            });
var format_Servicearea800m_3 = new ol.format.GeoJSON();
var features_Servicearea800m_3 = format_Servicearea800m_3.readFeatures(json_Servicearea800m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearea800m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea800m_3.addFeatures(features_Servicearea800m_3);
var lyr_Servicearea800m_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearea800m_3, 
                style: style_Servicearea800m_3,
                popuplayertitle: 'Service area 800m',
                interactive: false,
                title: '<img src="styles/legend/Servicearea800m_3.png" /> Service area 800m'
            });
var format_CakupanServiceArea400m_4 = new ol.format.GeoJSON();
var features_CakupanServiceArea400m_4 = format_CakupanServiceArea400m_4.readFeatures(json_CakupanServiceArea400m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CakupanServiceArea400m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CakupanServiceArea400m_4.addFeatures(features_CakupanServiceArea400m_4);
var lyr_CakupanServiceArea400m_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CakupanServiceArea400m_4, 
                style: style_CakupanServiceArea400m_4,
                popuplayertitle: 'Cakupan Service Area 400m',
                interactive: true,
                title: '<img src="styles/legend/CakupanServiceArea400m_4.png" /> Cakupan Service Area 400m'
            });
var format_ServiceArea400m_5 = new ol.format.GeoJSON();
var features_ServiceArea400m_5 = format_ServiceArea400m_5.readFeatures(json_ServiceArea400m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea400m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea400m_5.addFeatures(features_ServiceArea400m_5);
var lyr_ServiceArea400m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea400m_5, 
                style: style_ServiceArea400m_5,
                popuplayertitle: 'Service Area 400m',
                interactive: false,
                title: '<img src="styles/legend/ServiceArea400m_5.png" /> Service Area 400m'
            });
var format_Halte_6 = new ol.format.GeoJSON();
var features_Halte_6 = format_Halte_6.readFeatures(json_Halte_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_6.addFeatures(features_Halte_6);
cluster_Halte_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Halte_6
});
var lyr_Halte_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Halte_6, 
                style: style_Halte_6,
                popuplayertitle: 'Halte',
                interactive: true,
    title: 'Halte<br />\
    <img src="styles/legend/Halte_6_0.png" /> Halte Ahmad Dahlan<br />\
    <img src="styles/legend/Halte_6_1.png" /> Halte Imam Bonjol<br />\
    <img src="styles/legend/Halte_6_2.png" /> Halte Permata Hijau<br />\
    <img src="styles/legend/Halte_6_3.png" /> Halte Semampir<br />\
    <img src="styles/legend/Halte_6_4.png" /> Halte Semeru<br />' });

lyr__0.setVisible(true);lyr_BatasAdministrasiKotaKediri_1.setVisible(true);lyr_CakupanServiceArea800m_2.setVisible(true);lyr_Servicearea800m_3.setVisible(true);lyr_CakupanServiceArea400m_4.setVisible(true);lyr_ServiceArea400m_5.setVisible(true);lyr_Halte_6.setVisible(true);
var layersList = [lyr__0,lyr_BatasAdministrasiKotaKediri_1,lyr_CakupanServiceArea800m_2,lyr_Servicearea800m_3,lyr_CakupanServiceArea400m_4,lyr_ServiceArea400m_5,lyr_Halte_6];
lyr_BatasAdministrasiKotaKediri_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LUAS': 'LUAS', });
lyr_CakupanServiceArea800m_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'area': 'area', 'perimeter': 'perimeter', 'Luas (ha)': 'Luas (ha)', });
lyr_Servicearea800m_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', '400m': '400m', '800m': '800m', 'type': 'type', 'start': 'start', });
lyr_CakupanServiceArea400m_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'area': 'area', 'perimeter': 'perimeter', 'Luas (ha)': 'Luas (ha)', });
lyr_ServiceArea400m_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', '400m': '400m', '800m': '800m', 'type': 'type', 'start': 'start', });
lyr_Halte_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', });
lyr_BatasAdministrasiKotaKediri_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_CakupanServiceArea800m_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'Luas (ha)': '', });
lyr_Servicearea800m_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', '400m': 'TextEdit', '800m': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_CakupanServiceArea400m_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'Luas (ha)': '', });
lyr_ServiceArea400m_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', '400m': 'TextEdit', '800m': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Halte_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_BatasAdministrasiKotaKediri_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'LUAS': 'no label', });
lyr_CakupanServiceArea800m_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'area': 'hidden field', 'perimeter': 'hidden field', 'Luas (ha)': 'inline label - always visible', });
lyr_Servicearea800m_3.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', '400m': 'no label', '800m': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_CakupanServiceArea400m_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'area': 'hidden field', 'perimeter': 'hidden field', 'Luas (ha)': 'inline label - always visible', });
lyr_ServiceArea400m_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'hidden field', 'REMARK': 'hidden field', '400m': 'hidden field', '800m': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', });
lyr_Halte_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'no label', 'REMARK': 'hidden field', });
lyr_Halte_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});