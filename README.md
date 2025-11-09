#  Course Explorer-React

A simple and responsive **React + Vite** application that lets users explore different **courses, topics, and subtopics**, and view their detailed Markdown-based content.  
It also includes a basic **Admin page** that shows a list of users in a read-only format.

---

##  Overview of the Project

This project is designed to help users browse through educational courses in a structured and easy way.  
The sidebar shows a list of all available courses. When a user clicks on a course, its topics and subtopics expand.  
Each section (course, topic, subtopic) displays Markdown content on the main screen.

There’s also an **Admin Page** that loads user data from a JSON file and displays it in a clean, read-only table view with friendly loading, empty, and error states.

---

##  Architecture Summary

### 🔹 Frontend Stack
- **React (Vite)** — for fast development and component-based architecture.
- **Tailwind CSS** — for responsive and modern styling.
- **React Markdown** — for rendering rich text content in Markdown format.

## Main Components

### 1. Sidebar
- Displays the list of courses, topics, and subtopics.
- Allows users to expand or collapse sections.
- Handles search functionality for courses and topics.
- Highlights the currently selected course, topic, and subtopic.

### 2. Breadcrumbs
- Shows the user’s current location within the course structure.
- Allows navigation back to the selected course or topic level.

### 3. SubTopic
- Displays the detailed Markdown content of the selected subtopic.
- Used for reading and learning individual sections of a topic.

### 4. Home Page
- Main layout of the application.
- Integrates the Sidebar, Breadcrumbs, and SubTopic components.
- Manages application state (selected course, topic, subtopic).

### 5. Admin Page
- Displays a read-only list of users loaded from `users.json`.
- Shows proper loading, empty, and error states.
- Used to demonstrate basic admin data management.

### 6. Courses Data (`courses.json`)
- JSON file that contains all course information, including topics and subtopics.
- Provides structured data for rendering the sidebar and content area.

### 7. Users Data (`users.json`)
- JSON file used by the Admin page.
- Contains mock user information such as name, email, and join date.


### 🔹 State Management
- Managed using React’s built-in `useState()` hook.
- Tracks which **course**, **topic**, and **subtopic** is currently selected.
- Data comes from local JSON files (`courses.json` and `users.json`).

---

##  Setup Instructions

Follow these steps to run the project on your local machine.

### 1. Clone the repository
```bash

git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2. Install dependencies
```bash
npm install
```
### 3️. Run the development server
```bash
npm run dev
```
### 4️. Build for production
```bash
npm run build
```
### 5️. Preview the production build
```bash
npm run preview
```
---

## Features Implemented

### Course Navigation
- Expandable sidebar that lists all courses, topics, and subtopics.
- Clicking a course displays its topics, and clicking a topic reveals its subtopics.
- Clean and consistent UI with borders and color highlights for selected sections.

### Breadcrumb Navigation
- Displays the current navigation path as `Course → Topic → Subtopic`.
- Clicking on a breadcrumb takes the user back to that specific level.

### Markdown Rendering
- Renders detailed content for the selected course, topic, or subtopic.
- Supports Markdown formatting for headings, lists, code blocks, and emphasis.

### Admin Page
- Simple read-only admin panel that displays data from a `users.json` file.
- Handles all states:
  - Data loaded successfully.
  - Loading state with spinner.
  - Error message if data fails to load.
  - Empty state if no data is available.

### Accessibility
- Includes proper ARIA labels for screen readers.
- Keyboard navigation support for all key components.
- Clear heading hierarchy for improved structure and readability.

### Responsive Design
- Fully responsive layout that adapts to both desktop and mobile screens.
- Sidebar scrolls independently on smaller screens.

---

##  Known Issues / Future Improvements

- **No authentication:** There is no login or role-based access yet.  
  Adding authentication would improve security and control.
- **Performance:** As the number of courses grows, performance can be optimized  
  by lazy-loading course content instead of rendering everything at once.
- **UI Enhancements:** Add progress tracking checkboxes for subtopics  
  (to mark topics as completed and show progress visually).
---

## Deployment Link

### [Live Demo](https://course-explorer-react-zfvo.vercel.app)
