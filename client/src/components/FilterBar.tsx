import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export interface FilterBarProps {
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  categories?: string[];
  activeCategory?: string;
  onCategoryChange?: (category: string | null) => void;
  sortOptions?: { value: string; label: string }[];
  onSortChange?: (value: string) => void;
  showAdvancedFilters?: boolean;
}

export default function FilterBar({
  searchPlaceholder = "Search...",
  onSearchChange,
  categories = [],
  activeCategory,
  onCategoryChange,
  sortOptions = [],
  onSortChange,
  showAdvancedFilters = false,
}: FilterBarProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearchChange?.(value);
  };

  const clearSearch = () => {
    setSearchValue("");
    onSearchChange?.("");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-9 pr-9"
            data-testid="input-search"
          />
          {searchValue && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
              onClick={clearSearch}
              data-testid="button-clear-search"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {sortOptions.length > 0 && (
          <Select onValueChange={onSortChange}>
            <SelectTrigger className="w-full sm:w-48" data-testid="select-sort">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value} data-testid={`option-sort-${option.value}`}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {showAdvancedFilters && (
          <Button variant="outline" data-testid="button-filters">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
          </Button>
        )}
      </div>

      {categories.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Categories:</span>
          <Badge
            variant={!activeCategory ? "default" : "outline"}
            className="cursor-pointer hover-elevate"
            onClick={() => onCategoryChange?.(null)}
            data-testid="badge-category-all"
          >
            All
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="cursor-pointer hover-elevate"
              onClick={() => onCategoryChange?.(category)}
              data-testid={`badge-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
