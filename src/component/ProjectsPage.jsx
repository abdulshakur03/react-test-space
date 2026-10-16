import { useState } from "react";
import FilterBar from "./FilterBar";
export default function ProjectsPage() {
  // State lives here in the parent
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div>
      <h1>Explore Projects</h1>

      {/* Passing state and handlers as props */}
      <FilterBar
        searchQuery={searchQuery}
        activeCategory={activeCategory}
        onSearchChange={setSearchQuery}
        onCategorySelect={setActiveCategory}
      />
    </div>
  );
}
