import Head from 'next/head'
import { useQuery, gql } from '@apollo/client'
import PlanetsDisplay from '@/components/PlanetsDisplay'
import { Tooltip } from 'react-tooltip'

const PLANETS_QUERY = gql`
  query Planets {
    locations(filter: { type: "Planet" }, page: 1) {
      results {
        id
        name
      }
    }
  }
`

export default function Home() {
  const { data, loading, error } = useQuery(PLANETS_QUERY)

  if (loading) {
    return <h2 className="text-white">Loading...</h2>
  }

  if (error) {
    console.error(error)
    return null
  }

  const planetsList = data.locations.results.slice(0, 15)

  return (
    <>
      <Head>
        <title>Rick and Morty Universe</title>
        <meta
          name="description"
          content="A page with Rick and Morty information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-[48rem] flex justify-center items-center">
        <Tooltip id="my-tooltip" />
        <PlanetsDisplay planetsList={planetsList} />
      </main>
    </>
  )
}
