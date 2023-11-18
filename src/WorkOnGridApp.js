import ReactCustomDropdownLayout from "./reactDropdownLayout/ReactCustomDropdownLayout";
import ReactFlexLayout from "./reactFlexlayout";
import "./WorkOnGridApp.css";

const WorkOnGridApp = ({ header }) => {
  return (
    <div>
      <h1 className="top-header">{header}</h1>
      <div className="question-header">
        <p>1. Question</p>
        <ReactFlexLayout columns={3} numberOfBoxes={12} />
      </div>
      <div className="question-header">
        <p>2. Question</p>
        <ReactCustomDropdownLayout />
      </div>
    </div>
  );
};

export default WorkOnGridApp;
