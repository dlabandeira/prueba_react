 import React from 'react';
 import DataFicha from '../components/DataFicha';

 const DataCasting = props => {
	//console.log(props);
	return(

		<div className="dataCasting col-12">
			
			<h1 className='title col-12'>Reparto</h1>

			<div className="row">

				{
					props.dataTeam.crew ? 
						props.dataTeam.cast.map((item) =>{
							return <DataFicha key={Math.random()} {...item} />
						})
					:
						<div></div>							
				}

			</div>

			<h1 className='title col-12'>Equipo</h1>

			<div className="row">

			{
				props.dataTeam.crew ? 
					props.dataTeam.crew.map((item) =>{
						return <DataFicha key={Math.random()} {...item} />
					})
				:
					<div></div>							
			}
			</div>

		</div>
	)
	
}

export default DataCasting;
