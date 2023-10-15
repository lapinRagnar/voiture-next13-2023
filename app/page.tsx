import { CarCard, CustomFilter, Hero, SearchBar } from "@/components/"
import { fetchCars } from "@/utils"
// import Image from "next/image"

export default async function Home() {

  const allCars = await fetchCars()
  console.log('toutes les voitures', allCars)

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars
  

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

        { !isDataEmpty 
            ? (
              <section>
                <div className='home__cars-wrapper'>
                  { allCars?.map((car) => <CarCard car={car} />)}
                </div>
              </section>
              )
            : (
              <div className="home__error-container">
                <h2 className='text-black text-xl font-bold'>Aucune voiture dans le catalogue!</h2>
                <p>{ allCars?.message }</p>
              </div>
            )
        }

      </div>
      
    </main>
  )
}
