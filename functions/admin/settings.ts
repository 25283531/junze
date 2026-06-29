export const onRequest: PagesFunction = async ({ env, request }) => {
  const db = env.DB;
  
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const token = authHeader.substring(7);
  const isValid = await verifyToken(token, env.JWT_SECRET);
  if (!isValid) {
    return new Response(JSON.stringify({ error: 'Invalid token' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    switch (request.method) {
      case 'GET':
        const result = await db.prepare(
          'SELECT * FROM business_info WHERE id = 1'
        ).first();
        if (result) {
          result.service_areas = JSON.parse(result.service_areas);
        }
        return new Response(JSON.stringify(result), {
          headers: { 'Content-Type': 'application/json' }
        });

      case 'PUT': {
        const body = await request.json();
        const result = await db.prepare(
          'UPDATE business_info SET name = ?, description = ?, telephone = ?, address = ?, service_areas = ?, license = ?, wechat = ?, updated_at = CURRENT_TIMESTAMP WHERE id = 1'
        ).bind(
          body.name,
          body.description,
          body.telephone,
          body.address,
          JSON.stringify(body.service_areas),
          body.license,
          body.wechat
        ).run();
        return new Response(JSON.stringify({ success: true, changes: result.changes }), {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      default:
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
          status: 405,
          headers: { 'Content-Type': 'application/json' }
        });
    }
  } catch (error) {
    console.error('Admin settings error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

async function verifyToken(token: string, secret: string): Promise<boolean> {
  try {
    const [header, payload, signature] = token.split('.');
    const encoder = new TextEncoder();
    const data = encoder.encode(`${header}.${payload}`);
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );
    
    const signatureBytes = new Uint8Array(signature.match(/.{2}/g)!.map(h => parseInt(h, 16)));
    return await crypto.subtle.verify('HMAC', key, signatureBytes, data);
  } catch {
    return false;
  }
}