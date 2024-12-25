// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE

import React from "react"
import ReactDOM from "react-dom/client"
import bars from "./bars.svg"
import "./style.css"

function ChristlyHeader(){
  return(
    <header>
        <nav id = "GTLJC_nav_header">
          <img src = {bars}/>
          <ul className = "GTLJC_ul_header">
            <li>Pray Always</li>
            <li>Pray Always</li>
            <li>Pray Always</li>
          </ul>
        </nav>
      </header>
  )
}

function ChristlyFooter(){
  return(
    <footer>
      <small>&copy; YAHWEH ALONE MATTERS not me &copy;</small>
    </footer>
  )
}

function ChristlyMainContent(){
  return(
    <div>
       <h1>Why is the Lord good to me?</h1>
        <ol>
          <li>He is a Faithful Lord</li>
          <li>He is a Merciful Lord</li>
          <li>He Loves me</li>
          <li>He cares for me</li>
          <li>i am the apple of His Eye</li>
        </ol>

    </div>
  )
}

function ChristlyIntroduction(){

  return (
    <div>
      <ChristlyHeader />
      <ChristlyMainContent />
      <ChristlyFooter />
     
     
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ChristlyIntroduction />
  </React.StrictMode>
)