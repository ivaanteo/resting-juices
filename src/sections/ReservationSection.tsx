import { InlineWidget } from "react-calendly";
import LucideSpinner from "../components/Spinner";

export default function Reservations() {
  return (
    <section className="bg-darkPurple">
      <div className="pt-24 pb-12 px-16">
        <h1 className="text-yellow text-center">reserve a dining session</h1>
      </div>
      <div className="">
        <InlineWidget
          styles={{ width: "100%", height: "100vh", zIndex: 100 }}
          url="https://calendly.com/restingjuices/30min"
          LoadingSpinner={() => (
            <div className="flex justify-center items-center h-full">
              <LucideSpinner color="yellow" size={64} />
            </div>
          )}
        />
      </div>
    </section>
  );
}
