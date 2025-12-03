import React from 'react'
import { Link } from 'react-router-dom';
import  { useForm } from "react-hook-form";
import CustomInput from "../CustomInput";
import { loginSchema, signupSchema } from "../../schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

type LoginFormData = z.infer<typeof loginSchema>;



const SignupDetails = () => {

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(signupSchema),
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
        <h4 className="text-3xl font-medium">Create an account</h4>
        <p className="text-base font-normal">Enter your details below</p>
        <form
          className="flex flex-col space-y-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomInput type="text" placeholder="Name" />
          <CustomInput
            type="text"
            placeholder="Email or Phone Number"
            register={register("email")}
            error={errors.email}
          />
          <CustomInput
            type="text"
            placeholder="Password"
            register={register("password")}
            error={errors.password}
          />

          <button className="text-white bg-primary rounded-md py-3 px-7 hover:bg-blue-500">
            create Account
          </button>

          <button className=" w-[371px] gap-3 border border-gray-100 flex items-center rounded-md py-3 px-7">
            <img src="/images/Icon-Google.svg" alt="googleIcon" />
            <span className="text-base font-normal"> Sign up with Google</span>
          </button>

          <p>
            Already have an acount?
            <Link
              to="/login"
              className="underline text-sm font-normal inline-block hover:bg-blue-900 hover:text-white "
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupDetails
