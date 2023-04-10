import React from "react";
import { HiAcademicCap } from "react-icons/hi";
import timelineElements from "../public/Data/timelineElements";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Education = () => {
  const timelineStyle = {
    width: "70%",
    margin: "0 auto",
  };

  return (
    <div
      className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-center "
      style={timelineStyle}
    >
      <div className="text-2xl my-8 ">Education </div>
      <VerticalTimeline lineColor={"#7F00FF"}>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="text-lg font-medium text-gray-400"
              icon={<HiAcademicCap />}
              iconClassName="bg-[#7F00FF] text-white rounded-full p-3"
              contentStyle={{
                background: "white",
                border: "1px solid #7F00FF",
                borderRadius: "0.5rem",
                padding: "1.5rem",
              }}
              contentArrowStyle={{ borderRight: "7px solid #7F00FF" }}
            >
              <h3 className="vertical-timeline-element-title text-xl text-gray-900">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle text-gray-700 p-2">
                {element.location}
              </h5>

              <p id="description" className="mt-2 text-gray-900">
                {element.description}
              </p>
              <p className="text-gray-900">{element.detail}</p>
              <p className="text-gray-500">{element.status}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
