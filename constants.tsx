
import { Game, Category, DesignTokens } from './types';

export const TOKENS: DesignTokens = {
  colors: {
    voidBlack: '#020104',
    deepSpacePurple: '#140A24',
    nebulaPurple: '#22103A',
    neonCyan: '#35E7FF',
    neonMagenta: '#FF3DF2',
    electricViolet: '#9B5CFF',
  }
};

export const CATEGORIES: Category[] = [
  { id: 'all', label: 'All Hits', icon: '🎮' },
  { id: 'platformer', label: 'Platformers', icon: '🍄' },
  { id: 'rpg', label: 'RPG Classics', icon: '⚔️' },
  { id: 'racing', label: 'Retro Racing', icon: '🏎️' },
  { id: 'fighting', label: 'Arcade Fighting', icon: '🥋' },
  { id: 'shooter', label: 'Space Shooters', icon: '🚀' },
  { id: 'puzzle', label: 'Brain Hacks', icon: '🧩' },
];

export const MOCK_GAMES: Game[] = [
  {
    id: '1',
    title: 'Neon Drift 1984',
    developer: 'VaporSoft',
    year: 1984,
    rating: 4.8,
    category: 'racing',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    description: 'Blaze through wireframe streets in this ultimate synthwave racer. Features 12 retro-futuristic tracks and a pulsing soundtrack.',
    metadata: { players: '1-2 Players', platform: 'Arcade', bitDepth: 16 },
    isSponsored: true
  },
  {
    id: '2',
    title: 'Cyber Quest II',
    developer: 'MegaPixel',
    year: 1991,
    rating: 4.9,
    category: 'rpg',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    description: 'The definitive 16-bit RPG experience. Lead a band of rebels against the silicon empire in over 40 hours of gameplay.',
    metadata: { players: 'Single Player', platform: 'SNES', bitDepth: 16 }
  },
  {
    id: '3',
    title: 'Pixel Paladin',
    developer: 'Sword Labs',
    year: 1988,
    rating: 4.5,
    category: 'platformer',
    coverImage: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800',
    description: 'Classic side-scrolling action. Defeat the pixel monsters and rescue the princess of the Low-Res Kingdom.',
    metadata: { players: 'Single Player', platform: 'NES', bitDepth: 8 }
  },
  {
    id: '4',
    title: 'Star Fighter Z',
    developer: 'Galactic Arts',
    year: 1982,
    rating: 4.2,
    category: 'shooter',
    coverImage: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
    description: 'The game that defined the space shooter genre. Defend your sector against waves of alien invaders.',
    metadata: { players: '1-2 Players', platform: 'Arcade', bitDepth: 8 }
  },
  {
    id: '5',
    title: 'Iron Fist Turbo',
    developer: 'Kombat Korp',
    year: 1993,
    rating: 4.7,
    category: 'fighting',
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
    description: 'Street-level combat at its finest. Master complex combos and special moves to become the ultimate champion.',
    metadata: { players: '1-2 Players', platform: 'Arcade', bitDepth: 32 }
  },
  {
    id: '6',
    title: 'Sonic Velocity',
    developer: 'Wind Team',
    year: 1991,
    rating: 4.9,
    category: 'platformer',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    description: 'The fastest hedgehog in history returns. Race through loop-de-loops and collect golden rings.',
    metadata: { players: 'Single Player', platform: 'Genesis', bitDepth: 16 }
  },
  {
    id: '7',
    title: 'Tetra-Matrix 4',
    developer: 'Logic Bound',
    year: 1989,
    rating: 4.6,
    category: 'puzzle',
    coverImage: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800',
    description: 'Experience the block-dropping phenomenon that swept the globe, now with enhanced 4-player matrix modes.',
    metadata: { players: '1-4 Players', platform: 'Gameboy', bitDepth: 8 }
  },
  {
    id: '8',
    title: 'Space Invader Prime',
    developer: 'Void Invaders',
    year: 1978,
    rating: 4.3,
    category: 'shooter',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    description: 'The absolute genesis of arcade gaming. How long can you hold the line against the infinite swarm?',
    metadata: { players: '1 Player', platform: 'Arcade', bitDepth: 4 }
  },
  {
    id: '9',
    title: 'Super Jump Bros',
    developer: 'Pipe Masters',
    year: 1985,
    rating: 5.0,
    category: 'platformer',
    coverImage: 'https://images.unsplash.com/photo-1531067746378-80b91790f975?auto=format&fit=crop&q=80&w=800',
    description: 'Often cited as the greatest game ever made. Explore 8 worlds of pure platforming magic.',
    metadata: { players: '1-2 Players', platform: 'NES', bitDepth: 8 }
  },
  {
    id: '10',
    title: 'Chrono Rift',
    developer: 'Time Keepers',
    year: 1995,
    rating: 4.9,
    category: 'rpg',
    coverImage: 'https://images.unsplash.com/photo-1605898399741-949e2954820a?auto=format&fit=crop&q=80&w=800',
    description: 'A masterpiece of time-travel storytelling and deep tactical combat. Change history, save the future.',
    metadata: { players: 'Single Player', platform: 'SNES', bitDepth: 16 }
  },
  {
    id: '11',
    title: 'Asphalt Burner',
    developer: 'Rubber Soul',
    year: 1992,
    rating: 4.4,
    category: 'racing',
    coverImage: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=800',
    description: 'Illegal street racing in high-def 16-bit color. Outrun the cops and earn your spot in the hall of fame.',
    metadata: { players: '1-2 Players', platform: 'Arcade', bitDepth: 16 }
  },
  {
    id: '12',
    title: 'Ghost Manor',
    developer: 'Fear Factory',
    year: 1990,
    rating: 4.1,
    category: 'platformer',
    coverImage: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=800',
    description: 'Spooky, challenging, and filled with secrets. Navigate the haunted mansion and defeat the Ghost King.',
    metadata: { players: 'Single Player', platform: 'NES', bitDepth: 8 }
  }
];
