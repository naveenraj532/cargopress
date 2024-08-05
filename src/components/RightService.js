import warehousing from '../assets/images/warehousing.jpg';

const RightService = ({ color }) => {
  return (
    <div className="flex items-center">
      <div className="w-1/2 relative">
        <div className="mt-8">
          <div className="flex flex-col gap-12 items-start">
            <div className={`bg-${color} h-16 w-[605px]`}></div>
            <div className={`bg-${color} h-16 w-[605px]`}></div>
            <div className={`bg-${color} h-16 w-[605px]`}></div>
            <div className={`bg-${color} h-16 w-[605px]`}></div>
            <div className={`bg-${color} h-16 w-[605px]`}></div>
          </div>
          <div className="px-16">
            <img className="mt-0 left-[65px] top-[53%] justify-center absolute transform -translate-y-1/2 h-96" src={warehousing} alt="image" />
          </div>
        </div>
      </div>
      <div className="w-1/2 px-16">
        <h1 className="text-forest-green font-montserrat font-bold text-xl">2) Storage</h1>
        <p className="text-charcoal mt-4 text-justify">
          We take pride in catering to a broad range of clientele throughout the country with our warehousing services, which is comprehensive, reliable and flexible – qualities that are essential to help businesses in this market. Our experienced experts design a supply chain flowchart tailored to meet your business and logistic needs, which focuses on not only increasing efficiency, but cutting down costs. With our vast network of warehouses and distribution centers spread throughout the country, it becomes much easier to cater to a audience in a record response time, which is the key factor in winning the hearts of the customer and having an edge over the competitors.
          <br /><br />
          Team of logistic experts are always available to help you with any queries you might have, or if you want to consult in length your logistic requirements. We would study your requirements and provide you with a quote that would not only suit your budget, but would also save you considerable amount of money in the long term. Our company has through years of experience in this industry has been able to create a network of associates across the length and breadth of country, with our own logistic centers spread throughout the country, which helps us to provide safe, reliable, economical and customized logistic solutions to our clients and partners.
        </p>
      </div>
    </div>
  );
}

export default RightService;
