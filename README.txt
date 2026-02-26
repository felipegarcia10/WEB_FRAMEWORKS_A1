PG29Felipe - Web App Frameworks A3

link to GitHub repo:

https://github.com/felipegarcia10/WEB_FRAMEWORKS_A1.git


To install this app you have to:
1. go to the project folder and open the command line
2. run "npm install"



to run this app you have to:
1. in the backend folder, open command line
2. run "npm run dev"
3. in the frontend folder, open command line
4. run "npm run dev"
5. you will find a .sql file in the db folder at the root of the project

Here are the environment variables for the database setup:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=spencer
DB_NAME=Game
PORT=3306
MONGODB_URI = mongodb+srv://spencer:spencer@spencer.shs44rg.mongodb.net/?appName=Spencer
PORT=3000

HOW TO USE THIS APP:

when you start the app the base url should take you to the login page.
login with user spencer@mail.com and put any text in the password field, then click login - this user is an admin.
you can also test a "user" by logging in with the "PG29nick@mail.com" user.
once you login you can navigate to different pages by clicking the different options in the navbar placed in the top left corner.

ENDPOINTS:

api/ping:[GET] make sure the server responds to requests
api/leaderboard: [GET] get the complete leaderboard
api/users/: [POST] create a new user 
		body:{
			email: "spencer@mail.com",
			name: { first: "Spencer", last: "TA" },
			role: "Admin",
		}
api/users/:email :[GET] get user by email - used in the login
api/users/:email/contact: [PUT] update user record with the comments or feedback they submit in the feedback form
		body{			
    			email: "felipemail.com",
    			comments: [{title: "working", description: "it is working!!"}],    
		}


PINIA:
I created a userInfo store that holds both user email and role, it also has an action that works as a setter to set the values of the email and role. from the login form component, when the user logsin successfully I call the setValues function from the userInfo store to store the email and the role of the current user, with this, the email and role are visible in every page except for the login.


LIMITATIONS:

I handle exceptions in console for both login form and Feedback form, you can also see in the console the data submitted in the Feedback form so you know it is working



