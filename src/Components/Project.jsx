import React from 'react';
import PropTypes from 'prop-types';

function Project({
  author = 'Anonymous',
  title = 'Project Name',
  description = 'Project Description',
  url = '',
}) {
  return (
    <div>
      <h4>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}
        >
          {title}
        </a>
      </h4>
      <p>By: {author}</p>
      {description && <div style={{ paddingLeft: '1rem' }}><i>{description}</i></div>}
    </div>
  );
}

Project.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default Project;
