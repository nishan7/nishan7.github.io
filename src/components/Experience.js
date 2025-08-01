import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fas fa-briefcase experience-icon"></i>}
            key={i}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {work.logo && (
                <div style={{ minWidth: 56, maxWidth: 56, minHeight: 56, maxHeight: 56, background: "#F1F5F9", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 20, boxShadow: "0 2px 8px rgba(37,99,235,0.07)", alignSelf: "center" }}>
                  <img
                    src={work.logo}
                    alt={work.company + ' logo'}
                    style={{ width: "40px", height: "40px", objectFit: "contain", display: "block" }}
                  />
                </div>
              )}
              <div style={{ flex: 1 }}>
                <div style={{ textAlign: "left", marginBottom: "4px" }}>
                  {mainTech}
                </div>
                <h3
                  className="vertical-timeline-element-title"
                  style={{ textAlign: "left" }}
                >
                  {work.title}
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  style={{ textAlign: "left" }}
                >
                  {work.company}
                </h4>
                <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
              </div>
            </div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
