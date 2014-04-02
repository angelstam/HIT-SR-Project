HIT-SR-Project
=========

HiT - Software Reuse Technology Project

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

`GET /login`
Return status of login.

`POST /login`
Process the login, return ok or error.

`POST /signUp`
Sign-up a new user, return ok or error.

`GET /bids`
Return list of bids.

`POST /bids`
Place bid.

`POST /acceptBid`
Accept a bid.

`GET /cars`
Return list of cars.
