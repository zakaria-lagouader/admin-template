import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientsList from "./pages/clients";
import ClientsCreate from "./pages/clients/create";
import ClientsEdit from "./pages/clients/edit";
import ProductsList from "./pages/products";
import ProductsCreate from "./pages/products/create";
import ProductsEdit from "./pages/products/edit";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/clients" element={<ClientsList />} />
				<Route path="/clients/create" element={<ClientsCreate />} />
				<Route path="/clients/:id/edit" element={<ClientsEdit />} />
				<Route path="/products" element={<ProductsList />} />
				<Route path="/products/create" element={<ProductsCreate />} />
				<Route path="/products/:id/edit" element={<ProductsEdit />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
