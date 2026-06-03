🌍 WanderLust

A full-stack travel listing web application inspired by Airbnb — built using Node.js, Express, MongoDB, and EJS. Users can create, view, edit, and delete travel listings, upload images, and explore them interactively using Leaflet maps.

🧠 Features

✨ User authentication and authorization using Passport.js

🏞️ Image uploads and storage via Cloudinary

🗺️ Interactive maps with Leaflet.js

📋 Full CRUD operations for listings

💬 Flash messages for alerts and feedback

🔐 Secure sessions and cookies

📱 Responsive design using simple CSS media queries

🛠️ Tech Stack

Frontend: EJS, HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MongoDB (via Mongoose)

Other Tools:

Cloudinary (image storage)

Multer (file upload handling)

Leaflet (maps)

Connect-Mongo (session store)

Joi (input validation)

dotenv (environment variables)

⚙️ Installation and Setup

Clone the repository

git clone https://github.com/yourusername/wanderlust.git

cd wanderlust

Install dependencies

npm install

Create a .env file in the root directory and add:

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_KEY=your_api_key

CLOUDINARY_SECRET=your_api_secret

MAP_TOKEN=your_map_token_if_needed

ATLASDB_URL=your_mongodb_connection_string

SECRET=your_secret_key

Run the app

node app.js

Visit http://localhost:3000

📚 Folder Structure

Wanderlust/ │

├── controllers/ # Route logic

├── init/ # Seed or setup scripts

├── models/ # Mongoose models

├── public/ # CSS, JS, and static assets

├── routes/ # Express routes

├── utils/ # Utility functions

├── views/ # EJS templates │

├── .gitignore

├── app.js # Entry point

├── cloudConfig.js # Cloudinary configuration

├── middleware.js # Custom middleware

├── package.json

├── package-lock.json

└── schema.js # Joi validation schemas

💡 Future Improvements

🗺️ Improve map filters and search

💬 Add a contact or feedback page

🧑‍💻 Author

Javeed shaik

💼 Full-Stack Developer | B.Tech ECE

📍 Tamil Nadu, India
