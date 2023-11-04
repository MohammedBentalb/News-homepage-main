import { gaming, laptop, retro } from '../assets/images';
import Card from './Card';
import List from './List';
import MainView from './MainView';

function Grid() {
  const cards = [
    {
      img: retro,
      grid: 'area-card1',
      number: '01',
      title: 'Reviving Retro PCs',
      desc: 'What happens when old PCs are given modern upgrades?',
    },
    {
      img: laptop,
      grid: 'area-card2',
      number: '02',
      title: 'Top 10 Laptops of 2022',
      desc: 'Our best picks for various needs and budgets.',
    },
    {
      img: gaming,
      grid: 'area-card3',
      number: '03',
      title: 'The Growth of Gaming',
      desc: 'How the pandemic has sparked fresh opportunities.',
    },
  ];

  return (
    <section className="max-content sec-grid gap-6 max-lg:gap-10">
      <MainView />
      <List />
      {cards.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </section>
  );
}

export default Grid;
