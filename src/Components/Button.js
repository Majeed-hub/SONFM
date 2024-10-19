import React from 'react' ;
import './Button.css' ;

const Button = () => {
  const whitepaper = "/documents/whitePaper.pdf";
  return (
    <a
      href={whitepaper}
      download="whitePaper.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="main-button">Download White Paper</button>
    </a>
  );
}

export default Button;