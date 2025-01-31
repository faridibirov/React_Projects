import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MainHeader() {
  return <h1>REACT COURSE</h1>;
}

function SubHeader() {
  return <h1>This will be an exciting course.</h1>;
}

function Header() {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}

function MainBody() {
  return (
    <div>
      <p>In this course, we will learn react js by building TaskOPedia!</p>
      <ul>
        <li>Call Ben</li>
        <li>Go to walmart</li>
      </ul>
    </div>
  );
}

function Footer() {
  return <p>Happy Coding!</p>;
}

root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
);
