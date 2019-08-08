import React from 'react'
import ListingSearchGroup from "./ListingSearchGroup";
import ListingBodyHeader from "./ListingBodyHeader";
import ListingArea from "./ListingArea";

class ListingBodySection extends React.Component{
    render() {
        return (
            <div className={"listing-body-section"} style={{backgroundColor: "rgb(239, 239, 239)", padding:"10px",marginTop:"10px", borderRadius:"3px"}}>
                <ListingSearchGroup/>
                <ListingBodyHeader/>
                <ListingArea/>
            </div>
        );
    }
}

export default ListingBodySection;