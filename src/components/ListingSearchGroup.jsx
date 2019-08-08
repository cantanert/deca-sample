import React from 'react'
import {Form} from 'semantic-ui-react'

const options = [
    { key: '0', text: 'test_city_1', value: 'test_city_1' },
    { key: '1', text: 'test_city_2', value: 'test_city_2' },
    { key: '2', text: 'test_city_3', value: 'test_city_3' },
]


class ListingSearchGroup extends React.Component {
    render() {
        return (
            <div className={"listing-search-group"} style={{padding:"10px", backgroundColor:"white", borderRadius:"3px"}}>
                <Form>
                    <Form.Group widths={"equal"}>
                        <Form.Select options={options} placeholder={"All Cities"} style={{backgroundColor:"rgb(237, 237, 237)",color:"black"}}/>
                        <Form.Select options={options} placeholder={"All Districts"} style={{backgroundColor:"rgb(237, 237, 237)",color:"black"}}/>
                        <Form.Select options={options} placeholder={"All Sports"} style={{backgroundColor:"rgb(237, 237, 237)",color:"black"}}/>
                        <Form.Button>Search For All Events</Form.Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default ListingSearchGroup;