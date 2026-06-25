// src/data/socials.js
//
// Lista de redes sociales que se muestra en SocialTab.
// Cada entrada puede tener un `avatar` (imagen) o, si no hay avatar,
// se usa el `icon` (emoji) como respaldo.

import Twt  from '../assets/pfp-twitter.webp';
import Inst from '../assets/pfp-instagram.webp';
import Teg  from '../assets/pfp-telegram.webp';

export const socials = [
  {
    id: 'twitter',
    name: 'Twitter',
    username: '@Kiddo026',
    url: 'https://x.com/Kiddo026',
    icon: '🐦',       // usado si no hay avatar
    avatar: Twt,      // opcional
  },
  {
    id: 'instagram',
    name: 'Instagram',
    username: '@geeztronaut',
    url: 'https://www.instagram.com/geeztronaut?igsh=NHhmaDFtNzhmYWVk',
    icon: '📷',
    avatar: Inst,     // sin avatar → se mostraría el ícono
  },
  {
    id: 'telegram',
    name: 'Telegram',
    username: 'Darko´s Shack',
    url: 'https://t.me/geezgalery',
    icon: '🐙',
    avatar: Teg,      // opcional
  },
];
