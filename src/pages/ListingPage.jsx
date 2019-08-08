 import React from 'react'
 import ListingHeaderSection from "../components/ListingHeaderSection";
 import ListingBodySection from "../components/ListingBodySection";
 import MappingPage from "./MappingPage";

 class ListingPage extends React.Component{
     render() {
         return(
             <div className={"ui container listing-page"}>
                <ListingHeaderSection/>
                <ListingBodySection/>
             </div>
         );
     }
 }

 export default ListingPage;