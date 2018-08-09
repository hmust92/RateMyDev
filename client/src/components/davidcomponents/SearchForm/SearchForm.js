import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="skill">Developer Name or Specific Skill:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="stackOverflowSkill"
        list="stackOverflowSkills"
        type="text"
        className="form-control"
        placeholder="ex: Jane Smith OR javascript, css, html"
        id="stackOverflowSkill"
      />
      <datalist id="stackOverflowSkills">
        {props.stackOverflowSkills.map(stackOverflowSkill => <option value={stackOverflowSkill.name} key={stackOverflowSkill.name} />)}
      </datalist>
      <button
        id="addSkillButton"
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Add Skill
      </button>
    </div>
  </form>
);

export default SearchForm;
