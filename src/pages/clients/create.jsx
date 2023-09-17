import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../components/form/Input";
import Textarea from "../../components/form/Textarea";
import Header from "../../components/layout/Header";
import Layout from "../../components/layout/Layout";

function ClientsCreate() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<Layout mid>
			<Header preTitle="new client" title="Create a new project" />

			<form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					<div className="col-12 col-md-6">
						<Input
							label="First name"
							name="first_name"
							{...register("first_name", {
								required: "First Name is required",
							})}
							error={errors.first_name}
						/>
					</div>
					<div className="col-12 col-md-6">
						<Input
							label="Last name"
							name="last_name"
							{...register("last_name", { required: "Last Name is required" })}
							error={errors.last_name}
						/>
					</div>
				</div>

				<Textarea label="Bio" name="bio" {...register("bio")} />

				<hr className="mt-5 mb-5" />
				<button type="submit" className="btn btn-block btn-primary">
					Create client
				</button>
				<Link to="/" className="btn btn-block btn-link text-muted">
					Cancel this client
				</Link>
			</form>
		</Layout>
	);
}

export default ClientsCreate;
