import React from 'react'
import HeaderImageSample from '../images/headerImageSample.jpg'


class ListingHeaderSection extends React.Component{
    render() {
        return (
            <div className={"listing-header-section"}>
                <img src={HeaderImageSample} style={{width:"100%",borderRadius:"3px"}}/>
            </div>
        );
    }
}

export default ListingHeaderSection;