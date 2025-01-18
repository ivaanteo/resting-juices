import menuGroup from "../assets/menugroup.png";
import Button from "../components/StyledButton";

export default function MenuSection() {
  return (
    <section>
      <div className="flex flex-col md:flex-row-reverse md:justify-center bg-lightGreen py-12">
        <div className="flex flex-col justify-center text-left py-8 px-16">
          <h1 className="text-darkPurple">menu</h1>
          <p className="text-darkPurple mt-4">
            While I am best known for my nasi lemak, I also serve a variety of
            dishes, based on the freshest ingredients I can find, and your preferences.
          </p>

          <Button
            text="view sample menu"
            className="bg-darkPurple text-lightGreen hover:bg-darkBlue transition-all mt-4 transform hover:scale-105 duration-300 ease-in-out"
            onClick={() => console.log("View Menu clicked!")}
          />
        </div>
        <div className="flex flex-col justify-center text-center md:max-w-[764px] py-8 px-16">
          <img src={menuGroup} alt="menu" className="w-full" />
        </div>
      </div>
    </section>
  );
}
