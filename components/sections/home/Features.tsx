'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useScroll } from "framer-motion";
import Image from "next/image"
import { useState, useRef, useEffect } from "react";

const features = [
  {
    title: "Customised Learning",
    description: "Learn to play your favourite songs, be it classical or film, the choice is yours.",
    image: "/img/features/customized.png"
  },
  {
    title: "100% Verified Tutors",
    description: "Learn from tutors who love teaching and are thoroughly vetted.",
    image: "/img/features/verified.png"
  },
  {
    title: "Convenience",
    description: "No travel, go at your own pace. All at the comfort of your home.",
    image: "/img/features/anywhere.png"
  }
]

export default function Features() {
  const [retrigger, setRetrigger] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0) {
        setRetrigger(1);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={sectionRef} className="container mx-auto px-4 my-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Why we are the best</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" key={retrigger}>
        {features.map((feature: { title: string; description: string; image: string }, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="w-40 h-40 relative mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={160}
                    height={160}
                  />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
