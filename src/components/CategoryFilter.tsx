import { motion } from "framer-motion";

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
            relative px-5 py-2.5 font-display text-sm uppercase tracking-wider transition-colors duration-300 border
            ${activeCategory === category
              ? "border-transparent text-background"
              : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
            }
          `}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-foreground"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;