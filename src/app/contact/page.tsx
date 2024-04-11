"use client";
import React from "react";
// import { BackgroundBeams } from "./ui/background-beams";
import { BackgroundBeams } from "@/components/ui/background-beams";

function ContactPage() {
  return (
    <div className="h-[100vh] w-full select-none bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        <input
          type="text"
          placeholder="Email"
          className="rounded-lg border-4 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 text-neutral-700 placeholder:text-neutral-700
           h-11 px-2"
        />
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default ContactPage