

import { getTokenData } from './token';

export type Role = ' ROLE_OPERATOR' | 'ROLE_ADMIN';



export const isAuthenticated = (): boolean => {
  const tokenData = getTokenData();
  return tokenData && tokenData.exp * 1000 > Date.now() ? true : false;
};

export const hasAnyRoles = (roles: Role[]): boolean => {
  if (roles.length === 0) {
    return true;
  }

  const tokenData = getTokenData();

  if (tokenData !== undefined) {
    return roles.some((role) => tokenData.authorities.includes(role));
  }
  return false;
};

/*
    if (tokenData !== undefined) {
      for (var i = 0; i < roles.length; i++) {
        if (tokenData.authorities.includes(roles[i])) {
          return true;
        }
      }
    }
  
    return false;
  }
  
  */
