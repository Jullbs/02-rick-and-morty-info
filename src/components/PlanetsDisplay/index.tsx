import Image from 'next/image'
import Link from 'next/link'

interface Planet {
  id: number
  name: string
}

interface PlanetsListProps {
  planetsList: Planet[]
}

export default function PlanetsDisplay({ planetsList }: PlanetsListProps) {
  const planetsImages = [
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
      {planetsList.map((planet: Planet, index) => {
        switch (planetsImages[index].position) {
          case 'top':
            return (
              <Link
                key={planet.id}
                href={'/search'}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={planet.name}
                className="mr-20 self-start"
              >
                <Image
                  src={planetsImages[index].src}
                  alt=""
                  width={planetsImages[index].size}
                  height={planetsImages[index].size}
                  key={index}
                />
              </Link>
            )
          case 'bottom':
            return (
              <Link
                key={planet.id}
                href={'/search'}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={planet.name}
                className="mr-20 self-end"
              >
                <Image
                  src={planetsImages[index].src}
                  alt=""
                  width={planetsImages[index].size}
                  height={planetsImages[index].size}
                  key={index}
                />
              </Link>
            )
          default:
            return (
              <Link
                key={planet.id}
                href={'/search'}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={planet.name}
                className="mr-20"
              >
                <Image
                  src={planetsImages[index].src}
                  alt=""
                  width={planetsImages[index].size}
                  height={planetsImages[index].size}
                  key={index}
                />
              </Link>
            )
        }
      })}
    </div>
  )
}
