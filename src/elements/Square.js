



import React from 'react'



// Implement Square as a functional component as it only renders jsx
export default function Square( props ) {
	return (
		// Use the function passed by Board to modify the square's value
		<button className="square" onClick={ props.onClick }>
			{ props.value }
		</button>
	)
}


