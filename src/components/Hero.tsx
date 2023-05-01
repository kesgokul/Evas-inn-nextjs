import HeroPage from "./HeroPage";
import { heroData } from "@/utils/hero-data";

export default function Hero() {
  return (
    <main className=" overflow-scroll snap-y snap-mandatory scroll-smooth">
      {heroData.map((data, i) => (
        <div key={i} className="snap-start ">
          <HeroPage
            title={data.title}
            sub={data.sub}
            desc={data.desc}
            img={data.img}
          />
        </div>
      ))}
    </main>
  );
}
