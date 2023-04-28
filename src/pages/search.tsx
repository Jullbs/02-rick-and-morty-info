import Head from 'next/head'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Select from 'react-select'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'

import planet from '../../public/images/planet-10.png'
import test from '../../public/images/test-character.png'

function CharactersCards() {
  return (
    <section className="flex justify-center items-center mb-20">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[18.75rem] h-[26.5rem]"
      >
        <SwiperSlide className="w-[18.75rem] bg-acid-green rounded-3xl">
          <button className="absolute mt-[0.5rem] ml-[0.5rem] p-1 drop-shadow-lg rounded-full bg-gray-600">
            <Icon
              icon="material-symbols:star-rate"
              className="w-10 h-10 text-white"
            />
          </button>
          <Image
            src={test}
            alt=""
            width={300}
            height={300}
            className="rounded-t-3xl"
          />
          <div className="absolute p-2 rounded-xl ml-[13rem] mt-[-1.5rem] bg-gray-400 text-acid-green border-2 border-acid-green drop-shadow-lg">
            <p>Alive</p>
          </div>
          <div className="px-4 py-2 text-lg leading-6 text-gray-300">
            <strong>Name:</strong>
            <p>Rick Sanchez</p>
            <strong>Species:</strong>
            <p>Human</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[18.75rem] bg-acid-green rounded-3xl">
          <button className="absolute mt-[0.5rem] ml-[0.5rem] p-1 drop-shadow-lg rounded-full bg-gray-600">
            <Icon
              icon="material-symbols:star-rate"
              className="w-10 h-10 text-white"
            />
          </button>
          <Image
            src={test}
            alt=""
            width={300}
            height={300}
            className="rounded-t-3xl"
          />
          <div className="absolute p-2 rounded-xl ml-[13rem] mt-[-1.5rem] bg-gray-400 text-acid-green border-2 border-acid-green drop-shadow-lg">
            <p>Alive</p>
          </div>
          <div className="px-4 py-2 text-lg leading-6 text-gray-300">
            <strong>Name:</strong>
            <p>Rick Sanchez</p>
            <strong>Species:</strong>
            <p>Human</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[18.75rem] bg-acid-green rounded-3xl">
          <button className="absolute mt-[0.5rem] ml-[0.5rem] p-1 drop-shadow-lg rounded-full bg-gray-600">
            <Icon
              icon="material-symbols:star-rate"
              className="w-10 h-10 text-white"
            />
          </button>
          <Image
            src={test}
            alt=""
            width={300}
            height={300}
            className="rounded-t-3xl"
          />
          <div className="absolute p-2 rounded-xl ml-[13rem] mt-[-1.5rem] bg-gray-400 text-acid-green border-2 border-acid-green drop-shadow-lg">
            <p>Alive</p>
          </div>
          <div className="px-4 py-2 text-lg leading-6 text-gray-300">
            <strong>Name:</strong>
            <p>Rick Sanchez</p>
            <strong>Species:</strong>
            <p>Human</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[18.75rem] bg-acid-green rounded-3xl">
          <button className="absolute mt-[0.5rem] ml-[0.5rem] p-1 drop-shadow-lg rounded-full bg-gray-600">
            <Icon
              icon="material-symbols:star-rate"
              className="w-10 h-10 text-white"
            />
          </button>
          <Image
            src={test}
            alt=""
            width={300}
            height={300}
            className="rounded-t-3xl"
          />
          <div className="absolute p-2 rounded-xl ml-[13rem] mt-[-1.5rem] bg-gray-400 text-acid-green border-2 border-acid-green drop-shadow-lg">
            <p>Alive</p>
          </div>
          <div className="px-4 py-2 text-lg leading-6 text-gray-300">
            <strong>Name:</strong>
            <p>Rick Sanchez</p>
            <strong>Species:</strong>
            <p>Human</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[18.75rem] bg-acid-green rounded-3xl">
          <button className="absolute mt-[0.5rem] ml-[0.5rem] p-1 drop-shadow-lg rounded-full bg-gray-600">
            <Icon
              icon="material-symbols:star-rate"
              className="w-10 h-10 text-white"
            />
          </button>
          <Image
            src={test}
            alt=""
            width={300}
            height={300}
            className="rounded-t-3xl"
          />
          <div className="absolute p-2 rounded-xl ml-[13rem] mt-[-1.5rem] bg-gray-400 text-acid-green border-2 border-acid-green drop-shadow-lg">
            <p>Alive</p>
          </div>
          <div className="px-4 py-2 text-lg leading-6 text-gray-300">
            <strong>Name:</strong>
            <p>Rick Sanchez</p>
            <strong>Species:</strong>
            <p>Human</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[18.75rem] bg-acid-green rounded-3xl">
          <button className="absolute mt-[0.5rem] ml-[0.5rem] p-1 drop-shadow-lg rounded-full bg-gray-600">
            <Icon
              icon="material-symbols:star-rate"
              className="w-10 h-10 text-white"
            />
          </button>
          <Image
            src={test}
            alt=""
            width={300}
            height={300}
            className="rounded-t-3xl"
          />
          <div className="absolute p-2 rounded-xl ml-[13rem] mt-[-1.5rem] bg-gray-400 text-acid-green border-2 border-acid-green drop-shadow-lg">
            <p>Alive</p>
          </div>
          <div className="px-4 py-2 text-lg leading-6 text-gray-300">
            <strong>Name:</strong>
            <p>Rick Sanchez</p>
            <strong>Species:</strong>
            <p>Human</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default function Search() {
  const options = [
    { value: 'post-apocalyptic-earth', label: 'Post-Apocalyptic Earth' },
    { value: 'earth', label: 'Earth' },
    { value: 'mars', label: 'Mars' },
  ]

  return (
    <>
      <Head>
        <title>Rick and Morty Planets</title>
        <meta
          name="description"
          content="A page where you can search planets of Rick and Morty universe."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center pt-32 gap-12">
        <Select
          options={options}
          placeholder={
            <p className="flex gap-2 items-center">
              <Icon
                icon="fluent-emoji-high-contrast:ringed-planet"
                className="w-8 h-8 text-black"
              />
              Search by planet...
            </p>
          }
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              neutral0: '#87F54E',
              neutral20: 'black',
              neutral30: '#EFEFEF',
              neutral40: '#EFEFEF',
              neutral50: '#393939',
              neutral60: 'black',
              neutral80: '#272727',
              primary25: '#EFEFEF',
              primary: 'black',
            },
          })}
          className="w-[20rem] font-bold"
        />

        <span className="flex justify-center items-start gap-48">
          <section className="bg-slate-background p-10 rounded-2xl">
            <Image
              src={planet}
              alt=""
              width={500}
              height={500}
              className="absolute ml-[-24rem] mt-[-6rem]"
            />
            <ul className="flex flex-col gap-4 justify-center pl-32 my-auto text-white text-2xl">
              <li>
                <strong>Name:</strong>
                <p className="pl-4">Earth</p>
              </li>
              <li>
                <strong>Type:</strong>
                <p className="pl-4">Planet</p>
              </li>
              <li>
                <strong>Dimension:</strong>
                <p className="pl-4">C-137</p>
              </li>
              <li>
                <strong>Created At:</strong>
                <p className="pl-4">2017-11-10T12:42:04.162Z</p>
              </li>
            </ul>
          </section>

          <CharactersCards />
        </span>
      </main>
    </>
  )
}
