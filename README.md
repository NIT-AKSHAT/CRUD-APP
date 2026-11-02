# Course Management API

A RESTful API built using **Node.js, Express.js, and MongoDB** to manage courses. It supports creating, retrieving, updating, and deleting course records.

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv

## Features

- Get all courses
- Get a course by its ID
- Add a new course
- Update an existing course
- Delete a course
- Request logging
- 404 route handling
- Centralized error handling

## Project Structure

```text
full-stack/
├── controllers/
│   └── courseController.js
├── models/
│   └── Course.js
├── routes/
│   └── courseRoutes.js
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Installation and Setup

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
cd full-stack
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file in the root directory:

```env
MONGO_URL=your_mongodb_connection_string
```

**4. Start the development server**

```bash
npm run dev
```

Server runs at:

```text
http://localhost:3000
```

## API Endpoints

Base URL: `http://localhost:3000/courses`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/courses` | Get all courses |
| GET | `/courses/:id` | Get course by ID |
| POST | `/courses` | Create a course |
| PUT | `/courses/:id` | Update a course |
| DELETE | `/courses/:id` | Delete a course |

## Course Data Structure

```json
{
  "id": 105,
  "platform": "Udemy",
  "free_course": "Yes",
  "course_name": "JavaScript Fundamentals",
  "link": "https://example.com",
  "difficulty": "Beginner",
  "module_number": 10,
  "certification": "Yes"
}
```

## Example Requests

**Create a course — POST `/courses`**

```json
{
  "id": 105,
  "platform": "Udemy",
  "course_name": "JavaScript Fundamentals",
  "free_course": "Yes",
  "link": "https://example.com",
  "difficulty": "Beginner",
  "module_number": 10,
  "certification": "Yes"
}
```

**Update a course — PUT `/courses/105`**

```json
{
  "course_name": "Advanced JavaScript",
  "difficulty": "Advanced"
}
```

## HTTP Status Codes

| Status | Meaning |
|---|---|
| 200 | Request successful |
| 201 | Resource created |
| 400 | Invalid request |
| 404 | Resource or route not found |
| 500 | Internal server error |

## Future Improvements

- React frontend integration
- User authentication
- Search and filtering

---

## Connect With Me

- **LinkedIn:** [Akshat Awasthi](https://www.linkedin.com/in/akshat-awasthi-092736273/)
- **X (Twitter):** [@AKSHAT_coder](https://x.com/AKSHAT_coder)

---

**Built by Akshat Awasthi**



**Built as a backend development project using Node.js, Express.js, and MongoDB.**