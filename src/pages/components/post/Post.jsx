import "./post.css"

export default function post(){
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfilImg" src="https://picsum.photos/id/1/200/300" alt=""></img>
                        <span className="postUsername">Samir Yakhlef</span>
                        <span className="postDate">il y a 5mn</span>
                    </div>
                    <div className="postTopRight">
                        <i className="bi bi-list"></i>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey ceci est mon premier post</span>
                    <img className="postImg" src="https://picsum.photos/id/237/200/300" alt=""></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <i className="bi bi-balloon-heart fs-5"> Aimer</i>
                        <i className="bi bi-hand-thumbs-up fs-5"> Like</i>
                        <span className="postLikeIcon">32 presonnes aime</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">Post Comment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}