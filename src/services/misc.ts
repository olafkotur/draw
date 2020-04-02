import { theme, game } from '../config';

export const MiscService = {
  getRandomColor: (): string => {
    const options: string[] = [theme.blue, theme.purple, theme.red, theme.yellow, theme.secondary, theme.tertiary, theme.quaternary];
    const random: number = Math.floor(Math.random() * options.length) + 0;
    return options[random];
  },

  formatTime: (remaining: number): string => {
    const minutes: number = Math.floor(remaining / 60);
    const seconds: number = remaining - (60 * minutes);
    return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
  },

  calculateCanvasHeight: (size: number, margin: number): number => {
    return (size * game.tileSize) + (size * margin);
  },
};
