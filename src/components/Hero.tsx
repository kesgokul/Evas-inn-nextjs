import HeroPage from "./HeroPage";
import { heroData } from "@/utils/hero-data";

export default function Hero() {
  return (
    <>
      {heroData.map((data, i) => (
        <HeroPage
          key={i}
          title={data.title}
          sub={data.sub}
          desc={data.desc}
          img={data.img}
        />
      ))}
    </>
  );
}
