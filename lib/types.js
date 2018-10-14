// @flow

import type Q from 'q';

export type AuthConfig = {
    url?: string;
    clientId?: string,
    redirectUri?: string;
    issuer?: string;
    authorizeUrl?: string;
    userinfoUrl?: string;
    ajaxRequest?: any;
}

export class OktaAuth {
    constructor(config: AuthConfig)
    token: Token
    tokenManager: TokenManager
    signIn(options: Credentials): Q.Promise<Transaction>
    psignOut(): Q.Promise<any>
}

export interface Credentials {
    username: string;
    password: string;
}

export interface Transaction {
    status: string;
    sessionToken: string;
    cancel(): Q.Promise<Transaction>;
}

export interface OAuthOptions {
    responseType: string | string[];
    sessionToken?: string;
    scopes?: string[];
    responseMode?: string;
}

export interface Token {
    getWithoutPrompt(oauthOptions: OAuthOptions): Q.Promise<any>;
    getWithPopup(oauthOptions: OAuthOptions): Q.Promise<any>;
    getWithRedirect(oauthOptions?: OAuthOptions): void
    parseFromUrl(): Q.Promise<any>;
    decode(idTokenString: string): string
    refresh(tokenToRefresh: string): Q.Promise<string>;
    getUserInfo(accessTokenObject: string): Q.Promise<any>;
    verify(idTokenObject: string): Q.Promise<any>;
}

export interface TokenManager {
    add(key: string, token: string): void;
    get(key: string): string;
    remove(key: string): void;
    clear(): void;
    refresh(key: string): void;
    on(event: 'expired' | 'error' | 'refreshed', callback: Function, context?: any);
    off(event: 'expired' | 'error' | 'refreshed', callback: Function);
}

export type XHR {
    responseText?: {};
    status: number;
}

export type ServerError {
    errorSummary: string;
    errorCode: string;
    errorLink: string;
    errorId: string;
    errorCauses: string;
}

export type HttpRequestOption {
    url: string;
    method: string;
    args: string;
    saveAuthnState: string;
    accessToken: string;
    cacheResponse: boolean;
    header: string
}

export type Claim = {
  iat: number;
  exp: number;
  aud: string;
  iss: string;
  nonce: string;
}

export type ValidateClaimOption = {
  clientId: string;
  issuer: string;
  nonce: string;
  ignoreSignature: boolean;
}

export type TokenObject {
    accessToken?: string;
    idToken?: string;
    scopes: Array<string>;
}

export type OktaLink {
    href: string;
}

export type OAuthParams {
    clientId: string;
    redirectUri?: string;
    responseType?: 'id_token' | 'token';
    responseMode?: 'okta_post_message' | 'fragment' | 'query' | 'form_post';
    state?: string;
    nonce?: string;
    scopes?: Array<string>;
    ignoreSignature?: boolean;
    display?: 'page';
    sessionToken?: string;
    maxAge?: number;
    idp?: string;
}

export type OAuthUserOptions = {
    timeout: number;
    popupTitle: string;
}

export type SystemConfig = {
  STATE_TOKEN_COOKIE_NAME: 'oktaStateToken',
  DEFAULT_POLLING_DELAY: 500,
  DEFAULT_MAX_CLOCK_SKEW: 300,
  DEFAULT_CACHE_DURATION: 86400,
  FRAME_ID: 'okta-oauth-helper-frame',
  REDIRECT_OAUTH_PARAMS_COOKIE_NAME: 'okta-oauth-redirect-params',
  REDIRECT_STATE_COOKIE_NAME: 'okta-oauth-state',
  REDIRECT_NONCE_COOKIE_NAME: 'okta-oauth-nonce',
  TOKEN_STORAGE_NAME: 'okta-token-storage',
  CACHE_STORAGE_NAME: 'okta-cache-storage',
  SDK_VERSION: '2.1.0'
}

type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT'
type ApiLinkHints = {
    allow: Array<HttpMethod>
}
export type ApiLink = {
    hints: ApiLinkHints;
    href: string;
}
