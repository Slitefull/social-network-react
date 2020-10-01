import React from 'react';
import { connect } from 'react-redux';
import { updateStatus } from '../../../redux/profile-reducer';

export class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
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
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = e => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        { this.state.editMode &&
        <div>
          <input onChange = { this.onStatusChange } autoFocus = { true } onBlur = { this.deactivateEditMode }
                 value = { this.state.status } type = "text" />
        </div>
        }
        { !this.state.editMode &&
        <div>
          <p onDoubleClick = { this.activateEditMode }>{ this.props.status }</p>
        </div>
        }
      </div>
    )
  }
}

export const ProfileStatusContainer = connect(null, {updateStatus})(ProfileStatus)
