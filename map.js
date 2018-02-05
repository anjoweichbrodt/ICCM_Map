google.charts.load('current', {
  'packages':['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Members'],
    ['LB',3],
    ['JO',2],
    ['IT',24],
    ['PS',3],
    ['LY',1],
    ['TN',6],
    ['LB',3],
    ['EG',2],
    ['ES',29],
    ['FR',14],
    ['RS',8],
    ['US',15],
    ['PT',1],
    ['AL',1],
    ['DZ',1],
    ['DE',4],
    ['GR',15],
    ['CH',1],
    ['TR',3],
    ['BG',8],
    ['CY',2],
    ['HU',1],
    ['MA',1],
    ['AU',1],
    ['CA',1],
    ['BR',1],
    ['SE',1],
    ['BE',3],
    ['GB',1],
    ['IN',2],
    ['MK',1],
    ['PL',1],
    ['HR',2],
    ['IL',1]
  ]);

  var options = {colorAxis: {colors: ['#c1c1cd', '#53556e']}};

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}
