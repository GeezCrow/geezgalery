// src/components/UI/MasonryFilters.jsx
export default function MasonryFilters({ tags, activeFilter, onFilterChange }) {
  return (
    <div className="masonry-filters">
      {tags.map(tag => (
        <button
          key={tag}
          className={`filter-btn${activeFilter === tag ? ' active' : ''}`}
          onClick={() => onFilterChange(tag)}
        >
          {tag === 'all' ? '★ all' : `// ${tag}`}
        </button>
      ))}
    </div>
  );
}
