import Image from "next/image";
import QRCodeGenerator from "./components/QRCodeGenerator";
import ProgressBar from "./components/ProgressBar";

export default function Home() {
  return (
<>
<h2> Hello WORLD </h2>

<QRCodeGenerator/>
{/* <ProgressBar/> */}
</>
  );
}
