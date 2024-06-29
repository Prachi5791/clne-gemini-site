// const apKey = "AIzaSyCaHXscnIu8aWkrqBkf7KqpldzglSg9j1Y";

// //const api = "AIzaSyBhc2Lrpv2FgbEXst0C4rAulbovDbYXIb4";


// /*
//  * Install the Generative AI SDK
//  *
//  * $ npm install @google/generative-ai
//  *
//  * See the getting started guide for more information
//  * https://ai.google.dev/gemini-api/docs/get-started/node
//  */

// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = process.env.GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(AIzaSyCaHXscnIu8aWkrqBkf7KqpldzglSg9j1Y);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run() {
//   const chatSession = model.startChat({
//     generationConfig,
//  // safetySettings: Adjust safety settings
//  // See https://ai.google.dev/gemini-api/docs/safety-settings
//     history: [
//       {
//         role: "user",
//         parts: [
//           {text: "what is react"},
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {text: "## React in a Nutshell:\n\nReact is a **JavaScript library** used for building **user interfaces (UIs)**. It's a powerful tool for creating dynamic and interactive web applications, mobile apps, and even desktop applications. \n\nHere's a breakdown of its key features and why it's so popular:\n\n**1. Component-Based Architecture:**\n\n* React encourages breaking down your UI into reusable, independent pieces called **components**. Think of them like building blocks – each component handles a specific part of your UI, making your code modular, organized, and easier to maintain.\n\n**2. Virtual DOM:**\n\n* React uses a virtual representation of your UI called the **Virtual DOM**. When changes occur, React efficiently compares the virtual DOM with the actual DOM and only updates the necessary elements, resulting in **faster performance and smoother user experiences**.\n\n**3. Declarative UI:**\n\n* React's declarative approach means you describe **what** your UI should look like instead of explicitly controlling **how** it changes. This makes your code more readable, easier to understand, and less prone to errors.\n\n**4. JSX (JavaScript XML):**\n\n* React utilizes **JSX**, a syntax extension that lets you embed HTML-like syntax within your JavaScript code. This allows you to write your UI code directly within your components, making it more intuitive and visually appealing.\n\n**5. One-Way Data Flow:**\n\n* Data flows in a single direction – from parent components to child components. This makes it easier to reason about your app's state and prevents unexpected behavior caused by uncontrolled data mutations.\n\n**6. Large and Active Community:**\n\n* React enjoys a vast and active community, providing a wealth of resources, libraries, and support. You'll find plenty of documentation, tutorials, and help whenever you need it.\n\n**7. Reusable Components:**\n\n* React components are highly reusable, meaning you can easily create and share your UI elements across different parts of your application or even between different projects.\n\n**Why Choose React?**\n\n* **Speed and Performance:** React's Virtual DOM optimization significantly improves rendering speed and responsiveness.\n* **Flexibility and Scalability:** React's modular architecture makes it easy to build complex applications and maintain them over time.\n* **Developer Experience:** Its clear and concise syntax, along with a large community, makes React a joy to work with.\n\n**Examples of React Applications:**\n\n* Facebook\n* Instagram\n* Netflix\n* Airbnb\n* Spotify\n\n**In short, React is a powerful, flexible, and highly efficient library that makes building dynamic web applications a breeze.**\n"},
//         ],
//       },
//     ],
//   });

//   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//   console.log(result.response.text());
// }

// // run();


// export default run;

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyCaHXscnIu8aWkrqBkf7KqpldzglSg9j1Y";

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          { text: "what is react" },
        ],
      },
      {
        role: "model",
        parts: [
          { text: "## React in a Nutshell:\n\nReact is a **JavaScript library** used for building **user interfaces (UIs)**..." },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text();
}

export default run;

// const path = require('path');

// module.exports = {
//   entry: './src/main.jsx',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.m?jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//     fallback: {
//       "fs": false,
//       "path": false,
//       "crypto": false,
//     }
//   },
// };


// {
//   "presets": ["@babel/preset-env", "@babel/preset-react"]
// }