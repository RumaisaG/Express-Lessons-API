# RU Academy Backend — (Node.js + Express + MongoDB)

RU Academy Backend is a Node.js/Express REST API that powers the after-school lessons booking platform. It uses native MongoDB driver for efficient database operations and provides real-time search functionality.

## Live Backend Deployement (Render.com)
The backend API is deployed on Render and available at : https://express-lessons-api.onrender.com

You can see the list of all lessons at https://express-lessons-api.onrender.com/api/lessons

## Features

###  Lessons API (CRUD)
- Fetch all lessons for display (`GET api/lessons`)
- Update **any lesson attribute** (`PUT api/lessons/:id`)
  - This general-purpose update route.
  - Used after checkout to update the number of spaces.
- Searches for lessons (`GET api/search?q=curepipe`)
  

###  Orders API
- Save new order (`POST api/orders`)
- Order object contains:
  - `name`
  - `phone`
  - `email address`
  - `total amount paid`
  - `lessonIDs`
  - `order date`
  - `spaces` (total or per lesson)
- Validates that the request body includes the required data.

###  Integration With Frontend
After checkout:
1. Frontend sends `POST api/orders` to save the order.  
2. Frontend sends `PUT api/lessons/:id` to update available lesson spaces.

###  MongoDB Collections
There are 2 collections in the MongoDB Database as shown below :
#### `Lessons`
- `_id`
- `topic`
- `location`
- `price`
- `spaces`
- `description`
- `rating`
- `category`
- `days`
- `imageUrl` array

#### `Orders`
- `_id`
- `cutomer name`
- `phone`
- `email address`
- `lessonIDs` (array)
- `total Amount`
- `Order date`

## Technologies Used
- Node.js  
- Express.js  
- MongoDB (Atlas)  

##  Project Structure
- server.js
- routes --> api.js
- middleware
   --> logger.js
   --> staticFiles.js
- images
- config
   --> database.js       

## Local Development
### Clone the repository
git clone https://github.com/RumaisaG/Express-Lessons-API.git

cd Express-Lessons-Api

### Install dependencies
npm install

### Set up environment variables
cp .env.example .env
Edit .env with your MongoDB URI and other settings

### Start development server
npm run dev

