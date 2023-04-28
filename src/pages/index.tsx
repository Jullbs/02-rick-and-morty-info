import PlanetsDisplay from '@/components/PlanetsDisplay'
import Head from 'next/head'

export default function Home() {
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
        <PlanetsDisplay />
      </main>
    </>
  )
}
