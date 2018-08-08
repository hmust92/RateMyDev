import React from "react";
import "./SearchResults.css";

const SearchResults = props => (
	<div>
	{props.tags.map(tag => (
		<div key={tag}>
		<p>{tag}</p>
		</div>
		))}
	<button 
	type="submit"
	onClick={props.handleSearchUser}
	className="btn btn-success"
	>
	Search
	</button>
	</div>
	);

export default SearchResults;
