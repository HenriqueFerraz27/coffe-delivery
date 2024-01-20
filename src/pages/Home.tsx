import { Banner, CoffeeList, Header } from '../components'

function Home() {
  return (
    <>
      <Header />
      <Banner />

      <main>
        <CoffeeList/>
      </main>
    </>
  )
}

export default Home
