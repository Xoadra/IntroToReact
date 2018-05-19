



import React, { Component } from 'react'
import Square from './Square'
import Reset from './Reset'
import calculateWinner from '../actions/winner'



class Board extends Component {
	
	constructor( props ) {
		// Use props here by injecting inherited class props
		super( props )
		// Build an array for square values and fill with null
		// Track if player x goes next to see which turn it is
		this.state = { squares: Array( 9 ).fill( null ), xIsNext: true }
	}
	
	
	// Handle state on square's parent component instead
	handleClick( insert ) {
		// Copy state's squares array to track every update
		const squares = this.state.squares.slice( )
		// Exit early if someone won or if the square is filled
		if ( calculateWinner( squares ) || squares[ insert ] ) { return }
		// Insert current player's mark at this square's index
		squares[ insert ] = this.state.xIsNext ? 'X' : 'O'
		// Make changes to state's array using updated copy
		// Go to next player's turn since last player just went
		this.setState( { squares: squares, xIsNext: !this.state.xIsNext } )
	}
	
	handleReset( winner ) {
		// Generate a new property to see this game's winner
		let replica = Object.assign( {  }, this.state )
		replica.winner = winner
		// Keep a record of each game like with saving turns
		const game = Object.assign( {  }, replica )
		// Objects with nested objects require deep copying
		// Just use json methods for deep copies of an object
		/* const game = JSON.parse( JSON.stringify( replica ) ) */
		console.log( game )
		// Reset the game's state which starts a new game
		this.setState( { squares: Array( 9 ).fill( null ), xIsNext: true } )
	}
	
	renderSquare( value ) {
		return (
			<Square
				// Set square's value using parent state's array
				value={ this.state.squares[ value ] }
				// Pass the square a function to update values
				onClick={ ( ) => this.handleClick( value ) }
			/>
		)
	}
	
	render( ) {
		// Verify if a player has met a winning condition yet
		const winner = calculateWinner( this.state.squares )
		// Display game status by seeing if anyone has won
		let status
		if ( winner ) { status = 'Winner: ' + winner }
		// Flip the status text to whichever player's turn it is
		else { status = 'Next player: ' + ( this.state.xIsNext ? 'X' : 'O' ) }
		return (
			// Assign parent state's array index to each square
			<div>
				<div className="status"> { status } </div>
				<div className="board-row">
					{ this.renderSquare( 0 ) }
					{ this.renderSquare( 1 ) }
					{ this.renderSquare( 2 ) }
				</div>
				<div className="board-row">
					{ this.renderSquare( 3 ) }
					{ this.renderSquare( 4 ) }
					{ this.renderSquare( 5 ) }
				</div>
				<div className="board-row">
					{ this.renderSquare( 6 ) }
					{ this.renderSquare( 7 ) }
					{ this.renderSquare( 8 ) }
				</div>
				<Reset onClick={ ( ) => this.handleReset( winner ) }/>
			</div>
		)
	}
	
}


export default Board



