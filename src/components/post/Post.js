
import Card from 'react-bootstrap/Card';

export default function Post() {

    return (
        <div class="container d-flex justify-content-around">
            <div class="card-post">
                <Card.Body>
                    <Card.Title>titre du post</Card.Title>
                    <Card.Text>
                        text du post
                    </Card.Text>
                </Card.Body>
                <Card style={{width: '12rem'}}>
                <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/300" />
                 </Card>
                <div className="badge">
                    <a href="#" className="badge-text mx-1">Aimer</a>
                    <a href="#" className="badge-text mx-1">Commenter</a>
                    <a href="#" className="badge-text mx-1">Partager</a>
                </div>
            </div>
            <div className="card-post">
                <Card.Body>
                    <Card.Title>titre du post</Card.Title>
                    <Card.Text>
                        text du post
                    </Card.Text>
                </Card.Body>
                <Card style={{width: '12rem'}}>
                    <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/300"/>
                </Card>
                <div class="badge">
                    <a href="#" className="badge-text mx-1">Aimer</a>
                    <a href="#" className="badge-text mx-1">Commenter</a>
                    <a href="#" className="badge-text mx-1">Partager</a>
                 </div>
            </div>
            <div className="card-post">
                <Card.Body>
                    <Card.Title>titre du post</Card.Title>
                    <Card.Text>
                        text du post
                    </Card.Text>
                </Card.Body>
                <Card style={{width: '12rem'}}>
                    <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/300"/>
                </Card>
                <div className="badge">
                    <a href="#" className="badge-text mx-1">Aimer</a>
                    <a href="#" className="badge-text mx-1">Commenter</a>
                    <a href="#" className="badge-text mx-1">Partager</a>
                </div>
            </div>
        </div>
    )}