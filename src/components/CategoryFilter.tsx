interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-5 py-2.5 font-display text-sm uppercase tracking-wider transition-all duration-300
            ${activeCategory === category 
              ? "bg-foreground text-background" 
              : "bg-transparent text-muted-foreground hover:text-foreground border border-border hover:border-foreground"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;