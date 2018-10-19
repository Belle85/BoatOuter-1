import React, {Component} from "react";
import { withRouter } from 'react-router-dom'
import PropTypes from "prop-types";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";

// import { SearchForm } from "../../components/SearchForm";
// import { throws } from "assert";
// import { AsyncParallelBailHook } from "tapable";
import { Input, FormBtn } from "../../components/Form";


class Home extends Component {
  state = {
      boats: [], 
      // searchBoats: ""
      package: "",
      date: "",
      passengers: "",
      activity: ""
      // results: []
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  // componentDidMount() {
  //   this.loadBoats();
  // }

  // loadBoats = () => {
  //   API.getBoats()
  //     .then(res =>
  //       this.setState({ boats: res.data, type: "", date: "", passengers: "", activity: "" }))
  //       // this.setState({ results: res.data.data }))
  //       .catch(err => console.log(err));
  // };
        // const response = await fetch('/api/boats');
        // const body = await response.json();
    
        // if (response.status !== 200) throw Error(body.message);
    
        // return body;
     
  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  handleSharedClicked = () => {
    this.setState({
      package: 'shared'
    });
  };

  handlePrivateClicked = () => {
    this.setState({
      package: 'private'
    });
  };
    
  handleFormSubmit = event => {
    event.preventDefault();
    // debugger;

    if (this.state.package && this.state.date && this.state.passengers) {
    //   API.saveBoat({
    //     type: this.state.type,
    //     date: this.state.date,
    //     passengers: this.state.passengers,
    //     activity: this.state.activity
    // })
        // .then(res => this.loadBoats())
        // .catch(err => console.log(err));

    this.props.history.push('/boats', {
      pathname: '/boats',
      state:
      { 
        package: this.state.package,
        date: this.state.date,
        passengers: this.state.passengers,
        activity: this.state.activity
      }
    });
 }
  };

  render() {
    return (
        <Container fluid>
          <Row>
            <Col size="12">
              <Jumbotron>
                <h1>Discover the freedom of boating</h1>
                <p>Plan your next water adventure for less</p>
              </Jumbotron>
              <div id='container'>
              <button id='shared' onClick={this.handleSharedClicked}>Shared</button>
              <button id='private' onClick={this.handlePrivateClicked}>Private</button>
              </div>
              {/* <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              /> */}
              <form id='searchForm' onSubmit={this.handleFormSubmit}>
                <Input
                  value={this.state.date}
                  onChange={this.handleInputChange}
                  name="date"
                  list="dates"
                  type="date"
                  placeholder="Date (required)"
                  id="dateSelect"
                  />
                <Input
                  value={this.state.passengers}
                  onChange={this.handleInputChange}
                  name="passengers"
                  type="integer"
                  placeholder="Passengers (required)"
                  />
                <select 
                defaultValue={this.state.activity} 
                onChange={this.handleChange} 
                name='activity'
                >
                {/* <option disabled selected value>Select activity</option> */}
                  <option value="Cruising">Cruising</option>
                  <option value="Fishing">Fishing</option>
                  <option value="Watersports">Watersports</option>
                </select>
          
             

  <FormBtn 
  type="submit"
  onClick={this.props.handleFormSubmit}
  // type="success"
  className="btn btn-success"
  >
  Search
  </FormBtn>
            
    
      </form> 

             
              




          </Col>
        </Row>
      </Container>
    );
  }


    
}
  

export default withRouter(Home);