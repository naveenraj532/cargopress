import suresh from "../assets/images/sureshsingh.png";
import team from "../assets/images/team.png";


const AboutUs = () => {
    return (
    <div className="padding-b">
      <div className="flex flex-row">
          <div className="mt-32 px-16">
              <div className="flex flex-col gap-10">
                  <div>
                      <h1 className="text-forest-green font-montserrat font-extrabold text-4xl">About Us.</h1>
                      <p className="text-charcoal">Something about us from a little bit of different perspective</p>
                  </div>
                  <div>
                      <h1 className="text-charcoal font-inter font-bold text-2xl">Introduction</h1>
                      <div className="flex flex-col gap-6 max-w-[600px] text-justify mt-4">
                          <p>With the passing of time and gaining of exposure, the varieties of cargos we handled increased manifold and presently comprise bagged consignments, palletized items, cartons, drums, wooden cases, machineries, including heavier ones, and tools & components, many break-bulk items and umpteen of other notified items and accordingly our equipage also underwent a big change into a modern ones.</p>
  
                          <p>We have special equipments & skilled labour for handling specialized cargoes like over dimensional cargoes and break-bulk items of many sorts. We are now capable of handling any type of cargo and any volume.</p>
  
                          <p>We have been catering to the storage requirement of many multi-national Companies and Corporate Giants in India like Hetero Drugs in the pharmaceutical field and Siemens, InflowTech Solutions, Redington India Pvt, and Groz Beckert Asia Pvt Ltd., & Real Image Media etc. Naturally, we have ample scope of handling their Imports at our Warehouses.</p>
  
                          <p>We earnestly feel that whatever we have mentioned above is enough to convince about our background, exposure, credibility in the field, potentiality to handle volumes, versatility in the art of handling various cargos, and their agents, importer studded across the country and the customs.</p>
  
                          <p>We assure a most dedicated service and shall be very fair and flexible in all our dealings with the customers, solely looking for excellent rapport and continued relations. We look upon your kind self to support us, vesting in us the best opportunity of handling all your valued cargos.</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="bg-forest-green h-[950px] w-[800px] relative">
            <img className="px-16 mt-36" src={suresh} alt="image" />
            <p className="px-16 text-justify mt-8 font-montserrat leading-2 font-medium text-light-gray">He brings in 25 years of exprience in the field of logistics particulary with regard of custom bonded warehouses.He is an export in handling Import corgoes and custom law related to bonded warehouses. We look forward for a good beginning, continued rapport, support and lasting relations.</p>
            <p className="px-16 mt-10 font-montserrat font-medium text-light-gray">Regards and Greetings</p>
            <p className="px-16 mt-2 font-montserrat font-bold text-light-gray">S. Suresh Singh</p>
            <p className="px-16 mt-1 font-montserrat font-normal text-md text-light-gray">Director</p>
          </div>
      </div>
      <div className="relative pt-10">

        <div className="bg-gray-100 h-[750px] py-7">
           <h1 className="relative font-inter text-center text-2xl font-bold">Our Team</h1>
           <img className="mt-5 absolute inset-x-0 top-1/2 transform -translate-y-1/2 mx-auto w-[850px] h-[600px]" src={team} alt="team" />
        </div>

        </div>

      </div>
    )
  }
  
  export default AboutUs;
  