// pages/index.js
import Head from 'next/head'
import Header from './components/Header'
import BookList from './components/BookList'
import FilterBar from './components/FilterBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mi Biblioteca</title>
        <meta name="description" content="Una lista de libros utilizando Next.js y TailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <FilterBar />
      <BookList />
    </div>
  )
}
