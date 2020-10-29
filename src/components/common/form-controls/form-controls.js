import React from 'react';
import './form-controls.scss'

const FieldCreator = ({input, child, meta, ...props}) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={"form-control" + (hasError ? " error" : "")}>
      <div>
        {props.children}
      </div>
      <div>
        {hasError && <span>{meta.error}</span>}
      </div>
    </div>
  )
}

export const Textarea = props => {
  const {input, meta, child, ...restProps} = props;
  return <FieldCreator {...props}><textarea {...input} {...restProps}/></FieldCreator>
}

export const Input = props => {
  const {input, meta, child, ...restProps} = props;
  return <FieldCreator {...props}><input {...input} {...restProps}/></FieldCreator>
}