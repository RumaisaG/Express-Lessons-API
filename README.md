# Lessons Booking Platform — Backend (Node.js + Express + MongoDB)

This is the backend REST API for my lesson booking platform coursework.  
It provides lesson data, handles orders, and updates available lesson spaces as required by the coursework.

## Features

###  Lessons API (CRUD)
- Fetch all lessons (`GET /lessons`)
- Update **any lesson attribute** (`PUT /lessons/:id`)
  - This general-purpose update route.
  - Used after checkout to update the number of spaces.

###  Orders API
- Save new order (`POST /orders`)
- Order object contains:
  - `name`
  - `phone`
  - `lessonIDs`
  - `spaces` (total or per lesson)
- Validates that the request body includes the required data.

###  Integration With Frontend
After checkout:
1. Frontend sends `POST /orders` to save the order.  
2. Frontend sends `PUT /lessons/:id` to update available lesson spaces.

###  MongoDB Collections
#### `lessons`
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

#### `orders`
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

## Live Backend Deployement (Render.com)
The backend API is deployed on Render and available at : https://express-lessons-api.onrender.com
  
