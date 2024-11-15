import Link from "next/link"

export default function CreateEvent() {
  return (
    <section className="py-10 px-20 flex justify-center items-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-2">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Create Event
          </h5>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="event title"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="event description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            ></textarea>
            {/* <input
              type="text"
              name="description"
              id="description"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            /> */}
          </div>
          <div>
            <label
              htmlFor="eventPoster"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Event Poster
            </label>
            <input
              type="file"
              name="eventPoster"
              id="eventPoster"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="abc ltd."
              required
            />
          </div>
          <div>
            <label
              htmlFor="eventIntroVideo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Event Intro
            </label>
            <input
              type="file"
              name="eventIntroVideo"
              id="eventIntroVideo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex justify-between items-center gap-1">
            <div>
              <label
                htmlFor="eventIntroVideo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Event Date
              </label>
              <input
                type="date"
                name="eventIntroVideo"
                id="eventIntroVideo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="eventIntroVideo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Event Time
              </label>
              <input
                type="time"
                name="eventIntroVideo"
                id="eventIntroVideo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="eventDestination"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Event Destination
            </label>
            <input
              type="text"
              name="eventDestination"
              id="eventDestination"
              placeholder="events destination"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-zinc-900 hover:bg-slate-100 hover:border hover:text-zinc-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign Up
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already signed up?{" "}
            <Link
              href="/signin"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}
