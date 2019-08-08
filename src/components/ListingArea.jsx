import React from 'react'
import {Grid, Card, Icon, Button, Image} from 'semantic-ui-react'
import imageEx from '../images/itemThumSample.jpg'
import {Link} from "react-router-dom";
import axios from "axios";
import mockedResponse from "../data/mockedResponse"

class ListingArea extends React.Component {

    addListItemCard = () => {
        let mockedData = mockedResponse.Data;
        let arr = [];
        for(let i=0; i<mockedData.length; i++){
            let mockedItem = mockedData[i];
            arr.push(
                <Grid.Column width={4} style={{marginTop:"10px",paddingLeft:"4px",paddingRight:"4px"}}>
                    <Card>
                        <Image src={imageEx} wrapped ui={false}/>
                        <Card.Content>
                            <Card.Header style={{backgroundColor: "rgb(237, 237, 237)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "3px", padding: "5px", marginBottom: "5px", textAlign: "center", fontSize: "15px", minHeight: "50px"}}>{mockedItem.ActivityName}</Card.Header>
                            <Card.Meta>{mockedItem.StartDate}</Card.Meta>
                            <Card.Description style={{minHeight: "40px", maxHeight: "80px", overflow: "auto",margin: "5px 0px"}}>{mockedItem.Description}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                Sınırsız
                            </a>
                        </Card.Content>
                        <Card.Content extra>
                            <Link to={"/map/" + mockedItem.Id}>
                                <Button id={mockedItem.Id} fluid onClick={this.buttonClickHandler}>Mağaza Etkinliğini incele</Button>
                            </Link>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            )
        }
        return arr;
    };

    render() {
        return (
            <div className={"listing-area"} style={{paddingRight:"10px",paddingLeft:"10px"}}>
                <Grid>
                    <Grid.Row>
                        {this.addListItemCard()}
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default ListingArea;