'use client'

import { useState, useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import CountUp from 'react-countup';

export default function Progress() {
  const [students, setStudents] = useState(0);
  const [rating, setRating] = useState(0);
  const [courses, setCourses] = useState(0);
  const [instructors, setInstructors] = useState(0);
  const [startCount, setStartCount] = useState(false);

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0) {
        setStartCount(true);
        setStudents(1000)
        setRating(4.5)
        setCourses(50)
        setInstructors(20);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={sectionRef} className="w-full mx-0 px-4 py-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white grid place-items-center">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Loved and growing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-slate-800 relative">
            <div className="absolute inset-0 mask-gradient bg-gradient-to-r from-blue-500 to-blue-700 opacity-10"></div>
            <h3 className="text-2xl font-bold relative z-10">
              <CountUp start={0} end={students} duration={2} startOnMount={startCount} />+
            </h3>
            <p className="text-lg relative z-10">Happy Students</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-slate-800 relative">
            <div className="absolute inset-0 mask-gradient bg-gradient-to-r from-green-500 to-green-700 opacity-10"></div>
            <h3 className="text-2xl font-bold relative z-10">
              <CountUp start={0} end={rating} duration={2} decimals={1} startOnMount={startCount} />
            </h3>
            <p className="text-lg relative z-10">Average Rating</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-slate-800 relative">
            <div className="absolute inset-0 mask-gradient bg-gradient-to-r from-purple-500 to-purple-700 opacity-10"></div>
            <h3 className="text-2xl font-bold relative z-10">
              <CountUp start={0} end={courses} duration={2} startOnMount={startCount} />+
            </h3>
            <p className="text-lg relative z-10">Courses</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-slate-800 relative">
            <div className="absolute inset-0 mask-gradient bg-gradient-to-r from-red-500 to-red-700 opacity-10"></div>
            <h3 className="text-2xl font-bold relative z-10">
              <CountUp start={0} end={instructors} duration={2} startOnMount={startCount} />+
            </h3>
            <p className="text-lg relative z-10">Instructors</p>
          </div>
        </div>
      </div>
    </div>
  );
}
