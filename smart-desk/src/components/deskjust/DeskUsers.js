import React, { Component } from 'react';

class PeopleGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        'John Doe',
        'Jane Smith',
        'Alice Johnson',
        'Bob Williams',
        'Ella Davis',
        'Mike Brown',
        'Sarah Wilson',
        'GUEST',
      ],
      selectedPerson: null, // Initialize selectedPerson as null
    };
  }

  handlePersonClick = (person) => {
    // Set the selected person when a button is clicked
    this.setState({ selectedPerson: person });
  };

  render() {
    const { people, selectedPerson } = this.state;

    return (
      <div className="people-grid">
        <h2>Users</h2>
        <div className="grid">
          {people.map((person, index) => (
            <button
              key={index}
              className="fancy-button-2"
              onClick={() => this.handlePersonClick(person)}
            >
              {person}
            </button>
          ))}
        </div>
        {selectedPerson && (
          <div className="selected-person">
            <p>Selected User: {selectedPerson}</p>
          </div>
        )}
      </div>
    );
  }
}

export default PeopleGrid;
