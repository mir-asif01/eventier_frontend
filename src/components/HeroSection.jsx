export default function HeroSection() {
  return (
    <section className="h-96 flex justify-center items-center ">
      <div className="mt-32 text-center">
        <h1 className="text-[70px] text-zinc-900 font-semibold">
          manage events with
        </h1>
        <h1 className="text-[71px] -mt-10 text-zinc-900 font-semibold">
          eventier
        </h1>
        <p className="text-4xl mt-10">
          with few clicks create event links and engage participants
        </p>
        <button className="bg-zinc-950 text-white px-8 py-4 rounded-full mt-10 text-xl hover:bg-white hover:text-zinc-950 border border-zinc-950">
          Start an Event
        </button>
      </div>
    </section>
  )
}
