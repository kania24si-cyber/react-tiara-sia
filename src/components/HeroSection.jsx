import Button from "./Button";
import Container from "./Container";

export default function HeroSection() {
  return (
    <div className="bg-blue-600 text-white py-20">

      <Container>

        <h1 className="text-5xl font-bold mb-4">
          Welcome to MyApp
        </h1>

        <p className="text-lg mb-6">
          Aplikasi modern berbasis React dan Tailwind CSS.
        </p>

        <Button type="warning">
          Get Started
        </Button>

      </Container>

    </div>
  );
}