import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientsList from "./pages/clients";
import ClientsCreate from "./pages/clients/create";
import ClientsEdit from "./pages/clients/edit";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/clients" element={<ClientsList />} />
				<Route path="/clients/create" element={<ClientsCreate />} />
				<Route path="/clients/:id/edit" element={<ClientsEdit />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
