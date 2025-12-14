import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/data/vision.md')
      .then(res => res.text())
      .then(text => setContent(text));
  }, []);

  // Simple markdown parser for this specific format
  const parseMarkdown = (md) => {
    const lines = md.split('\n');
    const elements = [];
    let currentSection = null;

    lines.forEach((line, idx) => {
      if (line.startsWith('# ')) {
        elements.push(<h1 key={idx} className="hero-title">{line.substring(2)}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={idx} className="hero-subtitle">{line.substring(3)}</h2>);
      } else if (line.startsWith('**') && line.endsWith('**')) {
        const text = line.substring(2, line.length - 2);
        elements.push(<p key={idx} className="hero-highlight"><strong>{text}</strong></p>);
      } else if (line.trim()) {
        elements.push(<p key={idx} className="hero-text">{line}</p>);
      }
    });

    return elements;
  };

  return (
    <section className="hero">
      <div className="container">
        {parseMarkdown(content)}
      </div>
    </section>
  );
};

export default Hero;
