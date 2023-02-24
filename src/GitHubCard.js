import Card from 'react-bootstrap/Card'

export default function GitHubCard() {
    return (
        <Card style={{width: '200px'}}>
            <Card.Img variant="top" src='octocat.png'/>
            <Card.Body>
                <Card.Title>@Gspence01</Card.Title>
                <Card.Text>Hey! I am a software development student in SDSU's coding bootcamp! :) </Card.Text>
            </Card.Body>
        </Card>
    )
}