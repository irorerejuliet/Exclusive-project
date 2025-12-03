import  { useForm } from "react-hook-form";
import CustomInput from "../CustomInput";
import { loginSchema } from "../../schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

type LoginFormData = z.infer<typeof loginSchema>;

const LoginDetails = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const onSubmit = (data: LoginFormData) => {
    console.log("Form Data:", data);
    
  }

  return (
    <div className="flex justify-between  items-center wrapper my-28">
      <div>
        <img src="/images/beatsnoop.svg" alt="beatsnoop" />
      </div>
      <div className="w-[371px] space-y-10">
        <h4 className="text-3xl font-medium">Log in to Exclusive</h4>
        <p className="text-base font-normal">Enter your details below</p>
        <form className="flex flex-col space-y-8" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <CustomInput
            type="text"
            placeholder="Email or Phone Number"
            register={register("email")}
            error={errors.email}
          />
          {/* Password */}
          <CustomInput
            type="text"
            placeholder="Password"
           register={register("password")}
           error={errors.password}
          />
          <div className="flex justify-between items-center">
            <button className="text-white bg-primary rounded-md py-2 px-4">
              Log in
            </button>

            <p className="text-base font-normal text-primary">Forget password</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginDetails
