function List() {
  return (
    <ul className="area-list grid grid-cols-1 gap-4 bg-dark-blue p-6 align-bottom text-white  min-[997px]:w-[400px]">
      <li>
        {' '}
        <h1 className="text-[3rem] font-semibold text-soft-orange">New</h1>
      </li>
      <li className="list-li">
        <h2 className="text-lg font-bold">Hydrogen VS Electric Cars</h2>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </li>
      <li className="list-li">
        <h2 className="text-lg font-bold">The Downsides of AI Artistry</h2>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </li>
      <li className="list-li">
        <h2 className="text-lg font-bold">Is VC Funding Drying Up?</h2>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </li>
    </ul>
  );
}

export default List;
