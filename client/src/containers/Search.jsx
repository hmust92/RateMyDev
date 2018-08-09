import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/davidcomponents/Container";
import SearchForm from "../components/davidcomponents/SearchForm";
import SearchResults from "../components/davidcomponents/SearchResults";
import axios from 'axios';
import Auth from '../modules/Auth';
import UserResults from "../components/davidcomponents/UserResults";


class Search extends Component {
  state = {
    search: "",
    tags: [],
    stackOverflowSkills: [],
    error: "",
    results: []
  };

  // When the component mounts, get a list of all available skills and update this.s  tate.breeds
  componentDidMount() {
    API.getSkillsList()
    .then(res => {
      console.log(res)
      this.setState({ stackOverflowSkills: res.data.items })
    })
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSearchUser = (event) => {

    var tagData = this.state.tags.map((tag) => {
      return `tags[]=${tag}`
    }).join("&").replace(/#/g, '%23')

    console.log(tagData)

    axios.get(`/api/users?${tagData}`,
    {
      headers: {
        'Authorization': `bearer ${Auth.getToken()}`,
        'Content-type': 'application/json',
      }
    })
    .then(response => {
      this.setState({results: response.data})
      console.log(this.state.results)
    })
  };

  handleFormSubmit = event => {
    const { tags } = this.state;
    event.preventDefault();
    this.setState({ tags: [...tags, this.state.search] });
    
    // Search.render()
  };

  handleBtnClick = event => {
    console.log(event);
  };
  
  render() {
    return (
      <div>
      <Container style={{ minHeight: "80%" }}>
      <h1 className="text-center">Find a Developer to Rate or Hire!</h1>

      <SearchForm
      handleFormSubmit={this.handleFormSubmit}
      handleInputChange={this.handleInputChange}
      stackOverflowSkills={this.state.stackOverflowSkills}

      />

      {this.state.tags.length>0 && <SearchResults 
        tags={this.state.tags} 
        handleSearchUser={this.handleSearchUser}
        />}

        <UserResults results={this.state.results}/>


        </Container>
        </div>
        );
  }
}

export default Search;
