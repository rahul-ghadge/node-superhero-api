# node-superhero-api
Super hero apis - get data related to marvel super heros


This application exposes REST APIs for Super heros data<br>
It will provide out the json response in return for success.

<b> Features Implemented : </b>

* `package.json` file constains information about application and dependencies.
* `server.js` file conntains configuration of application like port, body parsing, express, importing routing.
* `routers.js` form `app > routers` directory contains routing for API Endpoints, and calls respective functions from **controller.js**.
* `controller.js` form `app > controller` directory contains functions which returns data on-demand related to super heros in JSON format.
* `superHeros.js` form `app > models` directory holding static data for Super Heros.

---------------------------------------------------------

<strong> Run server which will listen requests coming on port: 3000 </strong>

> node server.js


---------------------------------------------------------
## API Endpoints
Get all super heros via `http://host:port/super-heros`


http://localhost:3000/super-heros **(GET Method)**</br>
&nbsp;&nbsp;- This API will return all super heros from `superHeros.js`</br>


http://localhost:3000/super-heros/Tony **(GET Method)**</br>
&nbsp;&nbsp;- This API will return Iron Mans data</br>


http://localhost:3000/super-heros **(POST Method)**</br>
Request- ```{
        "name": "Black panther",
        "superName": "Black panther",
        "profession": "King",
        "age": 30,
        "canFly": false
    }```

&nbsp;&nbsp;- This API will return success message along with all super hero present in team</br>



http://localhost:3000/super-heros/Wade **(PUT Method)**</br>
Request:- ```{
        "name": "Wade",
        "superName": "Deadpool",
        "profession": "Street fighter",
        "age": 28,
        "canFly": false    
    }```
&nbsp;&nbsp;- This API will update Deadpools data from flying to non-flying</br>
Response:- ```{
    "message": "Super hero's data updated secretly",
    "superHero": {
        "name": "Wade",
        "superName": "Deadpool",
        "profession": "Street fighter",
        "age": 28,
        "canFly": false
    }
}```


http://localhost:3000/super-heros/Wade **(DELETE Method)**
&nbsp;&nbsp;- This API will remove Wade from super heros and return back all other heros</br>
