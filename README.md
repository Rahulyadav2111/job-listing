# Job Listing Web Application
A web application for viewing job opportunities with a dynamic, responsive interface to display job details and search jobs by location.
# Tech Stack
Frontend: React.js (Vite), Tailwind CSS
Backend: Express.js, Node.js, Mongoose
Database: MongoDB

# Prerequisites
Node.js (>=16.x)
MongoDB (running locally or via MongoDB Atlas)
npm

# Steps to Run the Project Locally
# Backend
Navigate to the server directory:cd server
Install dependencies:npm install
Create a .env file in the server directory with the following:MONGO_URI=mongodb://localhost:27017/job_listings
PORT=5000
Start the backend server:npm start

# Frontend
Navigate to the client directory:cd client
Install dependencies:npm install
Start the frontend development server:npm run dev
Open http://localhost:5173 in your browser.

# Running Locally
Ensure MongoDB is running.
Start the backend server (npm start in the server directory).
Start the frontend server (npm run dev in the client directory).
Access the application at http://localhost:5173.

# Deployed Links
Frontend: https://job-listing-kappa-eosin.vercel.app
Backend: https://job-listing-wzvs.onrender.com

# Assumptions
The jobs.json file is provided with the required fields.
MongoDB is running locally on the default port (27017).
The search by location is case-insensitive and uses a regex match.
Multiple locations can be entered, separated by commas.
No authentication is required for the API.
The JSON data does not include a description field, so a default value is used.
The "Quick Apply" button links to the job_link provided in the JSON.
The Job ID (Numeric) field is stored as a string in the database.
Pagination is set to 10 jobs per page with only Previous and Next buttons.

# Challenges Faced
Ensuring the frontend updates dynamically when the search query changes without excessive API calls.
Handling the initial state when no job is selected or no search is triggered.
Structuring the MongoDB schema to accommodate the JSON structure.
Styling the UI to be responsive and visually appealing, especially aligning the bottoms of JobList and JobDetails sections.
Implementing pagination with a fixed height to ensure consistent layout across different numbers of jobs.
Adjusting the search functionality to automatically trigger on input change while ensuring the loading animation appears for every search.

