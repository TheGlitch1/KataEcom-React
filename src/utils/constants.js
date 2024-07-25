import React from "react";

import { GiAbstract116 } from "react-icons/gi";


export const links = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "Products", url: "/products" },
  { id: 3, text: "About", url: "/about" },
];

export const services = [
  {
    id: 1,
    name: "Service 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <GiAbstract116 />,
  },
  {
    id: 2,
    name: "Service 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <GiAbstract116 />,
  },
  {
    id: 3,
    name: "Service 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <GiAbstract116 />,
  },
];

export const projectDetails = {
  projectDescription: [
    {
      title: "Project",
      paragraphs: [
        "The project utilizes a fake API to display products and mimic cart functionality of an e-commerce type. It includes the following key features:",
      ],
      features: [
        "Listing Products: The project fetches products from the API and displays them in a list.",
        "Filtering Products: Users can filter the products list based on different properties.",
        "Product Consultation: Users can view detailed information about a specific product.",
        "Add to Cart: Users can add products to their cart.",
        "Cart Management: Users can view their cart, delete items from the cart, and adjust the quantity of items in the cart.",
      ],
    },
    {
      title: "Project Structure Overview",
      paragraphs: [
        "Project Type: Simple Folder Structure",
        "Key Technicalities:",
      ],
      features: [
        "Component-Based Architecture: The project is structured around reusable and modular components, enhancing maintainability and scalability.",
        "React Framework: Built using React, a popular JavaScript library for building user interfaces, enabling efficient component-based development.",
        "Context API: Utilizes React's Context API for state management, allowing for efficient state sharing across components without prop drilling.",
        "Styled Components: Uses styled-components for styling, enabling scoped and dynamic styles within components for a modular and maintainable CSS architecture.",
        "Routing: Implements client-side routing with React Router, providing a seamless single-page application experience.",
        "Utility Functions and Constants: Contains utility functions and constants for reusable logic and configuration.",
        "Reducer Pattern: Employs the reducer pattern for managing complex state logic, following a unidirectional data flow.",
      ],
    },
  ],
};
