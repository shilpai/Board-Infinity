# Express js assignment

## Guidelines:
* This assignment is mandatory for everyone 
* There will only be a single attempt for each exam and no deadline extension in case of assignments 
* Any case of unfair means or plagiarism would lead to debarring in final placements without any further consideration.
* The assignment solutions should be uploaded on Github and links to Github repositories should be shared with the coach for code review. Make sure to add appropriate comments in code wherever possible.

# Problem 1: 
Build an API to create and retrieve college student details

### Request URL:- http://[replit-base-url]/student/add
### Request Method:- POST
### Request JSON:- 
{
 "studentFirstName":"John",
 "collegeName": "IIT",
 "location": "Mumbai"
}
### Response JSON:-
{
 "result": "Success"
}

## Objective:- 
* Build an API which accepts the above parameters as a POST request using express.js
* Use Node.js fs module to store the received details JSON in a file. You can refer to the link below for the process:- https://www.geeksforgeeks.org/how-to-read-and-write-json-file-using-node-js/
*  Build a second API/route with which the stored details are sent back to client Refer [image](#Resources/image1.png)
### Request URL:- http://[replit-base-url]/student/getDetails
### Request Method:- GET
### Response JSON:-
{
 "studentFirstName":"John",
 "collegeName": "IIT",
 "location": "Mumbai"
}

# Problem 2:-
Create an API using express.js and deploy it to Heroku

### Objective:-
* Create an API using express.js on your machine which return the below
response:-
  ### Request URL:- https://[Heroku-Base-URL]/student/studentsList
  ### Request Method:- GET
  
  ### Response JSON:-
  {
   "results": [
   "Rajesh",
   "Ramesh",
   "Sayali",
   "Sanjana"
   ]
  }

refer:- [image](#Resources/image2.png)

* Create an account on Heroku:- https://www.heroku.com/ 
* Install Heroku CLI on your machine https://devcenter.heroku.com/articles/heroku-cli
*  Deploy your API to Heroku using below guide: https://devcenter.heroku.com/articles/deploying-nodejs
*   Share the Heroku URL and github repo of the project