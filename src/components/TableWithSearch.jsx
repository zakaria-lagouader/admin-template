import { Link } from "react-router-dom";

function TableWithSearch({ data, columns, editURL }) {
	return (
		<div className="card">
			<div className="card-header">
				{/* Search */}
				<form>
					<div className="input-group input-group-flush">
						<div className="input-group-prepend">
							<span className="input-group-text">
								<i className="fe fe-search" />
							</span>
						</div>
						<input
							className="form-control search"
							type="search"
							placeholder="Search"
						/>
					</div>
				</form>
			</div>
			<div className="table-responsive">
				<table className="table table-sm table-nowrap card-table">
					<thead>
						<tr>
							{columns.map(({ name }) => (
								<th key={name}>
									<span className="text-muted">{name} </span>
								</th>
							))}
							<th></th>
						</tr>
					</thead>
					<tbody className="list">
						{data.map((row, i) => (
							<tr key={`row-${i}`}>
								{columns.map(({ accessor }) => (
									<td key={`${accessor}-${i}`}>{row[accessor]}</td>
								))}
								<td>
									{/* Dropdown */}
									<Link to={editURL} className="text-warning">
										<span className="fe fe-edit-2" />
										Edit
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default TableWithSearch;
