import React from 'react';

const Card = (props) => {

	return (

			<div className ='tc bg-light-blue dib br3 ma2 pa3 grow bw2 shadow-2'>
				<img alt="robots" src={`https://robohash.org/${props.id}?100x100`} />
				
				<div>
					<h2>{props.name}</h2>
					<p>{props.username}</p>
					<p>{props.email}</p>
				</div>

			</div>


		);

}

export default Card;