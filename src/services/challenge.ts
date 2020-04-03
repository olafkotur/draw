import { HelperService } from "./helper";
import { IGameInfo, IChallenge } from "../models";
import { game } from '../config';
import { names } from '../imports/names';
import { challenges } from '../imports/challenges';
import { guesses } from '../imports/bot';

export const ChallengeService = {

  generateGameInfo: (): IGameInfo => {
    const challenge: IChallenge = challenges[HelperService.getRandomNumber(0, challenges.length - 1)];
    return {
      type: game.playerTypes[HelperService.getRandomNumber(0, game.playerTypes.length)],
      opponentName: names[HelperService.getRandomNumber(0, names.length - 1)],
      taskName: challenge.name,
      pointsAwarded: challenge.points
    };
  },

  checkForWin: (game: IGameInfo, guess: string): boolean => {
    if (game.taskName.includes(guess)) {
      return true;
    }
    return false;
  },


  startGuessBot: (game: IGameInfo, previousGuesses: string[]): string => {
    const available: string[] = guesses[game.taskName].filter((guess: string) => !previousGuesses.includes(guess));
    if (available.length >= 1) {
      return available[0];
    }
    return game.taskName;
  },

};

