import React, { useState } from "react";

const TaskFilter = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="task-filter">
      <button
        className={`filter-button${selectedFilter === "all" ? " active" : ""}`}
        onClick={() => handleFilterChange("all")}
        style={
          selectedFilter === "all"
            ? { color: "black", fontSize: "19.5px", padding: "10px" }
            : {}
        }
      >
        All
      </button>
      <button
        className={`filter-button${
          selectedFilter === "completed" ? " active" : ""
        }`}
        onClick={() => handleFilterChange("completed")}
        style={
          selectedFilter === "completed"
            ? { color: "black", fontSize: "16px", padding: "10px" }
            : {}
        }
      >
        Completed
      </button>
      <button
        className={`filter-button${
          selectedFilter === "incomplete" ? " active" : ""
        }`}
        onClick={() => handleFilterChange("incomplete")}
        style={
          selectedFilter === "incomplete"
            ? { color: "black", fontSize: "16px", padding: "10px" }
            : {}
        }
      >
        Incomplete
      </button>
    </div>
  );
};

export default TaskFilter;
