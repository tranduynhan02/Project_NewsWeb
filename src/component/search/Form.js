import React from 'react';
import { Link } from 'react-router-dom';


class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.key = 0;
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });

        this.forceUpdate(); // reload lai component
    }

    render() {
        return (
            <div key={this.key} className="d-flex float-end" style={{margin: "-12px 24px 0 0"}}>
                <form id="form_search" onSubmit={handleClick}>
                    <input id="text" type="text" name="name" value={this.state.name} onChange={this.handleInputChange} style={{float:"left",width:180}} />
                </form>
                <Link to={`/search/${this.state.name}`}><button style={
                    {borderRadius:2,border:'none',backgroundColor:"gray",color:"white",fontSize:12,height:30}
                }>Tìm kiếm</button></Link>
            </div>
        );
    }
}

function handleClick(event) {
    let newUrl = document.getElementById("text").value;
    window.location.assign(`/search/${newUrl}`) ;
    window.location.reload();
}

export default MyComponent;
