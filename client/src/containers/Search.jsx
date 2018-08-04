import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/davidcomponents/Container";
import SearchForm from "../components/davidcomponents/SearchForm";
import SearchResults from "../components/davidcomponents/SearchResults";
import Alert from "../components/davidcomponents/Alert";

class Search extends Component {
  state = {
    search: "",
    stackOverflowSkills: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available skills and update this.state.breeds
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

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Find a Developer to Rate or Hire!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            stackOverflowSkills={this.state.stackOverflowSkills}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
