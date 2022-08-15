import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-5xl font-bold pb-8">
          아주 작은
          <a className="text-blue-600" href="https://nextjs.org">
            {' 목표의 힘'}
          </a>
        </h1>
        <Image src="/main.png" alt="small goal" width={500} height={500} />
      </main>

    </div>
  )
}

export default Home
