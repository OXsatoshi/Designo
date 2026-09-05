import Image from "next/image";
import logo from "../../public/assets/shared/desktop/logo-dark.png";
export default function Heading() {
  return (
    <header className="flex justify-between">
      <div>
        <Image src={logo} alt="Company logo" />
      </div>
      <div>nav</div>
    </header>
  );
}
