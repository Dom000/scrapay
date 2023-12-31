import { useAuth0 } from "@auth0/auth0-react";
import { Outlet, useNavigate } from "react-router-dom";
import InfoCards from "../../components/header/InforCards";
import { HiUsers } from "react-icons/hi";
import { FaBook } from "react-icons/fa";
import SideNav from "../../components/sideNav/SideNav";
import { All_BOOKS } from "../../graphql";
import { useQuery } from "@apollo/client";

function Index() {
  const { isAuthenticated, user } = useAuth0();
  const { data,error } = useQuery(All_BOOKS);
  const allbook = error || data === undefined ? [] : data?.books;

  const navigate = useNavigate();
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    navigate("/");
  }
  //   useEffect(() => {
  //     if (isAuthenticated == false) {
  //       navigate("/");
  //     }
  //   }, []);

  return (
    <div className="flex w-full mt-16 pt-10">
      <div className="md:w-1/5 w-[10%]  lg:block max-h-[80vh] overflow-y-auto">
        <SideNav />
      </div>
      <div className="!w-[85%] md:w-4/5 overflow-y-scroll h-auto max-h-[83vh] md:m-2 p-2  md:space-y-4 ">
        <div className="md:flex items-center w-full justify-center mb-5 space-y-5 md:space-y-0 md:space-x-5">
          <InfoCards
            className="!w-full"
            Icon={FaBook}
            color="bg-red-500"
            text="Total Books"
            counts={allbook.length}
            textColor="text-red-500"
          />

          <InfoCards
            className="!w-full"
            Icon={HiUsers}
            color="bg-yellow-500"
            text="User Account"
            counts={user?.name}
            textColor="text-yellow-500"
          />
        </div>
        <div className="rounded-lg border border-slate-100 shadow-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Index;
