import Link from "next/link";

const Home = () => {
  return (
    <section className="flex justify-center items-center min-h-[80dvh]">
      <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <Link href="/homepage" className="btn btn-neutral mt-4 sBg pColor">
          Login
        </Link>
      </fieldset>
    </section>
  );
};

export default Home;
