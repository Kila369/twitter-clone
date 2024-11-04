# Twitter Clone 🐦

A simplified Twitter clone built with **React**, **TypeScript**, and **Vite**. This project highlights essential front-end features of a social platform, including posts, comments, and fundamental styling.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository**
    ```sh
    git clone https://github.com/Kila369/twitter-clone
    ```
2. **Install dependencies**
    ```sh
    npm install
    ```
3. **Start the development server**
    ```sh
    npm run dev
    ```

**Note**: Vite was chosen for its fast build process, enabling a smooth development experience with quick hot-reloading and optimized performance.

---

## 📂 Project Structure

The project follows a type- and feature-grouped folder structure, with key folders organized by purpose:

* **components/** - Organized into domains like `posts` and `comments`, making it easy to locate and modify UI elements.
* **routes/** - Contains all page routes, facilitating easy navigation and scalability.
* **types/** - Defines TypeScript types, enhancing code reliability and readability.
* **hooks/** - Custom hooks for data fetching, including loading and error state management.

For larger applications, a feature/module-based structure could be beneficial, grouping related elements (e.g., posts, user profiles) into folders containing their components, styles, state management, and validation.

---

## 🔗 API

This project uses **JSONPlaceholder** as a mock API for its simplicity. JSONPlaceholder offers instant access to mock data without needing a custom backend. However, it has some limitations:

- **No pagination or filtering** – Lacks query parameters for page or limit, limiting customization options.
- **Preset data types** – Requires data structures that match JSONPlaceholder's predefined formats.

> **Alternative**: Implementing serverless functions to return custom mock data would add flexibility for testing and expansion, though it requires more setup time.

---

## 📡 Data Fetching

For data fetching, custom hooks manage API calls, error states, and loading states. If the project grows in complexity, integrating a state management library like **Redux** or **TanStack Query** may be worthwhile to facilitate global state, caching, and persistence.

---

## 🎨 Styling

**Tailwind CSS** is used for styling, as its simplicity and rapid setup make it ideal for smaller projects. Tailwind allows for inline styling directly within JSX, streamlining development and minimizing CSS file requirements.

For more complex projects, **SCSS** could offer better organization and support for advanced styling across multiple components.

## 🌟 Additional Features

Here are some potential enhancements to improve functionality and user experience:

- **Infinite Scroll** - Implementing infinite scroll would enhance the user experience by automatically loading more posts as the user reaches the end of the current content, improving render time.
  
- **Virtualized Lists** - Using virtualized lists (e.g., with libraries like `react-window`) would improve performance by rendering only visible items, which is particularly useful for handling large datasets.

- **Enhanced UI Design** - A more refined UI with improved aesthetics and accessibility features could provide a polished experience, increasing user engagement.

- **User Profiles and Collection** - Adding a collection of user profiles 

These additional features would help scale the application, making it feel more like a fully-fledged social media platform.
