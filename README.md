# CS361-Microservice-Implementation

-This repository is respond for an executable microservice that will take in a key word inside an HTTP request, and returns an url of an image that best matches with the key word. 

-This microservice will run on localhost with select port (default on port 3000). 
To run the program, you need to install axios and express on your computer, type:

npm install axios, 
npm install express

to install them. You will also need to install Node.js. You can download the correct version from their website.


-To use the this service, you need to run it first, and sent a get request with the key word attached after "/", to the address that it listen to. 

Example: http://localhost:3000/dog

-The service will return you a JSON style string in the response. You can prase it, and use the url for your program.

Example return: {"imageUrl":"https://www.petmd.com/sites/default/files/2021-01/cute-small-dog-lying-on-floor-beside-bowl-of-food.jpg"}
