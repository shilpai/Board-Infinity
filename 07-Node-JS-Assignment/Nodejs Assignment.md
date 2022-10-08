![](Aspose.Words.2b4a03a1-eb9a-488b-b0fa-dd3b2d0a3eda.001.png)

` `**Nodejs Assignment**

**Guidelines:**

1. ***This assignment is mandatory for everyone***
1. *There will only be a single attempt for each exam and **no deadline extension in case of assignments***
1. *Any case of unfair means or **plagiarism would lead to debarring** in final placements without any further consideration.*  
1. Do not use any framework like Express.js/Hapi.js for building the API endpoints in this assignment* 
1. The assignment solutions should be uploaded on Github and links to Github repositories should be shared with the coach for code review. Make sure to add appropriate comments in code wherever possible.

**Problem 1:** 

Build an API to calculate current age of user from date of birth  

![](Aspose.Words.2b4a03a1-eb9a-488b-b0fa-dd3b2d0a3eda.002.jpeg)Request URL:-  [*http://localhost:8080/age?year=1998&month=11&date=23&name=John](http://localhost:8080/age?year=1998&month=11&date=23&name=John)* Request Method:- GET 

Response HTML:- 

*<p>Hello John</p> ![](Aspose.Words.2b4a03a1-eb9a-488b-b0fa-dd3b2d0a3eda.003.png)*

*<p>You are currently 22 years old</p>* 

**Objective:-** 

Build an API with the above parameters using Node.js.* 

**Learnings:** 

How to make an http-server and endpoints using core Node.js modules.

**Problem 2:** 

Return a JSON response by reading a local file using Node.js 

![](Aspose.Words.2b4a03a1-eb9a-488b-b0fa-dd3b2d0a3eda.004.jpeg)

Request URL:-  [*http://localhost:8080/vegetables](http://localhost:8080/vegetables)* Request Method:- GET 

Response JSON:- 

*{ ![](Aspose.Words.2b4a03a1-eb9a-488b-b0fa-dd3b2d0a3eda.005.png)*

`   `*"result": {* 

`       `*"rootVegetables": [            "turnips",* 

`           `*"ginger",* 

`           `*"beets"* 

`       `*],* 

`       `*"leafyVegetables": [            "broccoli",* 

`           `*"spinach",* 

`           `*"cabbage"* 

`       `*]* 

`   `*}* 

*}* 

![](Aspose.Words.2b4a03a1-eb9a-488b-b0fa-dd3b2d0a3eda.006.png)

**Objective:-** 

1. Create a file with `.json` extension in your project folder with below data:- 

{ ![](Aspose.Words.2b4a03a1-eb9a-488b-b0fa-dd3b2d0a3eda.007.png)

`    `"result": { 

`        `"rootVegetables": [             "turnips", 

`            `"ginger", 

`            `"beets" 

`        `], 

`        `"leafyVegetables": [             "broccoli", 

`            `"spinach", 

`            `"cabbage" 

`        `] 

`    `} 

} 

2. Next read that JSON file in your server route using Node.js file system module. More details can be found here:- <https://www.w3schools.com/nodejs/nodejs_filesystem.asp> 
2. Return the data read from the JSON file in your route’s response. 

**Learnings** 

How to use Node.js file system module 

**Problem 3:** 

Build a area and volume calculation API for various objects based on query params sent with the request 

![](Aspose.Words.2b4a03a1-eb9a-488b-b0fa-dd3b2d0a3eda.008.jpeg)

API URL:- <http://localhost:8080/metrics> 

Query params types possible:-  object: circle, sphere 

metric: 1. area(For circle)  

\2. volume or surfaceArea(For Sphere) 

radius: Integer value 

**Objective:-** 

Build an API which can calculate area of a circle or volume/surface area of a sphere based on inputs sent via query params. 

For example:- 

If the URL is `<http://localhost:8080/metrics?object=sphere&metric=volume&radius=5>` 

Then you need to calculate volume of a sphere with radius 5 units as shown below:- 

![](Aspose.Words.2b4a03a1-eb9a-488b-b0fa-dd3b2d0a3eda.009.jpeg)

Refer to the query params section stated in the problem to understand other possible combinations.** 

**Learnings** 

How to use functions with request routes in Node.js
