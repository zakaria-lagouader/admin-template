import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientsList from "./pages/clients";
import ClientsCreate from "./pages/clients/create";
import ClientsEdit from "./pages/clients/edit";
import ProductsList from "./pages/products";
import ProductsCreate from "./pages/products/create";
import ProductsEdit from "./pages/products/edit";
import Home from "./pages/home";
import SuppliersList from "./pages/suppliers";
import SuppliersCreate from "./pages/suppliers/create";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/clients" element={<ClientsList />} />
				<Route path="/clients/create" element={<ClientsCreate />} />
				<Route path="/clients/:id/edit" element={<ClientsEdit />} />
				<Route path="/products" element={<ProductsList />} />
				<Route path="/products/create" element={<ProductsCreate />} />
				<Route path="/products/:id/edit" element={<ProductsEdit />} />
				<Route path="/suppliers" element={<SuppliersList />} />
				<Route path="/suppliers/create" element={<SuppliersCreate />} />
				<Route path="/suppliers/:id/edit" element={<ProductsEdit />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
