import Head from 'next/head'
import Image from 'next/image'
import JokePart from './components/JokePart'


export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
      </Head>
    <JokePart results={results}/>
    </div>
  )
}

export async function getServerSideProps() {
  const request = await fetch('https://www.boredapi.com/api/activity');
  const results = await request.json();
  return {
    props: {results}, // will be passed to the page component as props
  }
}
