// blog images
import blogIng2 from "../Assets/images/blogs/blog2.jpg";

// header carousel images
import carouselImg1 from "../Assets/carousel/carousel1.jpg";
import carouselImg2 from "../Assets/carousel/carousel2.jpg";
import carouselImg3 from "../Assets/carousel/carousel3.jpg";

export const month_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const carouselData = [
  { id: 1, image: carouselImg2 },
  { id: 2, image: carouselImg3 },
  { id: 3, image: carouselImg1 },
];

export const blogData = [
  {
    id: 2,
    title: "A Road Trip Through the Amalfi Coast",
    image: blogIng2,
    content: `React is a popular JavaScript library for building user interfaces. Developed and maintained by Facebook, React has gained widespread adoption in the web development community due to its declarative and efficient approach to building UI components. One of the key features of React is its use of a virtual DOM, which allows for efficient updates to the user interface. Instead of updating the entire DOM when data changes, React calculates the minimal number of updates required and applies them to the virtual DOM, resulting in improved performance. 
    React follows a component-based architecture, where the UI is broken down into reusable and independent components. Each component manages its state, and changes in the state trigger re-rendering of the component. JSX, a syntax extension for JavaScript, is used in React to describe what the UI should look like. JSX makes it easier to visualize and write UI components, as it closely resembles HTML. 
    Babel, a JavaScript compiler, is commonly used to transform JSX into standard JavaScript that browsers can understand. React also supports a unidirectional data flow, making it easier to understand and debug the application's state changes. Parent components can pass down data to child components through props, and child components can communicate with parent components through callbacks. 
    In addition to its core library, React has a thriving ecosystem of third-party libraries and tools. React Router is widely used for handling navigation in React applications, while Redux provides a predictable state container for managing application state. Overall, React has become a go-to choice for many developers building modern and interactive user interfaces. Its focus on simplicity performance, and reusability has made it a powerful tool for front-end development.`,
    author: "John Doe",
    date: "2023-01-01",
    tags: ["React", "JavaScript", "Frontend"],
  },
  
];
