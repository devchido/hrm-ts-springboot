import { FcBullish } from 'react-icons/fc';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { HiOutlineLogout } from 'react-icons/hi';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../shared/constants/navigation';

interface SidebarLinkProps {
  item: {
    path: string;
    icon: JSX.Element; // JSX.Element cho phép truyền các component React vào props
    label: string;
    key: string;
  };
}

const linkClass: string =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

function SidebarLink({ item }: SidebarLinkProps) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
function Sidebar() {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish fontSize={24} />
        <span className="text-neutral-100 text-lg">Dashboard</span>
      </div>
      <div className="flex flex-1 flex-col overflow-auto">
        <div className="flex-1 py-8 flex flex-col gap-0.5 overflow-auto custom-scroll">
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
          <div className={classNames('cursor-pointer text-red-500', linkClass)}>
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
