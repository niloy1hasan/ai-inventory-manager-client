# AI Model Inventory Manager


## About the Project

AI Model Inventory Manager is a web application that helps users manage a list of AI models.
Users can add, view, edit, delete, and purchase AI models. Each model includes information such as the name, framework, dataset, use case, and description.

The project is built using React.js, MongoDB, Express.js, and Firebase Authentication.
It aims to give a practical understanding of how AI models can be stored, displayed, and managed in a real-world style system.

---

## Features

* User authentication with Firebase (Email/Password and Google Sign-In)
* Add, update, delete, and view AI models
* Image upload using ImgBB
* Search and filter AI models by framework or name
* Purchase counter updates in real time
* Dark and light theme toggle
* Private routes for logged-in users
* Fully responsive layout for all screen sizes


## Technologies Used

**Frontend:** React.js, React Router, Firebase Auth, Toast notifications
**Backend:** Node.js, Express.js, MongoDB
**Hosting:** Netlify (client) and Vercel (server)
**Database:** MongoDB Atlas
**Image Storage:** ImgBB



## Main Pages

* **Home:** Displays featured models, an about section, and a get started button
* **Add Model:** Private form for adding new AI models
* **All Models:** Lists all models with search and filter features
* **Model Details:** Shows full model details and purchase option
* **My Models:** Shows models created by the logged-in user
* **Purchased Models:** Shows models purchased by the user
* **Login / Register:** Firebase authentication pages


## Authentication

* Includes both Email/Password and Google login options
* User remains logged in after reloading private routes
* Password must have:

  * At least one uppercase letter
  * At least one lowercase letter
  * Minimum six characters



## Example Model Entry

```json
{
  "name": "BERT",
  "framework": "TensorFlow",
  "useCase": "NLP",
  "dataset": "Wikipedia",
  "description": "A transformer-based model for natural language processing tasks like text classification.",
  "image": "https://ibb.co/sample-image-bert-diagram",
  "createdBy": "user@example.com",
  "createdAt": "2025-10-28T11:54:00.000Z",
  "purchased": 10
}
```


## Additional Functionalities

* Loading spinner when fetching or submitting data
* Custom 404 page for invalid routes
* Toast notifications for success and error messages
* MongoDB search using `$regex` for case-insensitive matching
* Purchase counter updated using MongoDB `$inc` operator


## Optional Improvements

* Firebase Admin SDK to restrict edits or deletions to model creators
* Rating system for models with average rating calculation


## Live Site

[Visit Live Website](#)

## Server Repository

[Server Repo Link](#)