import React, { useState, useEffect } from 'react';

const PersonasGrid = () => {
  const [personas, setPersonas] = useState({ personas: [] });

  useEffect(() => {
    fetch('/data/personas.json')
      .then(res => res.json())
      .then(data => setPersonas(data));
  }, []);

  return (
    <section className="personas">
      <div className="container">
        <h2 className="section-title">Who We're Serving</h2>
        <div className="personas-grid">
          {personas.personas.map((category, idx) => (
            <div key={idx} className="persona-category">
              <div className="persona-category-header" style={{ borderLeftColor: category.color }}>
                <span className="persona-icon">{category.icon}</span>
                <h3>{category.category}</h3>
              </div>
              <div className="persona-types">
                {category.types.map((type, typeIdx) => (
                  <div key={typeIdx} className="persona-card">
                    <h4>{type.name}</h4>
                    <div className="persona-detail">
                      <strong>Pain:</strong>
                      <p>{type.pain}</p>
                    </div>
                    <div className="persona-detail">
                      <strong>Solution:</strong>
                      <p>{type.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasGrid;
