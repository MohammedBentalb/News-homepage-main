import Grid from './components/Grid';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <main className="max-content relative flex flex-col justify-center overflow-x-hidden px-3 pb-4">
        <Navbar />
        <Grid />
      </main>
      <h1 className="my-10 text-center text-[14px] max-sm:text-[11px]">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io"
          rel="noopener noreferrer"
          target="_blank"
          className="font-semibold text-soft-red hover:text-dark-grayish-blue"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://github.com/MohammedBentalb"
          rel="noopener noreferrer"
          target="_blank"
          className="font-semibold text-soft-red hover:text-dark-grayish-blue"
        >
          {' '}
          Mohammed Bentalb
        </a>
      </h1>
    </>
  );
}

export default App;
