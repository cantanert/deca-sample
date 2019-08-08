import React from 'react';
import {Grid,GridRow,GridColumn,Icon} from "semantic-ui-react";

class mappingLeftSectionHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    headerButtonsHandler = (e) => {
        console.log(e.target);
    }

    render() {
        return (
            <div className={"left-section-header"}>
                <Grid>
                    <GridRow>
                        <GridColumn width={8} style={{textAlign:"center", padding:"5px",borderBottom:"2px solid #dbd222", backgroundColor:"#ffe843"}} onClick={this.headerButtonsHandler}>
                            <a href={"#"} style={{display:"inherit"}} ><Icon name={"male"} size={"big"} color={"blue"}/></a>

                        </GridColumn>
                        <GridColumn width={8} style={{textAlign:"center", padding:"5px"}} onClick={this.headerButtonsHandler}>
                            <a href={"#"} style={{display:"inherit"}} ><Icon name={"building"} size={"big"} color={"blue"}/></a>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </div>
        );
    }
}

export default mappingLeftSectionHeader;