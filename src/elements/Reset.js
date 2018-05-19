



import React from 'react'



export default function Reset( props ) {
	return (
		// Apply the Board's passed on click function to this component
		<button className="reset" onClick={ props.onClick }>
			Reset
		</button>
	)
}



