import SlideBar from "../components/SlideBar"
import Dashboardview from "../components/DashboardView";

export default function Home() {
  return (
    <div className="">
    <div className="flex overflow-scroll ">
      <div className="basis-[12%] h-[100vh]">
        <SlideBar />
      </div>
      <div className="basis-[88%] border overflow-scroll h-[100vh]">
          <Dashboardview /> 
        <div>
          {/* <Outlet></Outlet> */}
        </div>
      </div>


    </div>
  </div>
  );
}
