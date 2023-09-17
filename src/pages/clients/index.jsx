import { Link } from "react-router-dom";
import TableWithSearch from "../../components/TableWithSearch";
import Header from "../../components/layout/Header";
import Layout from "../../components/layout/Layout";

const clients = [
	...Array(10)
		.fill(0)
		.map((_, i) => ({
			id: i + 1,
			name: "John Doe",
			email: "john@mail.com",
		})),
];

const columns = [
	{ name: "Name", accessor: "name" },
	{ name: "Email", accessor: "email" },
];

function ClientsList() {
	return (
		<Layout>
			<Header
				preTitle="overview"
				title="Clients"
				action={() => (
					<Link to="/create" className="btn btn-primary lift">
						New Client
					</Link>
				)}
			/>

			<TableWithSearch
				data={clients}
				columns={columns}
				editURL={(row) => `/${row.id}/edit`}
			/>
		</Layout>
	);
}

export default ClientsList;
