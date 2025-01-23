'use client'
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';
import { div } from 'motion/react-client';

const musicSchoolContent = [
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <img
                src="https://i.pinimg.com/236x/b4/de/90/b4de9016559818a7f7267cbc40dfc023.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <img
                src="https://i.pinimg.com/236x/4f/c3/04/4fc30447dee9c052d69b390a208aec1a.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <img
                src="https://i.pinimg.com/236x/4f/c3/04/4fc30447dee9c052d69b390a208aec1a.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Live Feedback & Engagement',
      description:
        'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <img
                src="https://i.pinimg.com/236x/09/ec/32/09ec3250f9c401d035f27dd856434fa3.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        'Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <img
                src="https://i.pinimg.com/236x/8f/12/0c/8f120cffea198788e158a80bbe97effd.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Limitless Learning Opportunities',
      description:
        'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <img
                src="https://i.pinimg.com/736x/55/4b/57/554b572b7b1a9b88f0dcbc4c48a8b989.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
  ];

function WhyChooseUs() {
  return (
    <div className='min-h-screen scrollbar-hidden'><StickyScroll content={musicSchoolContent} /></div>
  )
}

export default WhyChooseUs