# Purpose

A simple blog website in NodeJs

# Run

```
docker-compose up --build
docker-compose run api npm run migrate
```
Server runs on http://localhost:3000
Client runs on http://localhost:5000
# Visual

![Home page](home.png)
![Update page](update.png)

# Project archetecture

## Backend

### Libraries

- ExpressJs
- Jest

### Routes

- /articles - GET return a list of articles
- /articles/:id - GET return the article
- /articles/:id - POST create article
- /articles/:id - PUT update article
- /articles/:id - DELETE delete article

### Docker

### Database

- PostgreSQL

#### Table

Table Name: article

- id - increments primary
- heading - string length 255 default ‘Untitled article’
- content - string length 10000
- created_at - timestamp nullable
- updated_at - timestamp nullable

## Frontend

### Libraries

React, Redux, Axios

### Pages

#### List of articles

- Open by route ‘/’ + ‘/articles’
- Show article list
- Sort the list by article ID in reverse order (the place of sorting implementation is arbitrary)
- Put a title and creation date in the list item
- By clicking on the title go to the page of the article in reading mode
- Show New Article Button
- By clicking on the button create an article and go to its page in edit mode

#### Article

Reading mode:

- Open on route ‘/article/{id}’
- Show article title
- Show creation date
- Show edit date if article has been edited
- Show article content
- Show article delete button
- By clicking on the button, delete the article and go to the page with the list
- Show article edit button
- Click on the button to switch to edit mode
- Show button to return to list

Edit mode:

- Open by route ‘/article/{id}?edit=true’
- Show input with article title
- Show textarea with article content
- Show button to apply changes
- By clicking on the button to save the article and switch to reading mode
