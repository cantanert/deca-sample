import React from 'react'
import {Grid,GridColumn,GridRow} from "semantic-ui-react";
import MappingLeftSection from "../components/MappingLeftSection";
import MappingRightSection from "../components/MappingRightSection";
import mockedData from '../data/mockedResponse'

class MappingPage extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            id: "",
            responseData: mockedData.Data
        }
    }

    componentDidMount() {
        let pathVariable = this.props.match.params.id;
        this.setState({
            id: pathVariable
        });

    }



    render() {
        return (
            <div className={"mapping-page"}>
                <Grid style={{height:"400px"}}>
                    <GridRow style={{height: "100vh"}}>
                        <GridColumn width={4}>
                            <MappingLeftSection id={this.state.responseData[0].Id}/>
                        </GridColumn>
                        <GridColumn width={12}>
                            <MappingRightSection/>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </div>
        );
    }
}

export default MappingPage;