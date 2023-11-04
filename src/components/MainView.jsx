import { web3desktop, web3mobile } from '../assets/images';

function MainView() {
  return (
    <section className="area-main grid grid-cols-2 gap-9 max-[997px]:grid-cols-1">
      <picture className="col-span-2 max-[997px]:col-span-1">
        <source
          media="(min-width: 550px)"
          srcSet={web3desktop}
          width={800}
          height={500}
        />
        <img
          src={web3mobile}
          alt=""
          width={200}
          height={200}
          className="w-full"
        />
      </picture>
      <h1 className="big-heading font-semibold text-dark-blue">
        The Bright Future Of Web 3.0?
      </h1>
      <div className="grid grid-cols-1">
        <p className="leading-7 text-grayish-blue">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="h-fit w-fit self-end bg-soft-red px-16 py-3 font-semibold capitalize tracking-widest text-ofWhite max-[997px]:mt-7">
          read more
        </button>
      </div>
    </section>
  );
}

export default MainView;
