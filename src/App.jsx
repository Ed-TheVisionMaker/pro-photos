// import Photo from './components/Photo';
import Carousel from './components/Carousel';

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
      <Carousel images={photoUrls} />
      </main>
      {/* <Photo /> */}
    </div>
  );
}
