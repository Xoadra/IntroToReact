



import React, { Component } from 'react'
import Board from './Board'
import Reset from './Reset'
import calculateWinner from '../actions/winner'



class Game extends Component {
	
	constructor( props ) {
		// Use props here with the inherited component class' props
		super( props )
		this.state = {
			// History of moves beginning with the initial game board
			// Build an array for squares' values and set them to null
			history: [ { squares: Array( 9 ).fill( null ) } ],
			// Archive of the final state of all previous games played
			games: [ ],
			// Number of game steps taken within this series of play
			stepNumber: 0,
			// Track if player x goes next to see whose turn it is to go
			xIsNext: true
		}
	}
	
	
	// Change squares from above the square's parent component
	handleClick( insert ) {
		// Edit state's history using a copy as this makes data safe
		const history = this.state.history.slice( 0, this.state.stepNumber + 1 )
		const current = history[ history.length - 1 ]
		// Replicate the latest squares array to track the turn taken
		const squares = current.squares.slice( )
		// Quit early if either player has won or if the square is filled
		if ( calculateWinner( squares ) || squares[ insert ] ) { return }
		// Write the current player's symbol into this square's index
		squares[ insert ] = this.state.xIsNext ? 'X' : 'O'
		// Make the updates to state to reflect this point in the game
		this.setState( {
			// Insert updated copy of squares array into history array
			history: history.concat( [ { squares: squares } ] ),
			// Document the quantity of steps throughout this game
			stepNumber: history.length,
			// Go to the next player's turn since last player just went
			xIsNext: !this.state.xIsNext
		} )
	}
	
	handleReset( winner ) {
		// List state's arrays as immutable values because why not
		const history = this.state.history.slice( 0, this.state.stepNumber + 1 )
		const games = this.state.games
		// New winner property is added to see this game's winner
		let replica = Object.assign( {  }, history[ history.length - 1 ] )
		replica.winner = winner
		// Keep a record of the game similar to how turns are saved
		const game = Object.assign( {  }, replica )
		// Objects with any nested objects will require deep copying
		// Just use json methods to create deep copies of an object
		/* const game = JSON.parse( JSON.stringify( replica ) ) */
		console.log( game )
		// Save this game's results and prepare a new game board
		this.setState( {
			history: history.concat( [ { squares: Array( 9 ).fill( null ) } ] ),
			games: games.concat( [ games ] ),
			stepNumber: history.length,
			xIsNext: true
		} )
	}
	
	jumpTo( step ) {
		// Travel back to this step in history and wipe steps after it
		this.setState( {
			stepNumber: step,
			xIsNext: ( step % 2 ) === 0
		} )
	}
	
	render( ) {
		// Produce a copy of state's history for an unknown reason
		const history = this.state.history
		const current = history[ this.state.stepNumber ]
		// Verify whether or not any player met a winning condition
		const winner = calculateWinner( current.squares )
		// Builds prior steps taken button for exploring game history 
		const moves = history.map( ( step, move ) => {
			const desc = move ? 'Move #' + move : 'Game Start'
			return (
				// Will need keys assigned as React uses keys for lists
				<li key={ move }>
					<button onClick={ ( ) => this.jumpTo( move ) }> { desc } </button>
				</li>
			)
		} )
		// Display game status according to if there is a winner yet
		let status
		if ( winner ) { status = 'Winner: ' + winner }
		// Flip the status text to show whichever player's turn it is
		else { status = 'Next player: ' + ( this.state.xIsNext ? 'X' : 'O' ) }
		return (
			<div className="game">
				<div className="status"> { status } </div>
				<div className="game-board">
					<Board squares={ current.squares } onClick={ ( idx ) => this.handleClick( idx ) }/>
				</div>
				<Reset onClick={ ( ) => this.handleReset( winner ) }/>
				<div className="game-info">
					<ol> { moves } </ol>
				</div>
			</div>
		)
	}
	
}


export default Game


