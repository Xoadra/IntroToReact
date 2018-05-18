



import React, { Component } from 'react'



class Square extends Component {
	
	render( ) {
		return (
			// Use the function passed by Board to modify the square's value
			<button className="square" onClick={ ( ) => this.props.onClick( ) }>
				{ this.props.value }
			</button>
		)
	}
	
}


export default Square


