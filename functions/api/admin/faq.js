const CORS_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export const onRequest = async ({ env, request }) => {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  const db = env.DB;
  
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: CORS_HEADERS
    });
  }

  const token = authHeader.substring(7);
  const isValid = await verifyToken(token, env.JWT_SECRET);
  if (!isValid) {
    return new Response(JSON.stringify({ error: 'Invalid token' }), {
      status: 401,
      headers: CORS_HEADERS
    });
  }

  try {
    switch (request.method) {
      case 'GET': {
        const results = await db.prepare(
          'SELECT * FROM faq ORDER BY sort_order ASC'
        ).all();
        return new Response(JSON.stringify(results.results), {
          headers: CORS_HEADERS
        });
      }

      case 'POST': {
        const body = await request.json();
        const result = await db.prepare(
          'INSERT INTO faq (question, answer, category, sort_order) VALUES (?, ?, ?, ?)'
        ).bind(
          body.question,
          body.answer,
          body.category,
          body.sort_order || 0
        ).run();
        return new Response(JSON.stringify({ success: true, id: result.lastInsertRowid }), {
          headers: CORS_HEADERS
        });
      }

      case 'PUT': {
        const body = await request.json();
        const result = await db.prepare(
          'UPDATE faq SET question = ?, answer = ?, category = ?, sort_order = ? WHERE id = ?'
        ).bind(
          body.question,
          body.answer,
          body.category,
          body.sort_order || 0,
          body.id
        ).run();
        return new Response(JSON.stringify({ success: true, changes: result.changes }), {
          headers: CORS_HEADERS
        });
      }

      case 'DELETE': {
        const url = new URL(request.url);
        const id = url.searchParams.get('id');
        const result = await db.prepare(
          'DELETE FROM faq WHERE id = ?'
        ).bind(id).run();
        return new Response(JSON.stringify({ success: true, changes: result.changes }), {
          headers: CORS_HEADERS
        });
      }

      default:
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
          status: 405,
          headers: CORS_HEADERS
        });
    }
  } catch (error) {
    console.error('Admin faq error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: CORS_HEADERS
    });
  }
};

async function verifyToken(token, secret) {
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
    
    const signatureBytes = new Uint8Array(signature.match(/.{2}/g).map(h => parseInt(h, 16)));
    return await crypto.subtle.verify('HMAC', key, signatureBytes, data);
  } catch {
    return false;
  }
}
