import "@/app/css/signup.css";
import Link from "next/link";
const Signup = () => {
    return (
      <>
      <div
        style={{ height: "100%" }}
        className="  bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"
      >
        <div className="container mt-10">
          <div class="login-container bg-slate-50">
            <h1 className="login-title text-2xl text-blue-800">Signup</h1>
            <form action="#" method="post" class="login-form">
            <div className="form-group my-10">
                
                <input
                  type="text"
                  id="text"
                  name="username"
                  class="form-input"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="form-group my-10">
                
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-input"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group my-10">
                
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-input"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                type="submit"
                class="text-white w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-5"
              >
                Login
              </button>
              <div className="my-5">
                
                Already have an account? <Link href={"/login"} className="text-blue-500 hover:underline"> login</Link></div>
            </form>
          </div>
        </div>
      </div>
      </>
    );
}
export default Signup;
