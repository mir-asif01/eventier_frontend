export default function Navbar() {
  return (
    <section className="w-full flex items-center justify-center mt-5">
      <div className="bg-zinc-900 text-slate-300 text-md w-2/3 flex justify-between items-center px-6 py-4 rounded-full fixed top-3">
        <div>
          <h1>eventier</h1>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-10">
            <li className="">create event</li>
            <li className="">events</li>
          </ul>
        </div>
        <div>
          <button className="bg-slate-100 text-zinc-900 px-3 py-2 rounded-full">
            sign out
          </button>
        </div>
      </div>
    </section>
  )
}
