import { useState } from "react";
import Logo from "@/assets/img/logo2svg.svg";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="w-full my-6 fixed top-0 z-50 bg-transparent">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto text-white text-lg font-semibold">
        <div className="flex items-center gap-6">
          <img src={Logo} alt="Logo" className="w-32" />
          <div className="flex gap-4">
            {/* Find Jobs */}
            <DropdownMenu
              open={openMenu === "jobs"}
              onOpenChange={(open) => setOpenMenu(open ? "jobs" : null)}
            >
              <DropdownMenuTrigger asChild>
                <button className="hover:underline flex items-center gap-1">
                  Find Jobs{" "}
                  {openMenu === "jobs" ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Remote Jobs</DropdownMenuItem>
                <DropdownMenuItem>On-site Jobs</DropdownMenuItem>
                <DropdownMenuItem>Freelance</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Hire Talent */}
            <DropdownMenu
              open={openMenu === "talent"}
              onOpenChange={(open) => setOpenMenu(open ? "talent" : null)}
            >
              <DropdownMenuTrigger asChild>
                <button className="hover:underline flex items-center gap-1">
                  Hire Talent{" "}
                  {openMenu === "talent" ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Post a Job</DropdownMenuItem>
                <DropdownMenuItem>Browse Freelancers</DropdownMenuItem>
                <DropdownMenuItem>Talent Marketplace</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Explore Consulting Solution */}
            <DropdownMenu
              open={openMenu === "consulting"}
              onOpenChange={(open) => setOpenMenu(open ? "consulting" : null)}
            >
              <DropdownMenuTrigger asChild>
                <button className="hover:underline flex items-center gap-1">
                  Explore Consulting Solution{" "}
                  {openMenu === "consulting" ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Business Strategy</DropdownMenuItem>
                <DropdownMenuItem>Tech Consulting</DropdownMenuItem>
                <DropdownMenuItem>HR & Operations</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Discover Insights */}
            <DropdownMenu
              open={openMenu === "insights"}
              onOpenChange={(open) => setOpenMenu(open ? "insights" : null)}
            >
              <DropdownMenuTrigger asChild>
                <button className="hover:underline flex items-center gap-1">
                  Discover Insights{" "}
                  {openMenu === "insights" ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Blog</DropdownMenuItem>
                <DropdownMenuItem>Case Studies</DropdownMenuItem>
                <DropdownMenuItem>Reports</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Search />
          <button className="hover:underline">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
