export const environment = {
  production: true,
  authConfig: {
    client_id: 'c_684f6f62-8b89-4616-bc07-6f698668f4ff',
    server_host: 'https://aac.platform.smartcommunitylab.it',
    redirect_url: 'it.smartcommunitylab.comuneintasca.trento://auth/callback',
    end_session_redirect_url: 'it.smartcommunitylab.comuneintasca.trento://auth/endsession',
    scopes: 'openid email profile',
    automaticSilentRenew: true,
    pkce: true,
  }
};
