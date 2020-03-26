/* eslint-disable no-console */
import { LocalStorageManager } from './localStorageManager';
import { SESSION_KEY } from '../utils/constants/sessionConstants';

export type SessionParams = { accessToken: string; tokenType: string };

const saveSession = () => ({
  save: (sessionParams: SessionParams): void => {
    const { accessToken, tokenType } = sessionParams;
    return LocalStorageManager.set(
      SESSION_KEY,
      JSON.stringify({ accessToken, tokenType })
    );
  }
});

const loadSession = (): { load: () => SessionParams | null } => ({
  load: (): SessionParams | null => {
    const token = LocalStorageManager.get(SESSION_KEY);
    if (!token) return null;
    return JSON.parse(token);
  }
});

const deleteSession = () => ({
  delete: () => {
    return LocalStorageManager.delete(SESSION_KEY);
  }
});

const isAuthenticated = () => ({
  authenticated: () => SessionManager.load() != null
});

const getHeaders = () => ({
  headers: () => {
    const session: SessionParams | null = SessionManager.load();
    if (!session) return null;
    const headers = `${session.tokenType} ${session.accessToken}`;
    return headers;
  }
});

const Session = () => ({
  ...saveSession(),
  ...loadSession(),
  ...deleteSession(),
  ...isAuthenticated(),
  ...getHeaders()
});

export const SessionManager = Session();
