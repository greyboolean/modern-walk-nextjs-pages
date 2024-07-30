import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className="mx-16 my-12">
      <Outlet />
    </main>
  );
}

export default Main;
