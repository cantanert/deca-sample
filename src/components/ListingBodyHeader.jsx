import React from 'react'
import {Form, Checkbox} from 'semantic-ui-react'

class ListingBodyHeader extends React.Component {
    render() {
        return (
            <div className={"listing-body-header"} style={{backgroundColor: "white", marginTop:"10px", overflow:"auto", padding:"10px", borderRadius:"3px"}}>
                <div style={{float:"left"}}>Tüm Etkinlikler</div>
                <Form style={{float:"right"}}>
                    <Form.Field>
                        <Checkbox label='Geçmiş Etkinlikleri Göster' />
                    </Form.Field>
                </Form>
            </div>
        );
    }
}

export default ListingBodyHeader;