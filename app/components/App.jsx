import React from 'react';
import uuid from 'node-uuid';

import Notes from './Notes.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }
  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button className="button button--primary" onClick={this.addNote}>+</button>

        <div className="container clearfix">
          <div className="col xs-col-3">
            <Notes notes={notes} onEdit={this.editNote} onDelete={this.deleteNote} />
          </div>
        </div>
      </div>
    );
  }

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  };

  editNote = (id, task) => {
    const notes = this.state.notes.map(note => {
      if(note.id === id && task) {
        note.task = task;
      }

      return note;
    });

    this.setState({notes});
  };

  deleteNote = (id) => {
    this.setState({
      notes: this.state.notes.filter( note => note.id !== id)
    });
  };
}
