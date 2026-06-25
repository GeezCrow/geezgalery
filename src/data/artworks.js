import demongirl from '../assets/demongirl.webp';
import lisandro from '../assets/lisandro.webp';
import dtiysFull     from '../assets/dtiys.webp';
import demongirlThumb from '../assets/demongirl_thumb.webp';
import dtiysThumb     from '../assets/dtiys_thumb.webp';

export const artworks = [
  { 
    image: demongirl,   // full para lightbox
    thumb: demongirlThumb,
    title: 'Succubus Girl',
    tag: '// digital',
    featured: true,
    isNew: true,
  },
  { 
    id: 2,
    image: dtiysFull,
    thumb: dtiysThumb,
    title: 'DTIYS Knives',
    tag: '// oc',
    featured: true,
    isNew: true,
  },
  { 
    id: 3, 
    image: lisandro, 
    title: 'Lysandro (My Sugar Love)', 
    tag: '// fanart',
    featured: true, 
    isNew: true 
  },
  
];