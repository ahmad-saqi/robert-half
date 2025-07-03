import { useState } from "react";
import Logo from "@/assets/img/logo2svg.svg";
import { ChevronDown, ChevronUp, Search, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenMenu(null); // Close any open dropdowns when toggling mobile menu
  };

  const toggleDropdown = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const renderDropdown = (title: string, menu: string, items: string[]) => (
    <DropdownMenu
      open={openMenu === menu}
      onOpenChange={(open) => setOpenMenu(open ? menu : null)}
    >
      <DropdownMenuTrigger asChild>
        <button className="hover:underline flex items-center gap-1">
          {title}{" "}
          {openMenu === menu ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const menuItems = [
    {
      title: "Find Jobs",
      menu: "jobs",
      items: ["Remote Jobs", "On-site Jobs", "Freelance"],
    },
    {
      title: "Hire Talent",
      menu: "talent",
      items: ["Post a Job", "Browse Freelancers", "Talent Marketplace"],
    },
    {
      title: "Explore Consulting Solution",
      menu: "consulting",
      items: ["Business Strategy", "Tech Consulting", "HR & Operations"],
    },
    {
      title: "Discover Insights",
      menu: "insights",
      items: ["Blog", "Case Studies", "Reports"],
    },
  ];

  return (
    <div className="w-full py-6 fixed top-0 z-50 bg-white/30 lg:bg-black/30">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 text-white text-lg font-semibold">
        <div className="flex items-center gap-6">
          <img src={Logo} alt="Logo" className="w-32" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-4">
            {menuItems.map((item) => (
              <div key={item.menu}>
                {renderDropdown(item.title, item.menu, item.items)}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Search />
          <button className="hover:underline">Sign in</button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white bg-opacity-95 w-full px-4 py-6 absolute left-0 top-full shadow-lg">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <div key={item.menu} className="border-b border-gray-700 pb-2">
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => toggleDropdown(item.menu)}
                >
                  <span>{item.title}</span>
                  {openMenu === item.menu ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
                {openMenu === item.menu && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block py-1 text-gray-300 hover:text-white"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-4 pt-4">
              <Search />
              <button className="hover:underline">Sign in</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
