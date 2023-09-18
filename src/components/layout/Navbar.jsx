import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav
			className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light"
			id="sidebar"
		>
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#sidebarCollapse"
					aria-controls="sidebarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<a className="navbar-brand" href="index-2.html">
					<img
						src="/assets/img/logo.svg"
						className="navbar-brand-img mx-auto"
						alt="..."
					/>
				</a>

				<div className="navbar-user d-md-none">
					<button className="btn btn-sm btn-primary">logout</button>
				</div>

				<div className="collapse navbar-collapse" id="sidebarCollapse">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								<i className="fe fe-users"></i> Clients
							</Link>
						</li>
					</ul>

					<div className="mt-auto"></div>

					<div className="navbar-user d-none d-md-flex" id="sidebarUser">
						<button className="btn btn-primary w-100">
							<span className="fe fe-log-out me-2"></span>
							Logout
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
