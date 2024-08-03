import '../index.css'; // Ensure the correct path to your CSS file
import { Clients } from '../sections/Clients';
import { Director } from '../sections/Director';
import { Footer } from '../sections/Footer';
import ImageLoader from '../sections/ImageLoader';
import MoreAboutUs from '../sections/MoreAboutUs';
import { Services } from '../sections/Services';
import Navbar from './Navbar';



function App() {
  return (
    <main className="relative">
      <Navbar />
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
        <Clients />
      </section>
      <section className="xl:padding-0 wide:padding-r padding-b">
        <Director />
      </section>
      <section className="xl:padding-0 wide:padding-r">
        <Footer />
      </section>
    </main>
  );
}

export default App;
