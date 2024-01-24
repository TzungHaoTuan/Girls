import Link from "next/link";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="bg-violet-200 text-violet-400 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between py-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">TVs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">Watches</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">Girls ecommerce shop</p>
            <p>&copy; {new Date().getFullYear()} Girls. All right reserved.</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24}></MdFacebook>
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24}></AiFillTwitterCircle>
              </Link>
              <Link href="#">
                <AiFillInstagram size={24}></AiFillInstagram>
              </Link>
              <Link href="#">
                <AiFillYoutube size={24}></AiFillYoutube>
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
