export interface IPlayerData {
  nickName: string;
  artistPoints: number;
  gamesPoints: number;
  watchPoints: number;
}

export interface IGameInfo {
  type: string;
  opponentName: string;
  taskName: string;
  pointsAwarded: number;
}

export interface IGuessData {
  value: string;
  isLiked: boolean;
};

export interface IChallenge {
  name: string;
  points: number;
}