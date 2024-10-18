import React from 'react'
import './Blog.css' ;


function Blog({ item , image }) {
    return (
      <a href={item.link}>
        <div className="blog">
          <img src={image} alt="decoration" />
          <div>
            <h1>{item.title}</h1>
            {/* <p>{item.description}</p> */}
          </div>
        </div>
      </a>
    );
}

export default Blog ;
