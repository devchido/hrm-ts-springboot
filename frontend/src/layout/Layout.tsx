import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

function Layout() {
  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-auto custom-scroll">
        <Header />
        <div className="p-4 text-lg leading-8 min-h-0 overflow-auto custom-scroll ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
