import { Title } from "solid-start";
import Counter from "~/components/Counter";
import CalorieCalculator from "~/components/CalorieCalculator";
export default function Home() {
  return (
    <main>
      <Title>Test Solid js app</Title>
      <CalorieCalculator />
    </main>
  );
}
