export interface IPlayerData {
  nickName: string;
  artistPoints: number;
  gamesPoints: number;
  watchPoints: number;
}

export interface IGameInfo {
  type: 'artist' | 'watcher';
  opponentName: string;
  taskName: string;
  pointsAwarded: number;
}

export interface IGuessData {
  value: string;
  isLiked: boolean;
};