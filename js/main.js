import React from "react";
import ReactDOM from "react-dom";
import ExampleWork from "./examplework";

const MyWork = [
  {
    title: "Xamarin Cross-Platform",
    image: {
      desc: "example screenshot of a project involving code",
      src: "images/example1.png",
      comment: "Example 1"
    }
  },
  {
    title: "Unity and C#",
    image: {
      desc: "example screenshot of a project involving cats",
      src: "images/example3.png",
      comment: "Example 3"
    }
  },
  {
    title: "MERN Stack Development",
    image: {
      desc: "example screenshot of a project involving chemistry",
      src: "images/example2.png",
      comment: "example 2"
    }
  }
];

ReactDOM.render(<ExampleWork work = {MyWork}/>, document.getElementById("example-work"));
