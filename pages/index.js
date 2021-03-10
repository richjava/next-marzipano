import dynamic from "next/dynamic";
import { data } from "./../data/data";
let Pano = dynamic(() => import("./../components/Pano"), { ssr: false });

export default function IndexPage() {
  return (
    <>
      <nav className="main-nav">
        <h2>Next Marzipano</h2>
      </nav>
      <Pano data={data} />
    </>
  );
}
