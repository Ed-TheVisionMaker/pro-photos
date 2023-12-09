import CarouselDisplay from './components/Carousel/CarouselDisplay';
import { photoUrls } from './components/Photo';

export default function App() {
  return (
    <div className='App'>
      <header>
        <h1>
        Photosite
        </h1>
      </header>
      <main>
      <CarouselDisplay images={photoUrls} />
      </main>
      {/* <Photo /> */}
    </div>
  );
}
