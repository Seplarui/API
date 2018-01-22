var http=require('http');
var url = 'http://www.omdbapi.com/?i=tt3896198&apikey=1b1f278b';

http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var fbResponse = JSON.parse(body);
        console.log("Got a response: ", fbResponse);
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});