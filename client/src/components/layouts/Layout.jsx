import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-screen w-full">
      <Outlet />
    </div>
  );
}
