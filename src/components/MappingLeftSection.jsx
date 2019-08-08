import React from 'react'
import LeftSectionHeader from "./MappingLeftSectionHeader";
import MappingLeftSectionItem from "./MappingLeftSectionItem";

class MappingLeftSection extends React.Component {
    constructor(props){
        super(props);
        this.state={
            eventId: ""
        }
    }

    componentDidMount() {
        let prop = this.props.idProp;
        this.setState({
           eventId: prop
        });
    }

    render() {
        return (
            <div className={"left-section"}>
                <LeftSectionHeader/>
                <MappingLeftSectionItem id={this.props.id}/>
            </div>
        );
    }
}

export default MappingLeftSection;