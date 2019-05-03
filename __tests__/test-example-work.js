import React from "react";
import { shallow } from "enzyme";
import ExampleWork, {ExampleWorkBubble} from "../js/examplework.js";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter()
});

const myWork = [
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
  }
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork} />);
  it("Should be a 'section' element", () => {
    console.log(component.debug());
  });
  it("Shoul;d contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });
});

describe("ExampleWorkBubble component", () => {
    let component = shallow(<ExampleWorkBubble example={myWork[1]} />);
    let images = component.find("img");

   it("Should contain a single 'img' element", () => {
       expect(images.length).toEqual(1);
   });
   it("Should have the image src set correctly", () => {
       expect(images.prop('src')).toEqual(myWork[1].image.src);
   })
  });
