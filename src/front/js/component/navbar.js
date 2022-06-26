import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "./Logout";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<button className="btn btn-primary">Home</button>
				</Link>
				<div className="ml-auto">
					<Link to="/register">
						<button className="btn btn-primary">Register</button>
					</Link>
				</div>
				<div className="ml-auto">
					{sessionStorage.getItem("jwt-token") != null ? <Link to="/private">
						<button className="btn btn-primary">Profile</button>
					</Link>:<Link to="/">
						<button className="btn btn-primary">Profile</button>
					</Link>}
				</div>
				<div className="ml-auto">
				
					{sessionStorage.getItem("jwt-token") != null ? <Logout />:<div className="ml-auto">
							<Link to="/login">
								<button className="btn btn-primary">Login</button>
							</Link>
						</div>}
			
				</div>
			</div>
		</nav>
	);
};
