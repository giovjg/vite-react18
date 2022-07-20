
import React from "react"
import Sammy from "/src/assets/sammy.jpeg"
export default function MainContent() {
  return (
  <main>
  <img src={Sammy} alt="Sammy Image" width={200} height={200} />
    <h1 className="main-title">Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
  <p>This is going to be the coolest app in the world!</p>
  </main>
  );

}
