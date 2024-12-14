import Classes from "@/components/sections/home/Classes";
import CalToAction from "@/components/sections/home/CTA";
import Features from "@/components/sections/home/Features";
import Hero from "@/components/sections/home/Hero";
import Progress from "@/components/sections/home/Progress";
import Testimonals from "@/components/sections/home/Testimonals";

export default function Home() {
  return (
    <>
      <Hero />
      <Classes />
      <Features />
      <Testimonals />
      <Progress />
      <CalToAction />
    </>
  )
}
