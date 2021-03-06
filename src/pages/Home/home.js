import React from 'react'
import Image from 'react-bootstrap/Image'
import Rellax from 'react-rellax'
import './home.css'
export default function Home() {
  const techs = [
    '/logos/react.jpg','/logos/react-native.jpg', '/logos/reduxpng.png','/logos/html5.jpg', 
    '/logos/css3.jpg', '/logos/js.jpg', '/logos/bootstrap-4.jpg', '/logos/fontawesome.jpg', 
    '/logos/node.jpg', '/logos/express-js.jpg','/logos/mongodb.jpg', '/logos/sql.jpg', 
    '/logos/socketio.png', '/logos/git.jpg', '/logos/vscode.png', '/logos/styled_components.png'
  ]
  
  return (
    <div className='homeContainer'>
      <div id="homeHeader">
        <article>
          <Rellax className="rellax" id="front-end" speed={-9} >
            <p>front-end</p>
          </Rellax>
          <Rellax className="rellax" id="back-end" speed={-6} >
            <p>back-end</p>
          </Rellax>
          <Rellax className="rellax" id="responsive" speed={3} >
            <p>responsive</p>
          </Rellax>
          <Rellax className="rellax" id="web" speed={-3} >
            <p>web</p>
          </Rellax>
          <Rellax className="rellax" id="mobile" speed={-9} >
            <p>mobile</p>
          </Rellax>
          <Rellax className="rellax" id="rest" speed={7} >
          <p>rest api</p>
          </Rellax>
        </article>
      </div>
			<div className="works">
				<p>Works</p>
				<p>Voici des exemples de mes réalisations personnelles, scolaires et professionnelles...</p>
				<div className="works works-container">
					<div className="work-div topmovies">
					<a href="https://play.google.com/store/apps/details?id=com.mytopmovies" target="blanc" >Visiter</a>
					{/* 	<p>TopMovies</p> */}
					</div>
					<div className="work-div savoureux">
						<a href="https://restaurant-savoureux-frontend.herokuapp.com/" target="blanc" >Visiter</a>
						{/* <p>Restaurant Savoureux!</p> */}
					</div>
					<div className="work-div restApi">
					<a href="https://github.com/walternj/restaurant_savoureux_backend" target="blanc" >Visiter</a>
						{/* <p>Instagrand</p> */}
					</div>
				</div>
				<button><a href="/works" >See More...</a></button>
      </div>
      <div id="techs">
        <p>Technologies</p>
        <ul>
          {techs.map(tech => (
            <li key={tech}>  
              <Image src={tech} rounded />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}