



import React, { Component } from 'react'
import Square from './Square'



class Board extends Component {
	
	constructor( props ) {
		super( props )
		this.state = { squares: Array( 9 ).fill( null ) }
	}
	
	
	handleClick( insert ) {
		const squares = this.state.squares.slice( )
		squares[ insert ] = 'X'
		this.setState( { squares: squares } )
	}
	
	renderSquare( value ) {
		return (
			<Square
				value={ this.state.squares[ value ] }
				onClick={ ( ) => this.handleClick( value ) }
			/>
		)
	}
	
	render( ) {
		const status = 'Next player: X'
		return (
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



