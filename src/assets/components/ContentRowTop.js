import React from 'react'
import ContentRowMovies from './ContentRowMovies'
import GenresDb from './GenresDb'
import LastMoviesDb from './LastMoviesDb'

function ContentRowTop() {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				<ContentRowMovies />

				{/* <!-- Content Row Last Movie in Data Base --> */}
				<div className="row">

					<LastMoviesDb />

					<GenresDb/>

				</div>
			</div>
		</React.Fragment>
	)
}
export default ContentRowTop
