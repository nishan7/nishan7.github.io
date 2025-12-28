import React, { Component } from "react";

class Projects extends Component {
  render() {
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (project) {
        return (
          <div
            key={project.title}
            style={{
              margin: '10px',
              width: '280px'
            }}
          >
            {project.url ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="portfolio-item d-block">
                  <div className="foto" style={{ 
                    minHeight: '320px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div style={{ padding: '10px' }}>
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        style={{
                          marginBottom: '10px', 
                          width: '100%',
                          height: '160px',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          borderRadius: '8px'
                        }}
                      />
                      <p className="project-title-settings" style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', lineHeight: '1.2' }}>
                        {project.title}
                      </p>
                      {project.bullets && (
                        <ul className="project-bullets" style={{ 
                          fontSize: '10px', 
                          textAlign: 'left', 
                          paddingLeft: '14px', 
                          margin: '0',
                          lineHeight: '1.35',
                          color: '#333'
                        }}>
                          {project.bullets.map((bullet, index) => (
                            <li key={index} style={{ marginBottom: '3px' }}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </span>
              </a>
            ) : (
              <span className="portfolio-item d-block">
                <div className="foto" style={{ 
                  minHeight: '320px',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ padding: '10px' }}>
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      style={{
                        marginBottom: '10px', 
                        width: '100%',
                        height: '160px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        borderRadius: '8px'
                      }}
                    />
                    <p className="project-title-settings" style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', lineHeight: '1.2' }}>
                      {project.title}
                    </p>
                    {project.bullets && (
                      <ul className="project-bullets" style={{ 
                        fontSize: '10px', 
                        textAlign: 'left', 
                        paddingLeft: '14px', 
                        margin: '0',
                        lineHeight: '1.35',
                        color: '#333'
                      }}>
                        {project.bullets.map((bullet, index) => (
                          <li key={index} style={{ marginBottom: '3px' }}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </span>
            )}
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            maxWidth: '940px',
            margin: '0 auto'
          }}>
            {projects}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
