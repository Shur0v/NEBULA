
export interface Game {
  id: string;
  title: string;
  developer: string;
  year: number;
  rating: number;
  category: string;
  coverImage: string;
  description: string;
  isSponsored?: boolean;
  metadata: {
    players: string;
    platform: string;
    bitDepth: number;
  };
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export enum UIState {
  LOADING = 'LOADING',
  IDLE = 'IDLE',
  ERROR = 'ERROR',
  EMPTY = 'EMPTY'
}

export interface DesignTokens {
  colors: {
    voidBlack: string;
    deepSpacePurple: string;
    nebulaPurple: string;
    neonCyan: string;
    neonMagenta: string;
    electricViolet: string;
  };
}
