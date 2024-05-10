import { useState } from "react";
import { Link } from "react-router-dom";
import RadioButton from "../components/RadioButton";
import InputField from "../components/InputField";
import { SIGN_UP } from "../graphql/mutations/user.mutation";
import toast from "react-hot-toast";
import { useMutation } from "@apollo/client";

const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    username: "",
    password: "",
    gender: "",
  });

  const [signup, { loading, error }] = useMutation(SIGN_UP, {
    refetchQueries: ["getAuthenticatedUser"],
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "radio") {
      setSignUpData((prevData) => ({
        ...prevData,
        gender: value,
      }));
    } else {
      setSignUpData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup({
        variables: {
          input: signUpData,
        },
      });
      toast.success("User Logged in Successfully");
    } catch (error) {
      console.log("Error: ", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex rounded-lg overflow-hidden z-50  ">
        <div
          className="w-full min-w-80 sm:min-w-96 flex items-center justify-center
				h-full  bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-0 bg-opacity-10 border border-gray-100
				"
        >
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-6 text-white text-center">
              Sign Up
            </h1>
            <h1 className="text-sm font-semibold mb-6 text-white text-center">
              Join to keep track of your expenses
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <InputField
                label="Full Name"
                id="name"
                name="name"
                value={signUpData.name}
                onChange={handleChange}
              />
              <InputField
                label="Username"
                id="username"
                name="username"
                value={signUpData.username}
                onChange={handleChange}
              />

              <InputField
                label="Password"
                id="password"
                name="password"
                type="password"
                value={signUpData.password}
                onChange={handleChange}
              />
              <div className="flex gap-10">
                <RadioButton
                  id="male"
                  label="Male"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={signUpData.gender === "male"}
                />
                <RadioButton
                  id="female"
                  label="Female"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={signUpData.gender === "female"}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-slate-400 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-white  focus:ring-2 focus:ring-offset-2 focus:ring-slate-50 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Sign Up"}
                </button>
              </div>
            </form>
            <div className="mt-4 text-sm text-white text-center">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-white hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
