    var express = require('express');
    var path = require('path');
    var strftime = require('strftime');

    var myApp = express();
    
    var inputTime;
    var convertedTime = {unixTime: null, naturalTime: null};
    
    //serve static index.html file using static middleware from the public folder
    myApp.use('/', express.static(path.join(__dirname, 'public')));
    
    
    //use body parser middleware to capture and parse the request
    //myApp.use(bodyparser.urlencoded({extended: false}));
    
    
    
    myApp.get('/:id', function (request, response)
                                {
                                  

                                  inputTime = request.params.id;
                                
                                
                                  
//Check if input date is Unix format or natural format or incorrect format                                  

                                  if(isNaN(inputTime))
                                                                {
                                                                    if (isNaN(Date.parse(inputTime)))
                                                                        {
                                                                            console.log("Not a correct date format");
                                                                            convertedTime.unixTime = null;
                                                                            convertedTime.naturalTime = null;
                                                                            console.log(convertedTime);
                                                                            response.end(JSON.stringify(convertedTime));
                                                                            
                                                                        }
                                                                        
                                                                    else 
                                                                        {
                                                                            console.log("Found Natural Date Convert from natureal to Unix format");
                                                                            convertedTime.unixTime = Date.parse(inputTime);
                                                                            convertedTime.naturalTime = inputTime;
                                                                            console.log(convertedTime);
                                                                            response.end(JSON.stringify(convertedTime));
                                                                            
                                                                        }
                                                                }
                                  
                                  else if(Date.parse(inputTime) != 'NaN')
                                                                {
                                                                    console.log("Found Unix Date Convert from Unix to Natural format");
                                                                    convertedTime.unixTime = parseInt(inputTime);
                                                                    convertedTime.naturalTime = strftime('%B %d, %Y', new Date(parseInt(inputTime)));
                                                                    //console.log(strftime('%B %d, %Y', new Date(parseInt(inputTime))));
                                                                    console.log(convertedTime);
                                                                    response.end(JSON.stringify(convertedTime));
                                                                }
                                
                                  else 
                                                                {
                                                                    console.log("Not a correct format date");
                                                                    response.end("Please input correct date format")
                                                                }
                                    

                                  
                                  
                                    
                                }
            );                    


    myApp.listen(process.env.PORT,process.env.IP, function() {
                                                                console.log("Listening on port: " + process.env.PORT);
                                                                console.log("Listening on IP: " + process.env.IP);
                                                            }
                );  