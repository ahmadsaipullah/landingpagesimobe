import type { Route } from "./+types/home";
import { Welcome } from "../layouts";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Simobe" },
    { name: "description", content: "Simobe" },
  ];
}

export default function Home() {
  return <Welcome />;
}
