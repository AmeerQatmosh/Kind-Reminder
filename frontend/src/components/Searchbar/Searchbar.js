// SearchBar.js
import React, {useState} from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './Searchbar.css'; // Import the custom CSS for styling

const SearchBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleSearch = () => {
        setIsExpanded(!isExpanded);
      };
  return (
    <Form className={`d-flex align-items-center ${isExpanded ? "expanded" : "collapsed"}`}>
      <FormControl
        type="search"
        placeholder="Search"
        className={`search-input ${isExpanded ? "show" : "hide"}`}
        aria-label="Search"
      />
      <Button
        variant="outline-primary"
        className="search-toggle-button rounded-circle"
        onClick={toggleSearch}
      >
        <i className="bi bi-search"></i>
      </Button>
    </Form>
  );
};

export default SearchBar;
