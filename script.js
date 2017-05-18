var IntlMixin       = ReactIntl.IntlMixin;
var FormattedNumber = ReactIntl.FormattedNumber;

var App = React.createClass({
    mixins: [IntlMixin],

    render: function () {
        return (
            <p>
                <FormattedNumber value={1000} style="currency" currency="USD" />
            </p>
            import React from 'react';
 
export default class ItemLister extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }
    
    componentDidMount() {
        fetch(https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange) 
            .then(result=> {
                this.setState({items:result.json()});
            });
    }
    
    render() {        
        return(
            <div>
                <div>Items:</div>
                { this.state.items.map(item=> { return <div>{http://item.name}</div>}) }          
            </div>  
        );
    }
}
        );
    }
});