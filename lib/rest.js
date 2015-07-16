var http = require("http");
var https = require("https");

/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
exports.getJSON = function(options, onResult)
{
    console.log("rest::getJSON");

    var prot = options.port == 443 ? https : http;
    var req = prot.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            try{
              var obj = JSON.parse(output);
            }
            catch(e){
              onResult("not valid JSON", null);
            }
            onResult(null, obj);
        });
    });

    req.on('error', function(err) {
        onResult(err, null);
    });

    req.end();
};
