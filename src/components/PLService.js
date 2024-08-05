import warehousing from '../assets/images/warehousing.jpg';

const PLService = ({color}) => {
  return (
    <div className="flex items-center">
      <div className="w-1/2 px-16">
        <h1 className="text-charcoal font-montserrat font-bold text-xl">3) 3PL Services</h1>
        <p className="text-charcoal mt-4 text-justify">
            Ground transport and freight forwarding services, along with other ancillary services, helps us to provide tailor made logistic solutions to our clients, which we design as per their requirements and business ecosystem to help cut their cost, delivery time, while focusing on end user satisfaction. It is a mutually benefitting logistic service we aim to provide to our clients, which is what has helped us become one of the most reliable logistic service providers in the nation.Our logistic and freight forwarding services, along with other ancillary services, helps us to provide tailor made logistic solutions to our clients, which we design as per their requirements and business ecosystem to help cut their cost, delivery time, while focusing on end user satisfaction. It is a mutually benefitting logistic service we aim to provide to our clients, which is what has helped us become one of the most reliable logistic service providers in the nation.
            <br /><br/>
            We ensure that our fleet of trucks are always well maintained, and have the best and the most updated fleet of trucks in service to ensure that it is capable of delivering high value, and oversized deliverables, efficiently and effectively, without causing any kind of loss, which is generally the case seen with many outsourced trucking service providers.
        </p>
      </div>
      <div className="w-1/2 relative">
        <div className="mt-8">
          <div className="flex flex-col gap-12 items-end">
            <div className={`bg-${color} h-16 w-[605px]`}></div>
            <div className={`bg-${color} h-16 w-[605px]`}></div>
            <div className={`bg-${color} h-16 w-[605px]`}></div>
            <div className={`bg-${color} h-16 w-[605px]`}></div>
            <div className={`bg-${color} h-16 w-[605px]`}></div>
          </div>
          <div className="px-16">
            <img className="mt-0 top-[53%] left-11 justify-center absolute transform -translate-y-1/2 h-96" src={warehousing} alt="image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PLService