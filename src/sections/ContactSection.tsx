import Button from "../components/button";

export default function ContactSection() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:justify-around bg-darkPurple py-12">
        <div className="flex flex-col justify-center text-right py-8 px-16">
          <h1 className="text-yellow">contact me</h1>
          <p className="text-yellow mt-4">
            I'd love to have a chat to see how I can help you host the perfect night.
          </p>
          <Button
            text="email"
            className="bg-yellow text-darkPurple hover:bg-lightPink transition-all mt-4 transform hover:scale-105 duration-300 ease-in-out"
            onClick={() => console.log("View Menu clicked!")}
          />
        </div>
        <div className="flex flex-col justify-center text-center lg:max-w-[512px]">
          <h1 className="text-yellow">Your phone linging</h1>
          <h1 className="text-yellow">Your phone linging</h1>
          <h1 className="text-yellow">Your phone linging</h1>
          <h1 className="text-yellow">Your phone linging</h1>
          <h1 className="text-yellow">Your phone linging</h1>
          <h1 className="text-yellow">Your phone linging</h1>
          <h1 className="text-yellow">Your phone linging</h1>
          <h1 className="text-yellow">Your phone linging</h1>
          <h1 className="text-yellow">Your phone linging</h1>
          <h1 className="text-yellow">Your phone linging</h1>
          <h1 className="text-yellow">Your phone linging</h1>
        </div>
      </div>
    </section>
  );
}
