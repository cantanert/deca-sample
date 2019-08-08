import React from 'react'
import imgSample from '../images/itemThumSample.jpg'
import {Button} from "semantic-ui-react";
import mockedData from "../data/mockedResponse"

const itemSectionStyles = {
    flexDirection: "column",
    display: "flex",
    boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 1px",
backgroundColor: "rgb(255, 255, 255)",
position: "relative",
padding: "10px",
margin: "10px",
borderWidth: "1px",
borderStyle: "solid",
borderColor: "rgb(234, 234, 234)",
borderImage: "initial",
borderRadius: "13px",
overflow: "hidden"
}

const styles2 = {
    display: "flex",
width: "100%",
justifyContent: "center",
alignItems: "center",
color: "rgb(66, 66, 66)",
backgroundColor: "rgb(243, 243, 243)",
margin: "20px 0px 10px",
padding: "15px 15px 5px"
}

const eventLocationStyles = {
    display: "flex",
flexDirection: "column",
textAlign: "left",
position: "relative",
padding: "20px 10px",
borderBottom: "1px solid rgb(237, 237, 237)",
overflow: "auto"
}

const eventButtonStyles= {
    display: "flex",
boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 1px",
backgroundColor: "rgb(255, 255, 255)",
borderWidth: "1px",
borderStyle: "solid",
borderColor: "rgb(234, 234, 234)",
borderImage: "initial",
borderRadius: "13px",
padding: "10px",
margin: "10px"
}

class MappingLeftSectionItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: null,
            response: mockedData,
            isFree: false
        }
    }

    componentDidMount() {
        let prop = this.props.id;
        this.setState({
            id: prop
        })
        // make request and set response to state
    }

    decideIfIsFree(param){
        if(param===true){
            this.setState({
                isFree: true
            })
        }
    }



    render() {
        return (
            <div className={"mapping-left-section-item" } style={itemSectionStyles} >
                <div className={"mapping-left-section-item-info"}>
                    <img className={"event-img"} src={imgSample} style={{height:"200px"}}/>
                    <div className={"event-date"} style={styles2}>
                        <div style={{marginRight: "10px"}}>
                            <span className={"event-day"} style={{fontSize: "45px", fontWeight: "700"}}>11</span>
                        </div>
                        <div style={{position: "relative", top: "-5px"}}>
                            <div style={{color: "rgb(81, 81, 81)"}}>
                                <span style={{marginRight: "5px"}}>Ağustos</span>
                                <span style={{    margin: "0", padding: "0", fontFamily: "Roboto Condensed,sans-serif", outline: "none !important"}}>2019</span>
                            </div>
                            <div style={{margin: "0", padding: "0", fontFamily: "Roboto Condensed,sans-serif", outline: "none!important"}}>
                                <span style={{color: "rgb(179, 179, 179)", margin: "0px 2px"}}>15:00</span>
                                <span style={{color: "rgb(179, 179, 179)", margin: "0px 2px"}}>-</span>
                                <span style={{color: "rgb(179, 179, 179)", margin: "0px 2px"}}>16:00</span>
                            </div>
                        </div>
                    </div>
                    <div className="event-type" style={{    padding: "10px", borderBottom: "1px solid rgb(237, 237, 237)"}}>
                        <div style={{textAlign: "left"}}>
                            <span style={{fontSize: "16px", fontWeight: "700", color: "rgb(21, 21, 21)", marginBottom: "5px"}}>Decathlon Mağaza Etkinliği</span>
                        </div>
                        <div style={{textAlign: "left"}}>
                            <span style={{color: "rgb(137, 137, 137)", fontWeight: "300"}}>Ücretli Etkinlik</span>
                            <span style={{    color: "rgb(236, 102, 7)", fontWeight: "700", marginLeft: "5px"}}>₺</span></div>
                    </div>
                    <div className={"event-desc"} style={{display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                        position: "relative",
                        padding: "20px 10px",
                        borderBottom: "1px solid rgb(237, 237, 237)",
                        overflow: "auto"}}>
                        <span style={{fontSize: "16px",fontWeight: "700",color: "rgb(21, 21, 21)",marginBottom: "5px"}}>Basket Atma Yarışması - Ağustos</span>
                        <span style={{color: "rgb(137, 137, 137)", fontWeight: "300"}}>Basket Atma Yarışması</span>
                    </div>
                    <div className={"event-location"} style={eventLocationStyles}>
                        <span style={{fontSize: "16px",fontWeight: "700",color: "rgb(21, 21, 21)",marginBottom: "5px"}}>Konum</span>
                        <span style={{color: "rgb(137, 137, 137)", fontWeight: "300"}}>Eğitim Mahallesi Mithatpaşa Caddesi Yanyolu, Bahçelerarası Mahallesi, EGE PARK BALCUVA FASHION AND, SHOPPING CENTER No:44, 35330 Balçova/İzmir, Turkey</span>
                    </div>
                    <div className={"event-location"} style={eventLocationStyles}>
                        <span style={{fontSize: "16px",fontWeight: "700",color: "rgb(21, 21, 21)",marginBottom: "5px"}}>Katılımcı Sayısı</span>
                        <span style={{color: "rgb(137, 137, 137)", fontWeight: "300"}}>Etkinliğin Katılımcı Sınırı Bulunmamaktadır</span>
                    </div>
                </div>
                <div className={"mapping-left-section-item-button"} style={eventButtonStyles}>
                        <Button style={{backgroundColor: "rgb(0, 114, 181)", color: "white"}} fluid>Etkinliğe katıl</Button>
                </div>
            </div>
        );
    }
}

export default MappingLeftSectionItem;