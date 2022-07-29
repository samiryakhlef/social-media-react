import Topbar from "../../components/topbar/Topbar";
import RightBar from "../rightbar/Rightbar";
import Feed from "../feed/Feed";
import Sidebar from "../sidebar/Sidebar";
import "./home.css"


export default function Home(){
    return (
        <>
            <Topbar />
               <div className="homeContainer">
                   <Sidebar />
                   <Feed />
                   <RightBar />
               </div>
        </>
    )
}