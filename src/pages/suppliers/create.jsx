import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/form/Input";
import Header from "../../components/layout/Header";
import Layout from "../../components/layout/Layout";
import { useMutation } from "react-query";
import { createSupplier } from "./data";

function SuppliersCreate() {
	const navigate = useNavigate();
	const { mutate } = useMutation(createSupplier, {
		onSuccess: () => {
			navigate("/suppliers");
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		mutate(data);
	};

	return (
		<Layout mid>
			<Header preTitle="new supplier" title="Create a new supplier" />

			<form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					<div className="col-12">
						<Input
							label="Name"
							name="name"
							{...register("name", {
								required: "Name is required",
							})}
							error={errors.name}
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

				<hr className="mt-5 mb-5" />
				<button type="submit" className="btn btn-block btn-primary">
					Create supplier
				</button>
				<Link to="/suppliers" className="btn btn-block btn-link text-muted">
					Cancel this supplier
				</Link>
			</form>
		</Layout>
	);
}

export default SuppliersCreate;
