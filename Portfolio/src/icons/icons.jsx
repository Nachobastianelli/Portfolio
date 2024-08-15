import argentina from "../assets/flag.png";
import estadosUnidos from "../assets/flags.png";
import laptop from "../assets/niño-con-laptop.png";

export function ArgIcon() {
  return <img src={argentina} alt="Argentina" className="h-6 w-6"></img>;
}

export function EeuuIcon() {
  return (
    <img src={estadosUnidos} alt="United States" className="h-6 w-6"></img>
  );
}

export function LaptopIcon() {
  return <img src={laptop} alt="Me" className="h-7 w-7"></img>;
}
