HIT-SR-Project (Reverse Car Bay)
=========

##HiT - Software Reuse Technology Project
This project was created as an exercise in the course *Software Reuse Technology* at *Harbin Institute of Technology* during ten days in April 2014. The code that resulted from this project should be considered a prototype far from production ready.

* [View presentation](http://angelstam.github.io/HIT-SR-Project) [PDF](/docs/ReverseCarBayPresentationPDF.pdf?raw=true)
* [Our backlog](/TODO.md)
* [Software Requirements Specification](/docs/Software%20Requirements%20Specification.pdf?raw=true)

##Architecture
This is an application created using AngularJS with a PHP-MySQL backend. The following figure show a representation of the systems architecture.
![System architecture diagram](/docs/architecture.png)

###Directory structure
`/docs` - Documentation related files.

`/include` - PHP classes.

`/public` - The files to be served by the web server.

`/public/app` - The web application that runs in the users browser.

`/public/json.php` - The json REST interface.

`/sql` - The database model.

##Git
###Workflow
We try to avoid merge commits.

Configure git with
`$ git config branch.autosetuprebase always --global`

and
`$ git config branch.master.rebase true`

Before you push make shure the history is like it should be, use `git log --stat` to verify you commited the changes you want.

###Commit messages
Write commit mesages in present tense like:

`Add feature X.` or `Update TODO.` or `Fix problem with Y.`

##JSON REST API

`GET /enquiries`
Returns a list of all enquiries.

`POST /enquiries`
Create a new enquiry, return ok or error.
 - car_id: int (required)
 - target_price: int
 - color: string
 - milage: int
 - from_year: int

`GET /login`
Return status of login.

`POST /login`
Process the login, return ok or error.
 - username: string (required)
 - password: string (required)

`POST /logout`
Do logout.

`POST /signUp`
Sign-up a new user, return ok or error.
 - username: string (required)
 - password: string (required)

`GET /bids`
Return a list of bids.

`POST /bids`
Place bid.
 - on_enquiry_id: int (required)
 - bid_amount: double (required)

`GET /acceptBid`
Return a list of bids the current user can accept.

`POST /acceptBid`
Accept a bid.
 - enquiry_id: int (required)
 - accepted_bid_id: int (required)

`GET /cars`
Return list of cars.

## Deployment
Prerequisite software:
* Apache 2.2 configured to publish `/public` in the repo. The server shall have the option MutiViews enabled.
* PHP 5.3+ with MySQL support.
* MySQL 5+. Import /sql/reversecarbay.sql into your database server.

