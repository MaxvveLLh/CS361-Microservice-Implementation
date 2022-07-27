
const axios = require ('axios');
var express = require('express');
var app = express();
var PORT = 3000;


app.get('/:name', function(req, res){

    options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
        params: {q: req.params['name'], pageNumber: '1', pageSize: '1', autoCorrect: 'true'},
        headers: {
          'X-RapidAPI-Key': '63080bf96emshb8f85452afce2dap1b00a0jsn350269f41ce4',
          'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
      };

    (async () => {
        axios.request(options).then(function (response) {
            var data = JSON.parse(JSON.stringify(response.data));
            imageUrl = data.value[0].url
            res.send({imageUrl});

            console.log(data);
        }).catch(function (error) {
            console.error(error);
        });
    })();
    console.log(req.params['name']);
    
});
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});