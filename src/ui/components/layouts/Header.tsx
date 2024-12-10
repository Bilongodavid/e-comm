import Container from "../elements/Container";
import Logo from "../../../assets/images/logo.png";
import Typography from "../../design-system/typography";
import { TbUserExclamation } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
export default function Header() {
  return (
    <div className="py-4 shadow">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={Logo} alt="logo" className="mr-2" />
            <Typography className="font-bold font-montserrat" size="big">
              Furniro
            </Typography>
          </div>

          <div>
            <nav>
              <ul className="flex justify-center items-center space-x-10">
                <li>
                  <Typography size="sm">Home</Typography>
                </li>
                <li>
                  <Typography size="sm">Shop</Typography>
                </li>
                <li>
                  <Typography size="sm">About</Typography>
                </li>
                <li>
                  <Typography size="sm">Contact</Typography>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-end flex justify-center items-center space-x-10">
            <TbUserExclamation className="w-7 h-7" />
            <CiSearch className="w-7 h-7" />
            <CiHeart className="w-7 h-7" />
            <IoCartOutline className="w-7 h-7" />
          </div>
        </div>
      </Container>
    </div>
  );
}
