import React from 'react';

const Field = ({ label, children, htmlFor, error }) => {
  const getChildId = (children) => {
    const child = React.Children.only(children);
    if ("id" in child?.props) {
      return child.props.id;
    }
    return undefined;
  };

  const id = htmlFor || getChildId(children);

  return (
    <div className='form-control'>
      {label && <label htmlFor={id} className='auth-label'>{label}</label>}
      {children}
      {!!error && <div role='alert' className='text-red-600'>{error.message}</div>}
    </div>
  );
};

export default Field;