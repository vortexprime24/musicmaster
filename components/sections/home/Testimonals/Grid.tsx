'use client';
const reviews = [
  {
    avatar: '/img/testimonals/1.png',
    author: 'Emily Harmon',
    headline: 'Piano Student',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at scelerisque neque.',
  },
  {
    avatar: '/img/testimonals/2.png',
    author: 'David Melody',
    headline: 'Violin Student',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer vulputate magna in ex tincidunt, a commodo sapien tempor.',
  },
  {
    avatar: '/img/testimonals/3.png',
    author: 'Sophia Tune',
    headline: 'Vocal Student',
    message: 'Lorem ipsum dolor sit amet.',
  },
  {
    avatar: '/img/testimonals/4.png',
    author: 'James Rhythm',
    headline: 'Studnet',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada, leo a tempus scelerisque, enim dui volutpat nunc, nec pharetra lectus quam a lorem. Aenean ac quam at libero viverra viverra.',
  },
  {
    avatar: '/img/testimonals/1.png',
    author: 'Olivia Harmon',
    headline: 'Guitar Student',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lorem vitae velit venenatis fermentum nec a nisl.',
  },
  {
    avatar: '/img/testimonals/4.png',
    author: 'Lucas Beat',
    headline: 'Bass Guitar Student',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    avatar: '/img/testimonals/3.png',
    author: 'Sophia Martinez',
    headline: 'Parent',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie lacus vel ante sodales, et lacinia risus lacinia. Aliquam sit amet dui vitae erat luctus sollicitudin.',
  },
  {
    avatar: '/img/testimonals/2.png',
    author: 'James Anderson',
    headline: 'Flute Student',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac est eu nisi lacinia cursus a ut libero. Vivamus id metus eget ligula vehicula consequat.',
  },
];


const firstCol = reviews.slice(0, 3);
const secCol = reviews.slice(3, 6);
const thirdCol = reviews.slice(6, 9);

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Fragment } from 'react';

const TestimonalsCol = (props: {
  className?: string;
  testimonals: typeof reviews;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        className="flex flex-col gap-6 pb-6"
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {props.testimonals.map(
              ({ author, avatar, message, headline }, index: number) => (
                <div
                  key={index}
                  className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] w-full"
                >
                  <div>{message}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      src={avatar}
                      alt={author}
                      className="w-10 h-10 rounded-full"
                      width={40}
                      height={40}
                    />
                    <div className="flex justify-center flex-col">
                      <div className="font-medium tracking-tight leading-5 text-gray-800">
                        {author}
                      </div>
                      <span
                        className="leading-3 text-blue-700 tracking-tight text-xs"
                      >
                        {headline}
                      </span>
                    </div>
                  </div>
                </div>
              ),
            )}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default function ReviewsList() {
  return (
    <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
      <TestimonalsCol testimonals={firstCol} duration={15} />
      <TestimonalsCol
        testimonals={secCol}
        className="hidden md:block"
        duration={19}
      />
      <TestimonalsCol
        testimonals={thirdCol}
        className="hidden lg:block"
        duration={17}
      />
    </div>
  );
}
