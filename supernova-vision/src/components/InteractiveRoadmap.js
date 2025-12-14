import React, { useState, useEffect } from 'react';

const InteractiveRoadmap = () => {
  const [roadmapData, setRoadmapData] = useState({ milestones: [] });
  const [expandedMilestone, setExpandedMilestone] = useState(null);
  const [expandedQuarter, setExpandedQuarter] = useState(null);

  useEffect(() => {
    fetch('/data/roadmap.json')
      .then(res => res.json())
      .then(data => setRoadmapData(data));
  }, []);

  const toggleMilestone = (milestoneId) => {
    if (expandedMilestone === milestoneId) {
      setExpandedMilestone(null);
      setExpandedQuarter(null);
    } else {
      setExpandedMilestone(milestoneId);
      setExpandedQuarter(null);
    }
  };

  const toggleQuarter = (quarterKey) => {
    setExpandedQuarter(expandedQuarter === quarterKey ? null : quarterKey);
  };

  return (
    <section className="roadmap">
      <div className="container">
        <h2 className="section-title">Roadmap: 2026 Milestones</h2>
        
        <div className="milestones-timeline">
          {roadmapData.milestones.map((milestone) => (
            <div key={milestone.id} className="milestone-container">
              <div 
                className={`milestone-card ${expandedMilestone === milestone.id ? 'expanded' : ''}`}
                onClick={() => toggleMilestone(milestone.id)}
                style={{ borderLeftColor: milestone.color }}
              >
                <div className="milestone-header">
                  <div>
                    <h3>{milestone.name}</h3>
                    <p className="milestone-description">{milestone.description}</p>
                  </div>
                  <div className="milestone-timeline">{milestone.timeline}</div>
                </div>
                <button className="expand-indicator">
                  {expandedMilestone === milestone.id ? '−' : '+'}
                </button>
              </div>

              {expandedMilestone === milestone.id && (
                <div className="quarters-container">
                  {milestone.quarters.map((quarter, qIdx) => {
                    const quarterKey = `${milestone.id}-${quarter.quarter}`;
                    const isExpanded = expandedQuarter === quarterKey;

                    return (
                      <div key={qIdx} className="quarter-card">
                        <div 
                          className="quarter-header"
                          onClick={() => toggleQuarter(quarterKey)}
                        >
                          <div>
                            <h4>{quarter.quarter} <span className="period">({quarter.period})</span></h4>
                            <p className="quarter-focus">Focus: {quarter.focus}</p>
                          </div>
                          <button className="quarter-expand">
                            {isExpanded ? '−' : '+'}
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="quarter-details">
                            <div className="detail-section">
                              <h5>Why This Quarter?</h5>
                              <p>{quarter.why}</p>
                            </div>

                            {quarter.shipping && quarter.shipping.length > 0 && (
                              <div className="detail-section">
                                <h5>Shipping</h5>
                                <ul>
                                  {quarter.shipping.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {quarter.partners && quarter.partners.length > 0 && (
                              <div className="detail-section">
                                <h5>Partner Milestones</h5>
                                <ul>
                                  {quarter.partners.map((partner, idx) => (
                                    <li key={idx}>{partner}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {quarter.dependencies && quarter.dependencies.length > 0 && (
                              <div className="detail-section">
                                <h5>Dependencies</h5>
                                <ul>
                                  {quarter.dependencies.map((dep, idx) => (
                                    <li key={idx}>{dep}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {quarter.outcomes && quarter.outcomes.length > 0 && (
                              <div className="detail-section">
                                <h5>Success Criteria</h5>
                                <ul>
                                  {quarter.outcomes.map((outcome, idx) => (
                                    <li key={idx}>{outcome}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveRoadmap;
