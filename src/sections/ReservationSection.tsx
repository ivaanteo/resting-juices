export default function Reservations() {
  return (
    <section className="bg-darkPurple h-screen">
      <div className="flex flex-col md:flex-row md:justify-around py-12">
        <div className="flex flex-col justify-center text-right py-8 px-16">
          <h1 className="text-yellow">Book a table</h1>
          <p className="text-yellow mt-4">
            I'd love to have a chat to see how I can help you host the perfect
            night.
          </p>
          <button
            className="font-bold py-2 px-4 rounded-2xl bg-yellow text-darkPurple hover:bg-lightPink transition-all mt-4 transform hover:scale-105 duration-300 ease-in-out"
            onClick={() => console.log("View Menu clicked!")}
          >
            email
          </button>
        </div>
        <div className="flex flex-col justify-center text-center md:max-w-[512px]"></div>
      </div>
    </section>
  );
}
