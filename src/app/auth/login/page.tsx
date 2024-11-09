import { Input } from "@/components/ui/input";
import Link from "next/link";

const Login = async () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const name = formData.get("login") as string;
    console.log(name);
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-[70%]">
        <div className="my-4 text-center text-5xl">Welcome Back !</div>
        <form action={handleSubmit} className="">
          <div className="my-3 space-y-1">
            <label htmlFor="email" className="ml-1">
              Email
            </label>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              className="focus:ring-0"
            />
          </div>
          <div className="my-3 space-y-1">
            <label htmlFor="password" className="ml-1">
              Password
            </label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              className="bg-re-500"
            />
          </div>

          <div>
            <input type="checkbox" name="login" id="login" />
            <label htmlFor="login" className="ml-1">
              Stay logged in
            </label>
          </div>
          <button className="mt-5 w-full rounded-md bg-black py-2 text-white">
            Login
          </button>
          <p className="ml-1 mt-3 text-center">
            <span className="cursor-pointer text-blue-500 underline">
              <Link href={"/"}>Forgot Password.</Link>
            </span>{" "}
            Don't have an account?{" "}
            <span className="cursor-pointer text-blue-500 underline">
              Signup Now.
            </span>
          </p>
        </form>
        <div className="my-4 grid grid-cols-3 gap-5">
          <div className="flex items-center justify-center rounded-md border px-4 py-2 text-center">
            <img src="/google.jfif" alt="" className="h-5 w-5" />
          </div>
          <div className="flex items-center justify-center rounded-md border px-4 py-2 text-center">
            <img src="/facebook.png" alt="" className="w- h-5" />
          </div>
          <div className="flex items-center justify-center rounded-md border px-4 py-2 text-center">
            <img src="/github.png" alt="" className="h- w-7" />
          </div>
        </div>
        <p className="ml-1 mt-3 text-center">
          This site is protected by reCAPTCHA and the{" "}
          <span className="cursor-pointer text-blue-500 underline">
            Google Privacy Policy
          </span>{" "}
          and{" "}
          <span className="cursor-pointer text-blue-500 underline">Terms</span>{" "}
          of{" "}
          <span className="cursor-pointer text-blue-500 underline">
            Services
          </span>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default Login;
