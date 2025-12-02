
import { Link } from 'react-router-dom';

const LoginDetails = () => {
  return (
    <div className="flex justify-between  items-center wrapper my-28">
      <div>
        <img src="/images/beatsnoop.svg" alt="beatsnoop" />
      </div>
      <div className="w-[371px] space-y-10">
        <h4 className="text-3xl font-medium">Create an account</h4>
        <p className="text-base font-normal">Enter your details below</p>
        <form className="flex flex-col space-y-8">
          <input
            type="text"
            placeholder="Name"
            className="border-b-2 border-gray-300"
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="border-b-2 border-gray-300"
          />
          <input
            type="text"
            placeholder="Password"
            className="border-b-2 border-gray-300"
          />

          <button className="text-white bg-primary rounded-md py-3 px-7">
            create Account
          </button>

          <button className=" w-[371px] gap-3 border border-gray-100 flex items-center rounded-md py-3 px-7">
            <img src="/images/Icon-Google.svg" alt="googleIcon" />
            <span className="text-base font-normal"> Sign up with Google</span>
          </button>

          <p>
            Already have an acount?{" "}
            <Link to="/login" className="underline text-sm font-normal">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginDetails
