import React from 'react';

function Description({des}) {
    const title = des.title;
    const description = des.description;
    return (
        <div class="bold description">{title + ': '}
          <span>{description}</span>
        </div>
    );
}

export default Description;