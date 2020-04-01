import { theme } from '../config';

export const MiscService = {
  getRandomColor: (): string => {
    const options: string[] = [theme.blue, theme.purple, theme.red, theme.yellow, theme.secondary, theme.tertiary, theme.quaternary];
    const random: number = Math.floor(Math.random() * options.length) + 0;
    return options[random];
  }
};
