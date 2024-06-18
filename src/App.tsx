import './styles.scss';
import React from 'react';
import data from './data.json';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="search emoji">
          🔎
        </span>
        Filter/Search List
      </h1>
      <h2>Create a UI component that can search a list</h2>
      <ul>
        <li>
          Please use React and Typescript to create a list that can be filtered
          by user input. The initial state is a text input field and a list
          displaying all the data.
        </li>
        <li>
          The data to search from is returned by a certain API. For this
          challenge, you'll use fake data provided in the json file. The
          search/filtering is done by the client side.
        </li>
        <li>
          The data are some data fields with category information. The list
          should display the data fields grouped by the categories. If a data
          field doesn't specify a category, use 'other'.
        </li>
        <li>
          User should be able to type in and filter BOTH the categories and the
          data fields.
        </li>
        <li>
          They can use spaces to separate multiple search terms and the order
          doesn't matter. The filtering is not case sensitive. (eg. 'na emp' can
          find 'Employee name', but not 'Employee Id')
        </li>
        <li>
          If only a category name but no data fields under it match, that
          category should still be displayed in the results, with 'No data'
          under it. If nothing match, display 'No data' as the final results.
        </li>
        <li>
          The list items should be actionable and are keyboard accessible.
          Imagine they can trigger other actions. Let user know they are
          clickable.
        </li>
        <li>Style the component in the end if you have time.</li>
      </ul>
      <div className="filter-container"></div>
    </div>
  );
};

export default App;
