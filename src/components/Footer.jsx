import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-neutral-100 border-t">
      <h1 className="font-semibold text-center mb-10 text-3xl">eventier</h1>
      <div className="container flex items-center justify-around gap-2 text-xl px-4">
        <nav className="flex items-center gap-2 text-lg md:gap-4">
          <Link
            href="#"
            className="text-gray-900 dark:text-gray-50"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-gray-900 dark:text-gray-50"
            prefetch={false}
          >
            Pricing
          </Link>

          <Link
            href="#"
            className="text-gray-900 dark:text-gray-50"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-gray-900 dark:text-gray-50"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="grid gap-1 text-xl text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Connect with us on social media
          </p>
          <div className="inline-flex items-center justify-center gap-2">
            <TwitterIcon className="h-10 w-10" />
            <FacebookIcon className="h-10 w-10" />
            <LinkedinIcon className="h-10 w-10" />
          </div>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
