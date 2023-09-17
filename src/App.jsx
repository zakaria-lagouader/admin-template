import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientsList from "./pages/clients";
import ClientsCreate from "./pages/clients/create";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ClientsList />} />
				<Route path="/create" element={<ClientsCreate />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
