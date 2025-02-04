import firebase from 'firebase';

export interface IAuth {
  signInWithGitHubForClosedBeta(): Promise<void>;
  subscribeAuthStatus(callback: (user: firebase.User | null) => void): void;
}
