import React from 'react'
import Tv from "../Accects/tv.png"
import device from "../Accects/device-pile-in.png"
import video from "../Accects/video-devices-in.m4v"
import imageBobile from "../Accects/mobile-0819.jpg"
import img2 from "../Accects/img2.png"
import video2 from "../Accects/video-tv-in-0819.m4v"
import './Welcome.scss'
import { useState } from 'react'
import SuccessPopup from '../Common/SuccessPopup'

const accordionData = [
  {
    title: 'What is Netflix?',
    content: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.`
  },
  {
    title: 'How much does Netflix cost?',
    content: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.`
  },
  {
    title: 'Where can I watch?',
    content: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.`
  },
  {
    title: 'How do I cancel?',
    content: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.`
  },
  {
    title: 'What can I watch on Netflix?',
    content: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.`
  },
  {
    title: 'Is Netflix good for kids?',
    content: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.`
  }
]

// const { title, content } = accordionData;
console.log(accordionData)

const WecomePage = () => {

  const [accordian, setAccordian] = useState(-1)

  function AccordianHandle(index) {
    setAccordian(accordian === index ? -1 : index)
  }
  return (
    <>
      <header className="mt-5 h-screen bg-white Netflix">
        <div className="container mx-auto xl:px-4">
          <div className="content">
            <h1 className="text-center font-sans leading-none capitalize text-3xl md:text-5xl tracking-wide mb-5 font-semibold	">Unlimited movies, <br /> TV shows and more.</h1>
            <p className="text-center text-2xl mb-6">Watch anywhere. Cancel anytime.</p>
            <p className="text-center text-xl mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="button-group">
              <input type="search" placeholder='Email address' className='form-control' />
              <button>Get Started </button>
            </div>
          </div>

        </div>
      </header>
      <section className="container mx-auto xl:px-4">
        <div className="flex flex-wrap">
          <div className="basis-full md:basis-6/12 lg:basis-6/12 flex flex-col justify-center">
            <h2 className='text-center md:text-start font-sans leading-none capitalize text-3xl md:text-5xl tracking-wide mb-5 font-semibold	'>Enjoy on your TV.</h2>
            <p className='text-center md:text-start text-xl md:text-2xl mb-4 font-light'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className="basis-full md:basis-6/12 lg:basis-6/12">
            <div className='text-end block relative'>
              <img src={Tv} alt="" className="img-" />
              <div className="absolute video-frame">
                <video data-uia="our-story-card-video" loop autoPlay muted playsinline>
                  <source src={video2} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto xl:px-4 mb-6">
        <div className="flex flex-wrap">
          <div className="basis-full md:basis-6/12 lg:basis-6/12">
            <div className='text-end block relative'>
              <img src={imageBobile} alt="" className="img-" />

            </div>
          </div>
          <div className="basis-full md:basis-6/12 lg:basis-6/12 flex flex-col justify-center  mb-10 md:mb-0">
            <h2 className='text-center md:text-start font-sans leading-none capitalize text-3xl md:text-5xl tracking-wide mb-5 font-normal	'>Download your shows to watch offline.</h2>
            <p className='text-center md:text-start text-xl font-light md:text-2xl mb-4'>Save your favourites easily and always have something to watch.</p>
          </div>
        </div>
      </section>
      <section className="container mx-auto xl:px-4">
        <div className="flex flex-wrap">
          <div className="basis-full md:basis-6/12 lg:basis-6/12 flex flex-col justify-center mb-10 md:mb-0  order-2 md:-order-none">
            <h2 className='text-center md:text-start font-sans leading-none capitalize text-3xl md:text-5xl tracking-wide mb-5 font-normal	'>Watch everywhere.</h2>
            <p className='text-center md:text-start text-xl md:text-2xl mb-4 font-light	'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className="basis-full md:basis-6/12 lg:basis-6/12">
            <div className='text-end block relative'>
              <img src={device} alt="" className="img-" />
              <div className="absolute video-frame position">
                <video data-uia="our-story-card-video" loop autoPlay muted playsinline>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" border-solid border-b-slate-500">
        <div className='container mx-auto xl:px-4'>
          <div className="flex flex-wrap">
            <div className="basis-full md:basis-6/12 lg:basis-6/12">
              <div className='text-end block relative'>
                <img src={img2} alt="" className="img-" />
              </div>
            </div>
            <div className="basis-full md:basis-6/12 lg:basis-6/12 flex flex-col justify-center">
              <h2 className='text-center md:text-start font-sans leading-none capitalize text-3xl md:text-5xl tracking-wide mb-5 font-normal	'>Create profiles for children.</h2>
              <p className='text-center md:text-start text-xl md:text-2xl mb-4 font-light	'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='mb-20'>
        <div className="container mx-auto xl:px-4">
          <div className=" flex items-center justify-center">
            <div className=" mt-6">
              <h2 className='text-center font-sans leading-none mt-20 capitalize text-3xl md:text-6xl tracking-wide mb-12 font-normal'>Frequently Asked Questions</h2>

              <div className="flex flex-col mx-auto mb-8">
                {
                  accordionData.map((item, index) => {
                    return (
                      <div className="accordian  p-5 mb-3" key={index}>
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => AccordianHandle(index)}
                        >
                          <div className='text-2xl'>{item.title}</div>
                          <i className='text-3xl'>{accordian === index ? '-' : '+'}</i>
                        </div>
                        {accordian === index ? <p className='mt-5 text-xl'>{item.content}</p> : ""}
                      </div>
                    )
                  })
                }
              </div>
              <p className="text-center text-xl mb-4 font-light	">Ready to watch? Enter your email to create or restart your membership.</p>
              <div className="block mx-auto text-center">
                <input type="search" placeholder='Email address' className='form-control w-full md:w-96 p-3 text-zinc-900	border-none h-16	outline-none mb-5 md:mb-0' />
                <button type='button' className='bg-rose-600 p-5 h-16	'>Get Started </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WecomePage