import React from 'react';
import './form-controls.scss'


export const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={"form-control" + (hasError ? " error" : "")}>
      <div>
        <textarea {...input} {...props}/>
      </div>
      <div>
        {hasError && <span>{meta.error}</span>}
      </div>
    </div>
  )
}

export const Input = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error

  return (
    <div>
      <div className={"form-control" + (hasError ? " error" : "")}>
        <div>
          <input {...input} {...props}/>
        </div>
        <div>
          {hasError && <span>{meta.error}</span>}
        </div>
      </div>
    </div>
  )
}