import './sellCars.css'

const SellCars = () => {
  return (
    <div>
      <section className='lg:h-[60vh] py-10 text-right pr-10 flex flex-col justify-center items-end gap-4 text-white'>
        <h2 className='text-4xl font-semibold lg:w-1/2'>Confusion, Which is Best Car?</h2>
        <p className='w-1/2 font-medium'>Car servicing is the regular maintenance and inspection of a vehicle to ensure that it is operating safely and efficiently.</p>
        <button className="btn">Sell Your Car</button>
      </section>
    </div>
  );
};

export default SellCars;
