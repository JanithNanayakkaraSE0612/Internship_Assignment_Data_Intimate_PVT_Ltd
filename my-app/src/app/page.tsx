import SideBar from '@/components/Sidebar'
import Dashboardview from '@/components/Dashboardview'

export default function Home() {
  return (
    <main className="">
         <div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
          <SideBar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
          {/* <Dashboardview /> */}
          <div>
            {/* <Outlet></Outlet> */}
          </div>
        </div>


      </div>
    </main>
  );
}
