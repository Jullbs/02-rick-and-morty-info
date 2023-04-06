import Image from 'next/image'

export default function PlanetsDisplay() {
  const planets = [
    { src: '/images/planet-1.png', size: 154, position: 'center' },
    { src: '/images/planet-2.png', size: 79, position: 'bottom' },
    { src: '/images/planet-3.png', size: 185, position: 'top' },
    { src: '/images/planet-4.png', size: 152, position: 'center' },
    { src: '/images/planet-5.png', size: 332, position: 'top' },
    { src: '/images/planet-6.png', size: 154, position: 'center' },
    { src: '/images/planet-7.png', size: 129, position: 'bottom' },
    { src: '/images/planet-8.png', size: 253, position: 'center' },
    { src: '/images/planet-9.png', size: 200, position: 'top' },
    { src: '/images/planet-10.png', size: 96, position: 'top' },
    { src: '/images/planet-11.png', size: 105, position: 'center' },
    { src: '/images/planet-12.png', size: 255, position: 'center' },
    { src: '/images/planet-13.png', size: 250, position: 'top' },
    { src: '/images/planet-14.png', size: 93, position: 'top' },
    { src: '/images/planet-15.png', size: 122, position: 'center' },
  ]

  return (
    <div className="max-w-[1440] h-full flex flex-wrap justify-center items-center px-20">
      {planets.map((planet, index) => {
        switch (planet.position) {
          case 'top':
            return (
              <Image
                className="mr-20 self-start"
                src={planet.src}
                alt=""
                width={planet.size}
                height={planet.size}
                key={index}
              />
            )
          case 'bottom':
            return (
              <Image
                className="mr-20 self-end"
                src={planet.src}
                alt=""
                width={planet.size}
                height={planet.size}
                key={index}
              />
            )
          default:
            return (
              <Image
                className="mr-20"
                src={planet.src}
                alt=""
                width={planet.size}
                height={planet.size}
                key={index}
              />
            )
        }
      })}
    </div>
  )
}
