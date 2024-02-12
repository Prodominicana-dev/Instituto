import {
  Menu,
  MenuHandler,
  Typography,
  ListItem,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  navListMenuItems: {
    title: string;
    link: string;
  }[];
}

export default function NavbarMenu({ title, navListMenuItems }: Props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title, link }: any, key: any) => (
    <Link href={link} key={key}>
      <MenuItem
        placeholder={undefined}
        className="flex items-center gap-3 rounded-lg"
      >
        <div>
          <Typography
            placeholder={undefined}
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm  font-normal font-montserrat"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <Menu
      open={isMenuOpen}
      handler={setIsMenuOpen}
      offset={{ mainAxis: 20 }}
      placement="bottom"
      allowHover={true}
    >
      <MenuHandler>
        <Typography
          as="div"
          className="xl:font-xl text-center"
          placeholder={undefined}
        >
          <ListItem
            placeholder={undefined}
            className="h-20 px-5 text-sm bg-transparent rounded-none hover:bg-transparent  hover:text-white/60 text-white cursor-pointer font-bold font-montserrat uppercase duration-300"
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            {title}
          </ListItem>
        </Typography>
      </MenuHandler>
      <MenuList
        placeholder={undefined}
        className="hidden max-w-screen-xl rounded-xl lg:block"
      >
        <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
          {renderItems}
        </ul>
      </MenuList>
    </Menu>
  );
}
