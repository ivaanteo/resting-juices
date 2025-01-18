import landing1 from "../assets/landing1.jpeg";
import landing2 from "../assets/landing2.jpeg";
import landing3 from "../assets/landing3.jpeg";
import landing4 from "../assets/landing4.jpeg";
import ImageCarousel from "../components/Carousel";
import Button from "../components/StyledButton";

const IntroSection = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row-reverse bg-lightBlue">
        <div className="flex flex-col justify-center py-8 px-20 lg:min-w-96 lg:flex-grow">
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
        <div className="flex flex-col justify-center text-center lg:max-w-[764px]">
          <ImageCarousel images={[landing1, landing2, landing3, landing4]} imageAspect="square" />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
