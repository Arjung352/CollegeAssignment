# React Array Mapping Demo (Vite)

This project is a small React application developed for a college assignment.  
It demonstrates how to use **JSON data**, **array mapping**, and **reusable components** in React.

The project is built using **Vite** for fast development and optimized performance.

---

## 📚 Project Overview

The application reads structured data from a local JSON file and dynamically displays information using React components.

Each section (such as R&D or Academic) is rendered by mapping over the JSON array and displaying its activities and descriptions in the UI.

This project highlights how React handles structured data and component-based design.

---

## 🧩 Concepts Demonstrated

### 1. Using JSON Data in React

Data is stored in a local JSON file and imported into the application.

Example structure used in this project:

```json
[
  {
    "Name": "R&D",
    "activities": [
      "E&T",
      "Embedded Group",
      "e-Governance",
      "Data and information system",
      "Health information system",
      "NLP"
    ],
    "activities_discription": [
      "Each group perform R & D project in their specific domain.",
      "Project may be funded by government agencies or sponsored by MeitY.",
      "They are high end solution for the public use cases."
    ]
  },
  {
    "Name": "Academic",
    "activities": [
      "MCA",
      "MBA",
      "M-Tech",
      "International Programs",
      "PGDAC Programms"
    ],
    "activities_discription": [
      "Formal programs are conducted by CDAC Noida in association with IP university.",
      "International programs are conducted under MEA scheme of Government of India.",
      "PGDAC is CDAC’s in-house program designed to provide skill-based education to students in advanced computing."
    ]
  }
]
```

## 📂 Directory Structure

```bash
arjung352-collegeassignment/
│
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
│
└── src/
    ├── App.jsx
    ├── data.json
    ├── index.css
    └── main.jsx
```

---

## 🛠️ Installation

Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```
