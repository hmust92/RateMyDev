import React from "react";
import "./SearchResults.css";

const SearchResults = props => (
	<div className="skillsContainer">
		<br/>
		{/* <hr className="searchDivider"/> */}
		<span>
			<label className="selectedSkills">Selected Skills:</label> 
			{props.tags.map(tag => (
				<ul className="skillTag" key={tag}>
					<li>{tag}</li>
				</ul>
				))}
		</span>
		<button 
			type="submit"
			onClick={props.handleSearchUser}
			className="btn btn-success searchButton">
			Search
		</button>
		<hr className="searchDivider"/>
		<br/>
	</div>
	);

export default SearchResults;
