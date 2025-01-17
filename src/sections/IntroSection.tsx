import landing from "../assets/landing.png";
import Button from "../components/button";

const IntroSection = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="flex flex-col justify-center bg-lightBlue py-8 px-20 lg:min-w-96 lg:flex-grow">
          <h1 className="text-darkBlue">hello, i'm azure</h1>
          <p className="text-darkBlue mt-4">
            I'm a private chef based in Singapore.
          </p>
          <p className="text-darkBlue">This is a work in progress</p>
          <p className="text-darkBlue">This is a work in progress</p>
          <p className="text-darkBlue">This is a work in progress</p>
          <p className="text-darkBlue">This is a work in progress</p>
          <p className="text-darkBlue">This is a work in progress</p>
          <p className="text-darkBlue">This is a work in progress</p>
          <p className="text-darkBlue">This is a work in progress</p>
          <Button
            text="reserve me"
            className="bg-darkBlue text-lightBlue hover:bg-darkPurple transition-all mt-4 transform hover:scale-105 duration-300 ease-in-out"
            onClick={() => console.log("View Menu clicked!")}
          />
        </div>
        <div className="flex flex-col justify-center bg-red-500 text-center lg:max-w-[764px]">
          <img src={landing} alt="Chef" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
