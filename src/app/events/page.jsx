"use client"

import { QrCode, Calendar, MapPin, Clock } from "lucide-react"
import { Link } from "lucide-react"
import { usePDF } from "react-to-pdf"

export default function Events() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" })

  return (
    <section className="py-10 px-20">
      <h1 className="text-3xl text-center mb-20">all events created by you</h1>
      <div className="grid grid-cols-4 items-center justify-center gap-3">
        <div className="border border-gray-300 bg-white hover:bg-neutral-50 cursor-pointer rounded-lg hover:shadow px-4 py-2 text-center">
          <h1 className="text-xl font-semibold border-b mb-2">Event title</h1>
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eos
            consequatur beatae dolores voluptatum corporis magni, culpa sit
            fugit nostrum.
          </p>
        </div>
        <div className="border border-gray-300 bg-white hover:bg-neutral-50 cursor-pointer rounded-lg hover:shadow px-4 py-2 text-center">
          <h1 className="text-xl font-semibold border-b mb-2">Event title</h1>
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eos
            consequatur beatae dolores voluptatum corporis magni, culpa sit
            fugit nostrum.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div
          ref={targetRef}
          className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md w-full"
        >
          <div className="relative">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-400 to-zinc-500 opacity-75"></div>
            <div className="absolute inset-0 bg-pattern opacity-20"></div>

            {/* Ticket content */}
            <div className="relative p-6">
              <h2 className="text-3xl font-bold text-white mb-2">
                Summer Music Festival
              </h2>
              <p className="text-white text-opacity-90 mb-4">
                Experience the beat of the season
              </p>

              <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 mb-4">
                <div className="flex items-center text-white mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>July 15, 2024</span>
                </div>
                <div className="flex items-center text-white mb-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Gates open at 4:00 PM</span>
                </div>
                <div className="flex items-center text-white">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Sunshine Park, California</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white text-opacity-90">Ticket No.</p>
                  <p className="text-white font-semibold">A12345678</p>
                </div>
                <div>
                  <p className="text-sm text-white">Admit One</p>
                  <p className="font-semibold text-white">General Admission</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket stub */}
          <div className="border-t border-dashed border-gray-300 p-4 bg-gray-50">
            <div className="flex justify-between items-center">
              <div className="text-right">
                <p className="text-sm text-gray-800">Price</p>
                <p className="font-semibold text-zinc-900">$85.00</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            className="bg-zinc-900 text-white px-3 py-1 rounded-full"
            onClick={() => toPDF()}
          >
            Download
          </button>
        </div>
      </div>
    </section>
  )
}
