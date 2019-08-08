import React from 'react'
import MapContainer from "./MapContainer";

class MappingRightSection extends React.Component {
    render() {
        return (
            <div className={"right-section"}>
                <MapContainer />
            </div>
        );
    }
}

export default MappingRightSection;