
## Black Board Project
This is the backend of full stack application that that connects with a MongoDB database and Express api
to allow users to upload and store files. This application allows user to sign-up with an e-mail and password. The
password is hashed by the hash password scripts for security purpose. Once signed in the user
can upload, edit, and delete boards from their account.The board consists of board name, topic
and description:

Example:
Board Name: History
Topic: US Presidents
Description: Today we will learn who were the previous presidents in USA.

Once the board is created it is added to user`s board folder so user can be able to see
all the boards that is created by him. When the board is created, this board also can be seen
by other users and the board can be commented by other users.(comment field is not added on
board yet. The future of board is still under progress)

The board also has creatin data and time. All the boards are shown under "All Boards" tab
and "My Boards" tab is with in a chornological order, with the most recent item at the top of the list.

User also able to delete and update the board. Once the user clicks the my board tab, he is able to
see his created boards. There is an action button under the board which allows user to delete and update
the board. Once the button is clicked, the user is able to update the boardName, topic and
description fileds. Once the board is updated, the board creation date and time will be updated as
updated date and time.


## Planning Story
The first step in the process of planning the site was to identify the functionality of the site
based on requirements and the user stories.I created an ERD and discussed the user experience.
I store the following data in MongoDB

The document ID generated by MongoDB.
The boardName
Topic
Descretpion
Owner
A createdAt date stored in "Zulu" time.
An updatedAt date stored in "Zulu" time.

I created 5 routes for userBoard

## API END POINTS

- Verb	URI Pattern	Controller#Action
- POST	/sign-up	users#signup
- POST	/sign-in	users#signin
- DELETE	/sign-out	users#signout
- PATCH	/change-password	users#changepw
- GET	/userBoards	userBoards#index
- GET*	/userBoards/orderdByDateDesc
- POST	/userBoards	userBoards#create
- POST*	/userBoards/board	userBoards#board upload
- GET	/userBoards/:id	userBoards#show a board
- PATCH	/userBoards/:id	userBoards#update
- GET* - This will be a query parameter in the next version.
- POST* - This will be a query parameter in the next version.
- All data returned from API actions is formatted as JSON.

## User Stories

1.  As an unregistered user, I would like to sign up with email and password.
2.  As a registered user, I would like to sign in with email and password.
3.  As a signed in user, I would like to change password.
4.  As a signed in user, I would like to sign out.
5.  As a signed in user, I would like to create a board with the boardName,topic and
    description.
6.  As a signed in user, I would like to delete and update the board that i created.
7.  As a signed in user, I would like to see the all the boards created by all signed in users.

## Technolgies Used
1. Node.js
2. JavaScript
5. json
7. MongoDB
8. Mongoose.js
10. Passport JS
11. Express JS
12. Bcrypt

## ERD

[img]https://i.imgur.com/asCJSbz.jpg[/img]

## Important Links

1. Deployed Frontend
    https://nugrezo.github.io/forumProject_client/
2. Deployed Backend
    https://hidden-gorge-21669.herokuapp.com
3. Frontend Github Repository
    https://github.com/nugrezo/forumProject_client
4. Backend Github Repository
    https://github.com/nugrezo/forumProject_api

## Unsolved Problems/Reach Goals

- Add search tab to search board
- Add comment field under each board so the sign in user will be able to add commments for
  each board
