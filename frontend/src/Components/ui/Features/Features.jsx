import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {["Fast & Secure", "Easy to Use", "Modern Design"].map((feature, index) => (
        <Card key={index} className="p-4">
          <CardContent>
            <h3 className="text-lg font-semibold">{feature}</h3>
            <p className="text-gray-500">This feature makes our platform unique.</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default Features;
