"use client"

import React from "react"
import Link from "next/link"

const ClickableDonation = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-center text-2xl font-bold">Saweria</h3>
          <p className="text-center">Donasi melalui Saweria</p>
          <div className="flex flex-row space-x-3">
            <a
              href="https://saweria.co/hammercode"
              className="text-center underline"
              target="_blank"
              rel="noreferrer"
            >
              Klik di Sini
            </a>
          </div>
        </div>
      </div>
      {/* Penggiat Teknologi Palu Berkarya, Norek 7203000768 */}
      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-center text-2xl font-bold">
            Transfer Bank Syariah Indonesia
          </h3>
          <p
            className="cursor-pointer text-center underline"
            onClick={async () => {
              await navigator.clipboard.writeText("7203000768")
              alert("Nomor rekening berhasil disalin")
            }}
          >
            7203000768
          </p>
        </div>
      </div>
    </>
  )
}

export default ClickableDonation
