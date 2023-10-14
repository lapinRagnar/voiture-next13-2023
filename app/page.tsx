import { CustomFilter, Hero, SearchBar } from "@/components/"
// import Image from "next/image"

export default function Home() {
  return (
    <main className="overflow-hidden">
      
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        
        <div className="home__text-container">
          <h1 className="text-4xl font-bold">Catalogue</h1>
          <p>Voir les voitures de votre rêve!</p>
        </div>

        <div className="home_filters">
          <SearchBar />

          <div className="home__filter_container">
            <CustomFilter />
            {/* <CustomFilter title={'year'}/> */}
          </div>

        </div>

      </div>
      
    </main>
  )
}
