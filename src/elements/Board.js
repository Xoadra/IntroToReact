



import React, { Component } from 'react'
import Square from './Square'



class Board extends Component {
	
	renderSquare( value ) {
		return (
			<Square
				// Set square's value via the passed down index
				value={ this.props.squares[ value ] }
				// Pass the square a function for updating values
				onClick={ ( ) => this.props.onClick( value ) }
			/>
		)
	}
	
	render( ) {
		return (
			// Assign a numerical index values to every square
			<div>
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


