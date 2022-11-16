export interface ZohoAuthentication {
    data: {
      access_token: string;
      api_domain: string;
      token_type: string;
      expires_in: number;
    };
  }