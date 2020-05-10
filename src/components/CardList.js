import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<div>
			{ 
			// These first curly braces are React-specific syntax.
			// They are necessary to interpret the text as javascript and not as a string.
				robots.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
						/>
					);
				})
			}
		</div>
		);
}

export default CardList;