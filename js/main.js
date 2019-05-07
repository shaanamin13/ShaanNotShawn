import React from "react";
import ReactDOM from "react-dom";
import ExampleWork from "./examplework";

const MyWork = [
  {
    title: "Xamarin Cross-Platform",
    href: "http://example.com",
    image: {
      desc: "example screenshot of a project involving code",
      src: "images/example1.png",
      comment: "Example 1"
    }
  },
  {
    title: "Unity and C#",
    href: "http://example.com",
    image: {
      desc: "example screenshot of a project involving cats",
      src: "images/example3.png",
      comment: "Example 3"
    }
  },
  {
    title: "MERN Stack Development",
    href: "http://example.com",
    image: {
      desc: "example screenshot of a project involving chemistry",
      src: "images/example2.png",
      comment: "example 2"
    }
  }
];

ReactDOM.render(<ExampleWork work = {MyWork}/>, document.getElementById("example-work"));
