



import React, { Component } from 'react'
import Square from './Square'



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
		// Insert current player's mark at this square's index
		squares[ insert ] = this.state.xIsNext ? 'X' : 'O'
		// Make changes to state's array using updated copy
		// Go to next player's turn since last player just went
		this.setState( { squares: squares, xIsNext: !this.state.xIsNext } )
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
		// Flip the status text to whichever player's turn it is
		const status = 'Next player: ' + ( this.state.xIsNext ? 'X' : 'O' )
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
			</div>
		)
	}
	
}


export default Board



