import warehousing from '../assets/images/warehousing.jpg';

function LeftService({ color }) {
  return (
    <div className="flex items-center">
      <div className="w-1/2 px-16">
        <h1 className="text-blue font-montserrat font-bold text-xl">1) Warehousing</h1>
        <p className="text-charcoal mt-4 text-justify">
          Our warehousing and distribution services are regularly audited and analyzed to ensure that it meets the contemporary business models, and any and all upgrades are made to ensure our services continue to help our clients meet their logistic requirements efficiently. Our logistics team have years of experience in this business and can handle long term and large scale assignments with utter professionalism, and our customer service helps the clients to stay in the loop throughout the process, whenever they require any assistance. Consult with our experts today for your logistics, warehousing and distribution services requirements, and allow us to make a positive difference in your business.
          <br /><br/>
          Moreover, our supply chain management experts would design a logistic process especially for you to align with your business in an integrated fashion. Our warehousing services, includes a wide range of services that includes inventory control and management, load building, yard management, static and dynamic replenishment, kitting, order processing, vendor performance, cross docking, supply chain management, logistic integration, bar coding, quality control, labelling, carrier performance, and so on.
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
  );
}

export default LeftService;
