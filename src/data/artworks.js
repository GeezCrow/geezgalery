import demongirl from '../assets/demongirl.webp';
import lisandro from '../assets/lisandro.webp';
import dtiysFull     from '../assets/dtiys.webp';
import demongirlThumb from '../assets/demongirl_thumb.webp';
import dtiysThumb     from '../assets/dtiys_thumb.webp';

export const artworks = [
  { 
    image: demongirl,   // full para lightbox
    thumb: demongirlThumb,
    title: 'Demon Girl',
    tag: '// digital',
    featured: true,
    isNew: true,
  },
  { 
    id: 2,
    image: dtiysFull,
    thumb: dtiysThumb,
    title: 'DTIYS',
    tag: '// fanart',
    featured: true,
    isNew: true,
  },
  { 
    id: 3, 
    image: lisandro, 
    title: 'Knives', 
    tag: '// fanart',
    featured: true, 
    isNew: true 
  },
  
];