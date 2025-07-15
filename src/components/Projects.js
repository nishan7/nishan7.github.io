import React, { Component } from "react";

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-3 project-card-fixed"
            key={projects.title}
            style={{
              height: '150px !important',
              marginBottom: '1rem'
            }}
          >

            {projects.url ? (
              <a href={projects.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', width: '100%', height: '100%', display: 'block' }}>
                <span className="portfolio-item d-block" style={{ height: '100% !important' }}>
                  <div className="foto" style={{ height: '100% !important' }}>
                    <div style={{ height: '100% !important', padding: '3px !important' }}>
                      <img
                        src={projects.images[0]}
                        alt="projectImages"
                        height="100"
                        style={{
                          marginBottom: 0, 
                          paddingBottom: 0, 
                          position: 'relative',
                          width: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          borderRadius: '8px'
                        }}
                      />
                      <p className="project-title-settings mt-1" style={{ marginTop: '3px !important', fontSize: '12px', marginBottom: '0 !important' }}>
                        {projects.title}
                      </p>
                    </div>
                  </div>
                </span>
              </a>
            ) : (
              <span className="portfolio-item d-block" style={{ height: '100% !important' }}>
                <div className="foto" style={{ height: '100% !important' }}>
                  <div style={{ height: '100% !important', padding: '3px !important' }}>
                    <img
                      src={projects.images[0]}
                      alt="projectImages"
                      height="100"
                      style={{
                        marginBottom: 0, 
                        paddingBottom: 0, 
                        position: 'relative',
                        width: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        borderRadius: '8px'
                      }}
                    />
                    <p className="project-title-settings mt-1" style={{ marginTop: '3px !important', fontSize: '12px', marginBottom: '0 !important' }}>
                      {projects.title}
                    </p>
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
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto justify-content-center">{projects}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
