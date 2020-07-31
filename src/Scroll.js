import React from 'react';

const Scroll = (props) => {
	return(
			<div style={{ overflowY:'scroll' , borderTop: '3px solid #09093d' , height:'600px'}}>
				{props.children};

			</div>
		);
}

export default Scroll;