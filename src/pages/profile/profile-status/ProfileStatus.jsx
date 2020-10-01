import React from 'react';

export class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
        {this.state.editMode &&
        <div>
          <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} type="text"/>
        </div>
        }
        {!this.state.editMode &&
        <div>
          <p onDoubleClick={this.activateEditMode}>{this.props.status}</p>
        </div>
        }
      </div>
    )
  }
}
