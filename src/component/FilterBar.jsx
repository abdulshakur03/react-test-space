export default function FilterBar({
  searchQuery,
  activeCategory,
  onSearchChange,
  onCategorySelect,
}) {
  const categories = ["All", "Tech", "Design", "Business"];

  return (
    <div className="filter-bar">
      {/* Text input triggers the handler when typing */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search projects..."
      />

      {/* Category tabs trigger the handler on click */}
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
