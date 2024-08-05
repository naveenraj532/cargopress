import ImageLoader from '../sections/ImageLoader';
import MoreAboutUs from '../sections/MoreAboutUs';
import { Services } from '../sections/Services';
import { Blog } from '../sections/Blog.js';
import { Clients } from '../sections/Clients';
import { Director } from '../sections/Director';


export const Home = () => {
  return (
        <main>
            <section className="xl:padding-1 wide:padding-r padding-b">
                <ImageLoader />
            </section>
            <section className="xl:padding-0 wide:padding-r padding-b">
                <MoreAboutUs />
            </section>
            <section className="xl:padding-0 wide:padding-r padding-b">
                <Services />
            </section>
            <section className="xl:padding-0 wide:padding-r padding-b">
                <Blog />
            </section>
            <section className="xl:padding-0 wide:padding-r padding-b">
                <Clients />
            </section>
            <section className="xl:padding-0 wide:padding-r padding-b">
                <Director />
            </section>
        </main>

  )
}
