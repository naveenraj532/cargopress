import LeftService from "../components/LeftService"
import PLService from "../components/PLService"
import RightService from "../components/RightService"

const OurServices = () => {
  return (
    <div className='mt-32 padding-b'>
        <h1 className="px-16 text-navy font-montserrat font-extrabold text-4xl">Services.</h1>
        <LeftService color={"blue"} />
        <RightService color={"forest-green"} />
        <PLService color={"charcoal"} />
    </div>
  )
}

export default OurServices