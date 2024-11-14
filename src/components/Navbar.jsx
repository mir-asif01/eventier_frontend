import Link from "next/link"

export default function Navbar() {
  return (
    <section className="w-full flex items-center justify-center mt-5">
      <div className="bg-zinc-900 text-slate-100 text-md w-2/3 flex justify-between items-center px-6 py-4 rounded-full fixed top-3">
        <div>
          <h1 className="font-semibold">
            <Link href={"/"}>eventier</Link>
          </h1>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-10">
            <li className="font-semibold">create event</li>
            <li className="font-semibold">events</li>
          </ul>
        </div>
        <div className="flex gap-3">
          {/* <button className="bg-slate-100 text-zinc-900 px-3 py-2 rounded-full">
            sign out
          </button> */}
          <Link className="font-semibold" href={"/signup"}>
            Signup
          </Link>
          <Link className="font-semibold" href={"/signin"}>
            Signin
          </Link>
        </div>
      </div>
    </section>
  )
}
