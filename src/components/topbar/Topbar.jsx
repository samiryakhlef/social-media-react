import "./topbar.css";

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Social Truth</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <i className="bi bi-search fs-4 mx-3"></i>
                    <input
                        placeholder="Rechercher un ami, un message ou une vidéo..."
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Accueil</span>
                    <i className="bi bi-house fs-5"></i>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">


                        <span className="topbarIcon"><i className="bi bi-chat-left-text fs-5"></i></span>

                    </div>
                    <div className="topbarIconItem">

                        <span className="topbarIcon"><i className="bi bi-person fs-5"></i></span>
                    </div>
                    <div className="topbarIconItem">

                        <span className="topbarIcon"><i className="bi bi-bell fs-5"></i></span>
                    </div>
                </div>
                <img src="https://picsum.photos/200" alt="" className="topbarImg"/>
            </div>
        </div>
    );
}