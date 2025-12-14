import React, { useState, useEffect } from 'react';

const StrategicContext = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/data/context.md')
      .then(res => res.text())
      .then(text => setContent(text));
  }, []);

  const parseMarkdown = (md) => {
    const lines = md.split('\n');
    const elements = [];
    let inParagraph = false;
    let paragraphText = [];

    lines.forEach((line, idx) => {
      if (line.startsWith('# ')) {
        if (inParagraph) {
          elements.push(<p key={`p-${idx}`} className="context-text">{paragraphText.join(' ')}</p>);
          paragraphText = [];
          inParagraph = false;
        }
        elements.push(<h1 key={idx} className="context-main-title">{line.substring(2)}</h1>);
      } else if (line.startsWith('## ')) {
        if (inParagraph) {
          elements.push(<p key={`p-${idx}`} className="context-text">{paragraphText.join(' ')}</p>);
          paragraphText = [];
          inParagraph = false;
        }
        elements.push(<h2 key={idx} className="context-section-title">{line.substring(3)}</h2>);
      } else if (line.startsWith('**') && line.includes(':**')) {
        if (inParagraph) {
          elements.push(<p key={`p-${idx}`} className="context-text">{paragraphText.join(' ')}</p>);
          paragraphText = [];
          inParagraph = false;
        }
        const parts = line.split(':**');
        const label = parts[0].substring(2);
        const text = parts[1].trim();
        elements.push(
          <p key={idx} className="context-highlight">
            <strong>{label}:</strong> {text}
          </p>
        );
      } else if (line.trim()) {
        paragraphText.push(line.trim());
        inParagraph = true;
      } else if (inParagraph) {
        elements.push(<p key={`p-${idx}`} className="context-text">{paragraphText.join(' ')}</p>);
        paragraphText = [];
        inParagraph = false;
      }
    });

    if (inParagraph) {
      elements.push(<p key="final" className="context-text">{paragraphText.join(' ')}</p>);
    }

    return elements;
  };

  return (
    <section className="strategic-context">
      <div className="container">
        <div className="context-grid">
          {parseMarkdown(content)}
        </div>
      </div>
    </section>
  );
};

export default StrategicContext;
