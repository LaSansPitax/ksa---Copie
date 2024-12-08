import React, { useState } from 'react';
import '../styles/Dropdown.css';

function Dropdown({ title, content, isList = false, customClassName = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collaps ${customClassName}`}>
      <p className="title_description" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span>
          <i className={`fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
        </span>
      </p>
      {isOpen && (
        isList ? (
          <ul className="list">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="description_content">{content}</p>
        )
      )}
    </div>
  );
}

export default Dropdown;
