/* tslint:disable */
/* eslint-disable */
/**
 * Activate user request
 * @export
 * @interface ActivateUserRequest
 */
export interface ActivateUserRequest {
  /**
   *
   * @type {string}
   * @memberof ActivateUserRequest
   */
  token: string;
}
/**
 * Code model
 * @export
 * @interface Code
 */
export interface Code {
  /**
   *
   * @type {string}
   * @memberof Code
   */
  code: string;
  /**
   *
   * @type {Date}
   * @memberof Code
   */
  lastSavedAt: Date;
  /**
   *
   * @type {Language}
   * @memberof Code
   */
  language: Language;
}
/**
 * Code revision model
 * @export
 * @interface CodeRevision
 */
export interface CodeRevision {
  /**
   *
   * @type {string}
   * @memberof CodeRevision
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof CodeRevision
   */
  code: string;
  /**
   *
   * @type {string}
   * @memberof CodeRevision
   */
  message: string;
  /**
   *
   * @type {string}
   * @memberof CodeRevision
   */
  parentRevision?: string;
  /**
   *
   * @type {Language}
   * @memberof CodeRevision
   */
  language: Language;
  /**
   *
   * @type {Date}
   * @memberof CodeRevision
   */
  createdAt: Date;
}
/**
 * Create code revision request
 * @export
 * @interface CreateCodeRevisionRequest
 */
export interface CreateCodeRevisionRequest {
  /**
   *
   * @type {string}
   * @memberof CreateCodeRevisionRequest
   */
  code: string;
  /**
   *
   * @type {string}
   * @memberof CreateCodeRevisionRequest
   */
  message: string;
  /**
   *
   * @type {Language}
   * @memberof CreateCodeRevisionRequest
   */
  language: Language;
}
/**
 * Create map revision request
 * @export
 * @interface CreateMapRevisionRequest
 */
export interface CreateMapRevisionRequest {
  /**
   *
   * @type {string}
   * @memberof CreateMapRevisionRequest
   */
  map: string;
  /**
   *
   * @type {string}
   * @memberof CreateMapRevisionRequest
   */
  message: string;
}
/**
 * Create match request
 * @export
 * @interface CreateMatchRequest
 */
export interface CreateMatchRequest {
  /**
   *
   * @type {MatchMode}
   * @memberof CreateMatchRequest
   */
  mode: MatchMode;
  /**
   * User ID of the opponent
   * @type {string}
   * @memberof CreateMatchRequest
   */
  opponentId?: string;
  /**
   * Revision ID of the map
   * @type {string}
   * @memberof CreateMatchRequest
   */
  mapRevisionId?: string;
  /**
   * Revision of the code
   * @type {string}
   * @memberof CreateMatchRequest
   */
  codeRevisionId?: string;
}
/**
 * Current user profile model
 * @export
 * @interface CurrentUserProfile
 */
export interface CurrentUserProfile {
  /**
   *
   * @type {string}
   * @memberof CurrentUserProfile
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof CurrentUserProfile
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof CurrentUserProfile
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof CurrentUserProfile
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof CurrentUserProfile
   */
  country: string;
  /**
   *
   * @type {string}
   * @memberof CurrentUserProfile
   */
  college: string;
  /**
   *
   * @type {boolean}
   * @memberof CurrentUserProfile
   */
  isAdmin: boolean;
}
/**
 * External Login request
 * @export
 * @interface ExternalLoginRequest
 */
export interface ExternalLoginRequest {
  /**
   *
   * @type {string}
   * @memberof ExternalLoginRequest
   */
  provider: ExternalLoginRequestProviderEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum ExternalLoginRequestProviderEnum {
  Google = 'GOOGLE',
  Github = 'GITHUB',
}
/**
 * Forgot password request
 * @export
 * @interface ForgotPasswordRequest
 */
export interface ForgotPasswordRequest {
  /**
   *
   * @type {string}
   * @memberof ForgotPasswordRequest
   */
  email: string;
}
/**
 * Game model
 * @export
 * @interface Game
 */
export interface Game {
  /**
   *
   * @type {string}
   * @memberof Game
   */
  id: string;
  /**
   *
   * @type {number}
   * @memberof Game
   */
  destruction: number;
  /**
   *
   * @type {number}
   * @memberof Game
   */
  coinsUsed: number;
  /**
   *
   * @type {GameStatus}
   * @memberof Game
   */
  status: GameStatus;
  /**
   *
   * @type {Verdict}
   * @memberof Game
   */
  gameVerdict: Verdict;
}
/**
 * GameMap model
 * @export
 * @interface GameMap
 */
export interface GameMap {
  /**
   *
   * @type {string}
   * @memberof GameMap
   */
  map: string;
  /**
   *
   * @type {Date}
   * @memberof GameMap
   */
  lastSavedAt: Date;
}
/**
 * GameMap revision model
 * @export
 * @interface GameMapRevision
 */
export interface GameMapRevision {
  /**
   *
   * @type {string}
   * @memberof GameMapRevision
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof GameMapRevision
   */
  map: string;
  /**
   *
   * @type {string}
   * @memberof GameMapRevision
   */
  parentRevision?: string;
  /**
   *
   * @type {Date}
   * @memberof GameMapRevision
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof GameMapRevision
   */
  message: string;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum GameStatus {
  Idle = 'IDLE',
  Executing = 'EXECUTING',
  Executed = 'EXECUTED',
  ExecuteError = 'EXECUTE_ERROR',
}
/**
 * Model for Generic Error
 * @export
 * @interface GenericError
 */
export interface GenericError {
  /**
   *
   * @type {string}
   * @memberof GenericError
   */
  message?: string;
}
/**
 * Language of source files
 * @export
 * @enum {string}
 */
export enum Language {
  C = 'C',
  Cpp = 'CPP',
  Java = 'JAVA',
  Python = 'PYTHON',
}
/**
 * Leaderboard entry model
 * @export
 * @interface LeaderboardEntry
 */
export interface LeaderboardEntry {
  /**
   *
   * @type {PublicUser}
   * @memberof LeaderboardEntry
   */
  user: PublicUser;
  /**
   *
   * @type {UserStats}
   * @memberof LeaderboardEntry
   */
  stats: UserStats;
}
/**
 * Match model
 * @export
 * @interface Match
 */
export interface Match {
  /**
   *
   * @type {string}
   * @memberof Match
   */
  id: string;
  /**
   *
   * @type {Set<Game>}
   * @memberof Match
   */
  games: Set<Game>;
  /**
   *
   * @type {MatchMode}
   * @memberof Match
   */
  matchMode: MatchMode;
  /**
   *
   * @type {Verdict}
   * @memberof Match
   */
  matchVerdict: Verdict;
  /**
   *
   * @type {Date}
   * @memberof Match
   */
  createdAt: Date;
  /**
   *
   * @type {PublicUser}
   * @memberof Match
   */
  user1: PublicUser;
  /**
   *
   * @type {PublicUser}
   * @memberof Match
   */
  user2: PublicUser;
}
/**
 * Match Mode
 * @export
 * @enum {string}
 */
export enum MatchMode {
  Self = 'SELF',
  Manual = 'MANUAL',
  Auto = 'AUTO',
}
/**
 * Notification model
 * @export
 * @interface Notification
 */
export interface Notification {
  /**
   *
   * @type {string}
   * @memberof Notification
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Notification
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof Notification
   */
  content: string;
  /**
   *
   * @type {Date}
   * @memberof Notification
   */
  createdAt: Date;
  /**
   *
   * @type {boolean}
   * @memberof Notification
   */
  read: boolean;
}
/**
 * Password Login request
 * @export
 * @interface PasswordLoginRequest
 */
export interface PasswordLoginRequest {
  /**
   *
   * @type {string}
   * @memberof PasswordLoginRequest
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof PasswordLoginRequest
   */
  password: string;
}
/**
 * Login response with user token
 * @export
 * @interface PasswordLoginResponse
 */
export interface PasswordLoginResponse {
  /**
   * Bearer token
   * @type {string}
   * @memberof PasswordLoginResponse
   */
  token: string;
}
/**
 * Public user model
 * @export
 * @interface PublicUser
 */
export interface PublicUser {
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  country: string;
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  college: string;
  /**
   *
   * @type {number}
   * @memberof PublicUser
   */
  avatarId: number;
}
/**
 * Rating history model
 * @export
 * @interface RatingHistory
 */
export interface RatingHistory {
  /**
   *
   * @type {number}
   * @memberof RatingHistory
   */
  rating: number;
  /**
   *
   * @type {number}
   * @memberof RatingHistory
   */
  ratingDeviation: number;
  /**
   *
   * @type {Date}
   * @memberof RatingHistory
   */
  validFrom: Date;
}
/**
 * Register user request
 * @export
 * @interface RegisterUserRequest
 */
export interface RegisterUserRequest {
  /**
   *
   * @type {string}
   * @memberof RegisterUserRequest
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof RegisterUserRequest
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof RegisterUserRequest
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof RegisterUserRequest
   */
  password: string;
  /**
   *
   * @type {string}
   * @memberof RegisterUserRequest
   */
  passwordConfirmation: string;
  /**
   *
   * @type {string}
   * @memberof RegisterUserRequest
   */
  country: string;
  /**
   *
   * @type {string}
   * @memberof RegisterUserRequest
   */
  college: string;
  /**
   *
   * @type {number}
   * @memberof RegisterUserRequest
   */
  avatarId: number;
}
/**
 * Reset password request
 * @export
 * @interface ResetPasswordRequest
 */
export interface ResetPasswordRequest {
  /**
   *
   * @type {string}
   * @memberof ResetPasswordRequest
   */
  token: string;
  /**
   *
   * @type {string}
   * @memberof ResetPasswordRequest
   */
  password: string;
  /**
   *
   * @type {string}
   * @memberof ResetPasswordRequest
   */
  passwordConfirmation: string;
}
/**
 * Update current user profile request
 * @export
 * @interface UpdateCurrentUserProfile
 */
export interface UpdateCurrentUserProfile {
  /**
   *
   * @type {string}
   * @memberof UpdateCurrentUserProfile
   */
  name?: string | null;
  /**
   *
   * @type {string}
   * @memberof UpdateCurrentUserProfile
   */
  country?: string | null;
  /**
   *
   * @type {string}
   * @memberof UpdateCurrentUserProfile
   */
  college?: string | null;
  /**
   *
   * @type {number}
   * @memberof UpdateCurrentUserProfile
   */
  avatarId?: number | null;
}
/**
 * Update latest code request
 * @export
 * @interface UpdateLatestCodeRequest
 */
export interface UpdateLatestCodeRequest {
  /**
   *
   * @type {string}
   * @memberof UpdateLatestCodeRequest
   */
  code: string;
  /**
   *
   * @type {boolean}
   * @memberof UpdateLatestCodeRequest
   */
  lock?: boolean;
  /**
   *
   * @type {Language}
   * @memberof UpdateLatestCodeRequest
   */
  language: Language;
}
/**
 * Update latest map request
 * @export
 * @interface UpdateLatestMapRequest
 */
export interface UpdateLatestMapRequest {
  /**
   *
   * @type {string}
   * @memberof UpdateLatestMapRequest
   */
  map: string;
  /**
   *
   * @type {boolean}
   * @memberof UpdateLatestMapRequest
   */
  lock?: boolean;
}
/**
 * Update password request
 * @export
 * @interface UpdatePasswordRequest
 */
export interface UpdatePasswordRequest {
  /**
   *
   * @type {string}
   * @memberof UpdatePasswordRequest
   */
  oldPassword: string;
  /**
   *
   * @type {string}
   * @memberof UpdatePasswordRequest
   */
  password: string;
  /**
   *
   * @type {string}
   * @memberof UpdatePasswordRequest
   */
  passwordConfirmation: string;
}
/**
 * User stats model
 * @export
 * @interface UserStats
 */
export interface UserStats {
  /**
   *
   * @type {number}
   * @memberof UserStats
   */
  rating: number;
  /**
   *
   * @type {number}
   * @memberof UserStats
   */
  wins: number;
  /**
   *
   * @type {number}
   * @memberof UserStats
   */
  losses: number;
  /**
   *
   * @type {number}
   * @memberof UserStats
   */
  ties: number;
}
/**
 * Match/Game verdict
 * @export
 * @enum {string}
 */
export enum Verdict {
  Player1 = 'PLAYER1',
  Player2 = 'PLAYER2',
  Tie = 'TIE',
}
