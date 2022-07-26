import Topbar from "../../components/topbar/Topbar";
import RightBar from "../rightbar/Rightbar";
import Feed from "../feed/Feed";
import Sidebar from "../sidebar/Sidebar";


export default function Home(){
    return (
        <>
            <Topbar />
               <div className="home-container">
                   <Sidebar />
                   <Feed />
                   <RightBar />
               </div>

        </>
    )
}