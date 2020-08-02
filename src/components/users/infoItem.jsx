import React from 'react';

const InfoItem = ({color, icon, value, label}) => {
	return (
		<div className='item'>
			<span className={color}>{icon}</span>
			<div>
				<h3>{value}</h3>
				<p>{label}</p>
			</div>
		</div>
	);
};

export default InfoItem;
