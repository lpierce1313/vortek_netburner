//Required Modules
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

//Sets styling engine to jade
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//App pages for web
app.get('/', function (req, res) {
  res.render('home.ejs')
});
app.get('/config.html', function (req, res) {
  res.render('config.ejs')
});
app.get('/debug.html', function (req, res) {
  res.render('debug.ejs')
});
app.get('/diagnostic.html', function (req, res) {
  res.render('diagnostic.ejs')
});
app.get('/diagnosticProgn.html', function (req, res) {
  res.render('diagnosticProgn.ejs')
});
app.get('/dir.html', function (req, res) {
  res.render('dir.ejs')
});
app.get('/flow2.html', function (req, res) {
  res.render('flow2.ejs')
});
app.get('/fluid.html', function (req, res) {
  res.render('fluid.ejs')
});
app.get('/prognosis.html', function (req, res) {
  res.render('prognosis.ejs')
});
app.get('/prognShow.html', function (req, res) {
  res.render('prognShow.ejs')
});
app.get('/steam.html', function (req, res) {
  res.render('steam.ejs')
});
app.get('/transducer.html', function (req, res) {
  res.render('transducer.ejs')
});
//Config files
app.get('/https/Output.html', function (req, res) {
  res.render('https/output.ejs')
});
app.get('/https/Input.html', function (req, res) {
  res.render('https/input.ejs')
});
app.get('/https/Display.html', function (req, res) {
  res.render('https/display.ejs')
});
app.get('/https/Alarms.html', function (req, res) {
  res.render('https/alarms.ejs')
});
app.get('/https/Totalizer.html', function (req, res) {
  res.render('https/totalizer.ejs')
});
app.get('/https/Units.html', function (req, res) {
  res.render('https/units.ejs')
});
app.get('/https/FluidSel.html', function (req, res) {
  res.render('https/fluid.ejs')
});
app.get('/https/DiagnosticConfig.html', function (req, res) {
  res.render('https/diagnosticsConfig.ejs')
});
app.get('/https/Diag1.html', function (req, res) {
  res.render('https/diag1.ejs')
});
app.get('/https/Diag2.html', function (req, res) {
  res.render('https/diag2.ejs')
});
app.get('/https/Calibration.html', function (req, res) {
  res.render('https/calibration.ejs')
});
app.get('/https/Calibration.html', function (req, res) {
  res.render('https/calibration.ejs')
});
app.get('/https/SteamConf.html', function (req, res) {
  res.render('https/steam.ejs')
});
app.get('/https/DPMConf.html', function (req, res) {
  res.render('https/steam.ejs')
});
app.get('/https/Logging.html', function (req, res) {
  res.render('https/logging.ejs')
});
app.get('/https/System.html', function (req, res) {
  res.render('https/system.ejs')
});

//Load server on localhost 3000
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
