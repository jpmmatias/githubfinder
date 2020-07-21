import React, {Fragment} from 'react';
import spinner from '../../assets/spinner.gif';

const Spinner = () => {
	return (
		<Fragment>
			<img
				src={spinner}
				alt='Carregando...'
				style={{width: '200px', margin: 'auto', display: 'block'}}
				srcSet={spinner}
			/>
		</Fragment>
	);
};

export default Spinner;
