import "./sidebar.css"

export default function Sidebar()  {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <span className="sidbarListItemText"><i className="bi bi-rss">    Flux RSS</i></span>
                    </li>
                    <li className="sidebarListItem">
                        <span className="sidbarListItemText"><i className="bi bi-play-circle">    Video</i></span>
                    </li>
                    <li className="sidebarListItem">
                        <span className="sidbarListItemText"><i className="bi bi-people">    Groupes</i></span>
                    </li>
                    <li className="sidebarListItem">
                        <span className="sidbarListItemText"><i className="bi bi-bookmark">    Bookmark</i></span>
                    </li>
                    <li className="sidebarListItem">
                        <span className="sidbarListItemText"><i className="bi bi-question-square">    Questions</i></span>
                    </li>
                </ul>
                    <button className="sidebarButton">Voir plus...</button>
                    <hr className="sidebarHr"></hr>
                <ul className="sidebarFriendsList">
                    <li className="sidebarFriends">
                        <img className="sidebarFriendsImage" src="https://picsum.photos/id/1026/200/300" alt=""></img>
                        <span className="sidebarFriendsName">Samir Yakhlef</span>
                    </li>
                    <li className="sidebarFriends">
                        <img className="sidebarFriendsImage" src="https://picsum.photos/id/1026/200/300" alt=""></img>
                        <span className="sidebarFriendsName">Samir Yakhlef</span>
                    </li>
                    <li className="sidebarFriends">
                        <img className="sidebarFriendsImage" src="https://picsum.photos/id/1026/200/300" alt=""></img>
                        <span className="sidebarFriendsName">Samir Yakhlef</span>
                    </li>
                    <li className="sidebarFriends">
                        <img className="sidebarFriendsImage" src="https://picsum.photos/id/1026/200/300" alt=""></img>
                        <span className="sidebarFriendsName">Samir Yakhlef</span>
                    </li>
                </ul>
            </div>
        </div>
    )

}