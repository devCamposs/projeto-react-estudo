import React from 'react'
import ContentRowMovies from './ContentRowMovies'
import GenresDb from './GenresDb'
import LastMoviesDb from './LastMoviesDb'
import Chart from './Chart'

/* Criação de obetos para envio do contentRowMovies */

/* Movies In DB */

let moviesDB = {
	title: 'Movies in Data Base',
	borderColor: 'border-left-primary',
	qtd: 21,
	icon: 'fa-film',
	textColor: 'primary'
}

let totalAwards = {
	title: 'Total Awards',
	borderColor: 'border-left-sucess',
	qtd: 79,
	icon: 'fa-award',
	textColor: 'sucess'
}

let actorsQuantity = {
	title: 'Actor Quantity',
	borderColor: 'border-left-warning',
	qtd: 49,
	icon: 'fa-user',
	textColor: 'warning'
}

let mvProps = [moviesDB, totalAwards, actorsQuantity]

function ContentRowTop() {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				<div className="row">
				{
					mvProps.map((mv, i)=>
						<ContentRowMovies dado={mv} key={i}/>
					)
				}
				</div>

				{/* <!-- Content Row Last Movie in Data Base --> */}
				<div className="row">

					<LastMoviesDb />

					<GenresDb/>

				</div>
				<Chart />
			</div>
		</React.Fragment>
	)
}
export default ContentRowTop
