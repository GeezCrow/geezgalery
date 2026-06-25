// src/components/FullGalleryTab.jsx
import { useState } from 'react';
import SectionHeader from './UI/SectionHeader';
import Lightbox from './UI/Lightbox';
import MasonryFilters from './UI/MasonryFilters';
import MasonryCount from './UI/MasonryCount';
import CustomGrid from './UI/CustomGrid';

export default function FullGalleryTab({ gallery2 }) {
  const [selectedArt, setSelectedArt] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const allTags = ['all', ...new Set(gallery2.map(a => a.tag.replace('// ', '')))];

  const filtered = activeFilter === 'all'
    ? gallery2
    : gallery2.filter(a => a.tag.replace('// ', '') === activeFilter);

  return (
    <>
      <SectionHeader label=">> full gallery" />

      <MasonryFilters
        tags={allTags}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <MasonryCount showing={filtered.length} total={gallery2.length} />

      <CustomGrid gallery2={filtered} onItemClick={setSelectedArt} />

      {selectedArt && (
        <Lightbox art={selectedArt} onClose={() => setSelectedArt(null)} />
      )}
    </>
  );
}
