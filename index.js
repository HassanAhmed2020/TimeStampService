


    var express = require('express');
    var path = require('path');
    var strftime = require('strftime');

    var myApp = express();
    
    var inputTime;
    var convertedTime = {unixTime: null, naturalTime: null};
    
    myApp.use('/', express.static(path.join(__dirname, 'public')));





myApp.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

myApp.get('/', function(request, response) {
//  response.render('pages/index');
response.end("Hello World 3");
});

myApp.listen(myApp.get('port'), function() {
  console.log('Node app is running on port', myApp.get('port'));
});
