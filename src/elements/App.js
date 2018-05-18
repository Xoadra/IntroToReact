



import React, { Component } from 'react'
import Game from './Game'
import logo from '../logo.svg'



class App extends Component {
	
	render( ) {
		return (
			<div className="App">
				<header className="App-header">
					<img src={ logo } className="App-logo" alt="logo" />
					<h1 className="App-title"> Welcome to React </h1>
				</header>
				<p className="App-intro">
					This introductory app delves into React by building a tic-tac-toe game!
				</p>
				<Game/>
			</div>
		)
	}
	
}


export default App


