import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'


export default function BackgroundPage(){
    return(
        <div>

        <Card style={{ width: '100%', textAlign: "left", backgroundColor: "#b9d6c2", fontFamily: "cambria" }}>
        <div style={{top: "auto"}}>
        <Card.Body>
          <Card.Text style={{fontWeight: "bold", fontSize: "40px"}}>
            Order groceries for deliveries <br/>or pick up today
          </Card.Text>
          <Card.Text>
            Whatever you want from a local store, brough right to your door.
          </Card.Text>
        </Card.Body>
        <Form>
           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Control size="lg" type="text" placeholder="   Enter your address                                         ->" />
            </Form.Group>
        </Form>
  </div>
  </Card>
      <div >
            <img style={{ height: "258px", width: "20%", position: "absolute", right: "4px", top: "103px", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg" alt="Card" />
            </div>
      
      </div>
    )
} 


