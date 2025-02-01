import { Button } from "@/Components/ui/Button/Button";

const Hero = () => {
  return (
    <section className="text-center p-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold">Welcome to Our Website</h2>
      <p className="text-lg mt-2">Your journey starts here.</p>
      <Button className="mt-4">Get Started</Button>
    </section>
  );
};

export default Hero;
