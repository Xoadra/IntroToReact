



export default function calculateWinner( squares ) {
	// Declaration of all possible winning conditions
	const lines = [
		// Horizontal winning set rows to investigate
		[ 0, 1, 2 ],
		[ 3, 4, 5 ],
		[ 6, 7, 8 ],
		// Vertical winning set columns for validation
		[ 0, 3, 6 ],
		[ 1, 4, 7 ],
		[ 2, 5, 8 ],
		// Diagonal winning set lines being searched
		[ 0, 4, 8 ],
		[ 2, 4, 6 ]
	]
	// Look at every winning condition for a match
	for ( let idx = 0; idx < lines.length; idx++ ) {
		// Save this winning condition for comparing
		const [ a, b, c ] = lines[ idx ]
		// Check if squares' indices are a winning set
		if ( squares[ a ] && squares[ a ] === squares[ b ] && squares[ a ] === squares[ c ] ) {
			return squares[ a ]
		}
	}
	// No player won yet, so go back to the game
	return null
}


