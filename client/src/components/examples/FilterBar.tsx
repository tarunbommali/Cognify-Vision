import FilterBar from '../FilterBar';
import { useState } from 'react';

export default function FilterBarExample() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="p-6">
      <FilterBar
        searchPlaceholder="Search internships..."
        onSearchChange={(value) => console.log('Search:', value)}
        categories={["Web Dev", "AI/ML", "Cloud", "Data Science", "Mobile"]}
        activeCategory={activeCategory || undefined}
        onCategoryChange={setActiveCategory}
        sortOptions={[
          { value: "popular", label: "Most Popular" },
          { value: "recent", label: "Recently Added" },
          { value: "duration", label: "Duration" },
        ]}
        onSortChange={(value) => console.log('Sort:', value)}
        showAdvancedFilters={true}
      />
    </div>
  );
}
