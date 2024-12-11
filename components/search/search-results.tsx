"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { mockSearchResults } from "@/lib/mock-data";

interface SearchResultsProps {
  query: string;
  onClose: () => void;
}

export function SearchResults({ query, onClose }: SearchResultsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const filteredResults = mockSearchResults.filter(result =>
    result.title.toLowerCase().includes(query.toLowerCase()) ||
    result.description.toLowerCase().includes(query.toLowerCase())
  );

  if (query.length === 0) return null;

  return (
    <Card
      ref={ref}
      className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-md overflow-hidden z-50"
    >
      <div className="max-h-96 overflow-y-auto">
        {filteredResults.length > 0 ? (
          <div className="p-2 space-y-2">
            {filteredResults.map((result, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-50 rounded cursor-pointer"
                onClick={() => {
                  // Handle result click
                  onClose();
                }}
              >
                <h4 className="font-medium">{result.title}</h4>
                <p className="text-sm text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 text-center text-gray-500">
            No results found for "{query}"
          </div>
        )}
      </div>
    </Card>
  );
}