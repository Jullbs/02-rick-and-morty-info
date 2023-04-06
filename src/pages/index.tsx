import PlanetsDisplay from '@/components/PlanetsDisplay'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty Info</title>
        <meta
          name="description"
          content="A page with Rick and Morty information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen flex flex-justify items-center pt-40">
        <PlanetsDisplay />
      </main>
    </>
  )
}
