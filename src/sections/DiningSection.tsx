import wine from "../assets/wine.jpeg";
import Button from "../components/StyledButton";

export default function DiningSection() {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:justify-center bg-lightPink py-12">
        <div className="flex flex-col justify-center text-right py-8 px-16">
          <h1 className="text-darkGreen">how to dine</h1>
          <p className="text-darkGreen mt-4">
            I serve an 8 course meal which lasts for an hour and a half at your
            house.
          </p>
          <p className="text-darkGreen">
            I source the freshest ingredients from all of Singapore.
          </p>
          <p className="text-darkGreen">
            All you need to bring is your appetite!
          </p>
          <Button
            text="reserve me"
            className="bg-darkGreen text-lightPink hover:bg-darkPurple transition-all mt-4 transform hover:scale-105 duration-300 ease-in-out"
            onClick={() => console.log("View Menu clicked!")}
          />
        </div>
        <div className="flex flex-col justify-center bg-red-500 text-center md:max-w-[512px]">
          <img src={wine} alt="Wine" className="w-full" />
        </div>
      </div>
    </section>
  );
}
