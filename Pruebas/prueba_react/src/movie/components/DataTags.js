 import React from 'react';

 const DataTags = props => {
	//console.log(props);

	return(
		<div className="col-12 dataTags">
			<div className="row">
				<div className="col-4">
					<strong>Título Original</strong>
					<p>{props.data.original_title}</p>
				</div>
				<div className="col-4">
					<strong>Referencia Imbd</strong>
					<p>{props.data.imdb_id}</p>
				</div>
				<div className="col-4">
					<strong>Status</strong>
					<p>{props.data.status}</p>
				</div>
				<div className="col-4">
					<strong>Fecha de estreno</strong>
					<p>{(props.data.release_date).replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1')}</p>
				</div>
				<div className="col-4">
					<strong>Lenguaje original</strong>
					{
						(props.data.original_language==='es') ?
							<p>Español</p>
						:
							<p>Inglés</p>
					}
				</div>
				<div className="col-4">
					<strong>Duración</strong>
					<p>{(props.data.runtime/60).toFixed(2)}h</p>
				</div>
				<div className="col-4">
					<strong>Presupuesto</strong>
					<p>${(props.data.budget).toLocaleString('es-ES', { style: 'decimal', decimal: '0' })}</p>
				</div>
				<div className="col-4">
					<strong>Ingresos</strong>
					<p>${(props.data.revenue).toLocaleString('es-ES', { style: 'decimal', decimal: '0' })}</p>
				</div>
				<div className="col-4">
					<strong>URL oficial</strong>
					<p><a href="{props.data.homepage}" target="_blank">{props.data.homepage}</a></p>
				</div>
				<div className="col-4">
					<strong>Géneros</strong>
					<p>
						{
							props.data.genres.map((genre)=>{
								return <a key={genre.id} id={genre.id} onClick={props.loadDatosGenre}>{genre.name}&nbsp;&nbsp;&nbsp;</a>
							})
						}
					</p>
				</div>
				<div className="col-8">
					<strong>Empresas colaboradoras</strong>
					<p>
						{
							props.data.production_companies.map((companie)=>{
								return <span key={companie.id}>{companie.name}&nbsp;&nbsp;&nbsp;</span>
							})
						}
					</p>
				</div>
			</div>
		</div>
	)

	
}

export default DataTags;