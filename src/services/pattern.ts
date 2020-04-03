import { game } from '../config';

const p = `
-1-0/
0-01/
0010/
-11-/
`;

export const PatternService = {

  translatePattern: (raw: string): number[][] => {
    const pattern: number[][] = [];

    let temp: number[] = [];
    for (let i = 0; i < raw.length; i++) {
      if (raw[i] === '1') {
        temp.push(1);
      }
      else if (raw[i] === '0') {
        temp.push(0);
      }
      else if (raw[i] === '-') {
        temp.push(-1);
      }
      else if (raw[i] === '/') {
        pattern.push(temp);
        temp = [];
      }
    }

    return pattern;
  },

  calculateChallengeCanvas: (height: number, width: number): number[][] => {
    const pattern: number[][] = [];
    const cols: number = Math.round(height * 0.7 / game.tileSize);
    const rows: number = Math.round(width * 0.95 / game.tileSize);

    // Make an array with a pattern
    for (let i = 0; i < cols; i++) {
      const temp: number[] = [];
      for (let j = 0; j < rows; j++) {
        temp.push(0);
      }
      pattern.push(temp);
    }

    return pattern;
  },

  calculateFreestyleCanvas: (height: number, width: number): number[][] => {
    const pattern: number[][] = [];
    const cols: number = Math.round(height * 0.8 / game.tileSize);
    const rows: number = Math.round(width * 0.95 / game.tileSize);

    // Make an array with a pattern
    for (let i = 0; i < cols; i++) {
      const temp: number[] = [];
      for (let j = 0; j < rows; j++) {
        temp.push(0);
      }
      pattern.push(temp);
    }

    return pattern;
  },

  debugPrintPattern: (pattern: number[][]): void => {
    pattern.forEach((col: number[]) => {
      let temp: string = '';
      col.forEach((row: number) => {
        if (row === 1) {
          temp += ' [1]';
        }
        else if (row === 0) {
          temp += ' [0]';
        }
        else {
          temp += ' [-]';
        }
      });
      console.log(temp);
    });
  },

  debugPrintString: (pattern: number[][]): void => {
    console.log('-----------');
    let final: string = '';
    pattern.forEach((col: number[]) => {
      col.forEach((row: number) => {
        if (row === 1) {
          final += '1';
        }
        else if (row === 0) {
          final += '0';
        }
        else if (row === -1) {
          final += '-';
        }
      });
      final += '/';
    });
    console.log(final);
  },

};
