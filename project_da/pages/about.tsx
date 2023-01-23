import Link from "next/link";
import Navbar from "../component/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import fondo from '../public/images/fondo.png';
export default function home() {
  return (
    <div>
      <Navbar />
    <span className="welcome">Welcome to our customer service</span>
    <img className='image-about' src='./images/contact.png' />
    </div>
  );
}
