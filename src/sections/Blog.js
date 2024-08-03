import BlogCard from "../components/BlogCard"

export const Blog = () => {
  return (
    <div className="bg-navy h-96">
        <div className="flex flex-row items-center gap-10">
            <h1 className="text-light-gray font-semibold font-montserrat text-2xl">Not sure which solution fits your business needs ?</h1>
            <button className='mb-8 flex mt-5 justify-center items-center gap-2 px-4 py-2 font-montserrat text-md lead-none bg-blue rounded-md text-white'>Request a Quote</button>
        </div>
        <div>
            <BlogCard blogname={"Blog1"} blogdate={"03-Aug-2024"} />
        </div>
    </div>
  )
}
