import { useForm } from "react-hook-form";
import Input from "../../components/form/Input";

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="d-flex vh-100 align-items-center bg-auth border-top border-top-2 border-primary">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-5 col-xl-4 my-5">
						<h1 className="display-4 text-center mb-3">Sign in</h1>
						<p className="text-muted text-center mb-5">Login to you dashboard.</p>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Input
								label="Email Address"
								type="email"
								name="email"
								placeholder="name@address.com"
								{...register("email", {
									required: "Email is required",
								})}
								error={errors.email}
							/>
							<Input
								label="Password"
								type="password"
								placeholder="Enter your password"
								name="password"
								{...register("password", {
									required: "Password is required",
								})}
								error={errors.password}
							/>
							<button
								type="submit"
								className="btn btn-lg w-100 btn-primary mb-3"
							>
								Sign in
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
