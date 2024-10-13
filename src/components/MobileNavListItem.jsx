import { SheetClose } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const MobileNavListItem = ({ href, title, ...props }) => {
  return (
    <SheetClose key={href} asChild>
      <Link to={href} key={title} {...props}>
        <li className="mobile-navigation__text">{title}</li>
      </Link>
    </SheetClose>
  );
};

export default MobileNavListItem;
