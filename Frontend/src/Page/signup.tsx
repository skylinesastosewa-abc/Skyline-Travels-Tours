import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, CheckCircle2, Briefcase, ChevronDown } from "lucide-react";
import { logoutAdmin } from "../utils/auth";

interface SidebarItemProps {
  icon?: React.ElementType;
  label: string;
  to?: string;
  subMenu?: SidebarItemProps[];
  color?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  to,
  subMenu,
  color,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        onClick={() => subMenu && setOpen(!open)}
        className={`flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-100 ${
          color || ""
        }`}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4" />}
          {to ? <Link to={to}>{label}</Link> : <span>{label}</span>}
        </div>
        {subMenu && (
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </div>
      {subMenu && open && (
        <div className="pl-6 flex flex-col">
          {subMenu.map((item, index) => (
            <SidebarItem key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  const menu: SidebarItemProps[] = [
    { icon: Home, label: "Home", to: "/" },
    { icon: CheckCircle2, label: "My Work", to: "/my-work" },
    {
      label: "Flights",
      icon: Briefcase,
      subMenu: [
        { label: "Sudip Flights", to: "/flights/sudip" },
        { label: "Prajwol Flights", to: "/flights/prajwol" },
      ],
    },
    {
      label: "Reception Department",
      icon: Briefcase,
      color: "text-emerald-500",
      subMenu: [
        { label: "Visitor Record", to: "/reception/visitor-record" },
        { label: "Managing Calls", to: "/reception/managing-calls" },
        { label: "Electricity", to: "/reception/electricity" },
      ],
    },
    {
      label: "Sales & Marketing",
      icon: Briefcase,
      color: "text-purple-500",
      subMenu: [
        { label: "Lead Distribution", to: "/sales/lead-distribution" },
        { label: "Lead", to: "/sales/lead" },
        { label: "Daily Lead Target", to: "/sales/daily-lead-target" },
      ],
    },
  ];

  return (
    <aside className="w-64 border-r border-gray-200 flex flex-col bg-slate-50 flex-shrink-0 h-screen sticky top-0">
      {/* Header */}
      <div className="p-4 flex items-center gap-2">
        <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center text-white font-bold">
          M
        </div>
        <span className="font-bold text-lg tracking-tight mt-5">
          Workspace Management
        </span>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto py-2 px-2 space-y-1">
        {menu.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}

        {/* Logout button */}
        <button
          onClick={logoutAdmin}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition mt-4"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
