import React, {useEffect, useState} from 'react';

export const ProfileStatusWithHooks = ({updateStatus, ...props}) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => setStatus(props.status), [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(status)
  }

  const onStatusChange = e => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {editMode &&
      <div>
        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
      </div>
      }
      {!editMode &&
      <div>
        <p onDoubleClick={activateEditMode}>{props.status}</p>
      </div>
      }
    </div>
  )
}