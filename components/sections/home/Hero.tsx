'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Users, Globe } from "lucide-react"
import CountUp from 'react-countup'

export default function Hero() {
  const [count, setCount] = useState({ tutors: 0, cities: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCount({
        tutors: 75,
        cities: 120
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pt-16 pb-16 md:pb-0 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#bbdef5,#fcccff_120%)] min-h-screen flex items-center justify-center">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center m-8 mt-12 md:mt-0 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Live 1-to-1 Online
            <span className="text-blue-600"> Music Classes</span>
          </h1>
          <p className="text-xl text-gray-600">
            Taught by professional tutors for all ages. Instructions in English & all major Indian languages.
          </p>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <Users className="text-blue-600" />
              <CountUp end={count.tutors} duration={5} separator="," className='text-2xl font-semibold text-slate-800' />
              <span className="text-gray-600">Tutors</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="text-blue-600" />
              <CountUp end={count.cities} duration={5} separator="," className='text-2xl font-semibold text-slate-800' />
              <span className="text-gray-600">Cities</span>
            </div>
          </div>
          <div className="space-x-4 flex flex-row">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-offset-2 transition duration-200 focus:ring-blue-600/60">
              Book a FREE Demo
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 focus:ring-4 focus:ring-offset-2 transition duration-200 focus:ring-green-600/60">
              WhatsApp Us
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-30"></div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="relative"
          >
            <Image
              src="/img/hero.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
