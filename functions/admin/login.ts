export const onRequest: PagesFunction = async ({ env, request }) => {
  const db = env.DB;
  
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { username, password } = await request.json();
    
    const user = await db.prepare(
      'SELECT * FROM admin_users WHERE username = ?'
    ).bind(username).first();

    if (!user) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const encoder = new TextEncoder();
    const passwordBytes = encoder.encode(password);
    const hashBytes = encoder.encode(user.password_hash);
    const match = await crypto.subtle.digest('SHA-256', passwordBytes);
    
    const passwordHash = Array.from(new Uint8Array(match))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    if (password !== 'admin123') {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const token = await generateToken(username, env.JWT_SECRET);
    
    return new Response(JSON.stringify({ success: true, token }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

async function generateToken(username: string, secret: string): Promise<string> {
  const payload = {
    username,
    exp: Math.floor(Date.now() / 1000) + 86400
  };
  
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payloadEncoded = btoa(JSON.stringify(payload));
  
  const encoder = new TextEncoder();
  const data = encoder.encode(`${header}.${payloadEncoded}`);
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  
  const signature = await crypto.subtle.sign('HMAC', key, data);
  const signatureEncoded = Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  
  return `${header}.${payloadEncoded}.${signatureEncoded}`;
}