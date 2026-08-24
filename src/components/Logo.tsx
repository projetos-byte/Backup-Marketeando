import { Link } from "react-router-dom";
import logoMarketeando from "@/assets/logo-marketeando.png";

const Logo = () => {
  return (
    <Link to="/#home" className="flex items-center">
      <img 
        src={logoMarketeando} 
        alt="MARKETeAndo" 
        className="h-14 w-auto"
      />
    </Link>
  );
};

export default Logo;
