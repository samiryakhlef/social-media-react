import "./share.css"

export default function Share(){
    return(
        <div className="share">
           <div className="shareWrapper">
               <div className="shareTop">
                   <img className="shareProfileImage" src="https://picsum.photos/id/1/200/300" alt="" />
                   <input type="text" className="shareInput" placeholder="Votre commentaire"/>
               </div>
               <hr className="shareHr"></hr>
               <div className="shareBottom">
                   <div className="shareOptions">
                       <span className="shareOptionsText"><i className="bi bi-collection">   Photo   Vidéo</i></span>
                   </div>
                   <div className="shareOptions">
                       <span className="shareOptionsText"><i className="bi bi-hand-thumbs-up"> Like</i></span>
                   </div>
                   <div className="shareOptions">
                       <span className="shareOptionsText"><i className="bi bi-share-fill"> Partager</i></span>
                   </div>
                   <div className="shareOptions">
                       <span className="shareOptionsText"><i className="bi bi-chat"> Commenter</i></span>
                   </div>
               </div>
           </div>
        </div>
    )
}