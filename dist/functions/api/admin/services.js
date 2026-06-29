export const onRequest = async ({ env, request }) => {
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
      case 'GET': {
        const results = await db.prepare(
          'SELECT * FROM services ORDER BY sort_order ASC'
        ).all();
        results.results.forEach(r => {
          r.process = JSON.parse(r.process);
        });
        return new Response(JSON.stringify(results.results), {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      case 'POST': {
        const body = await request.json();
        const result = await db.prepare(
          'INSERT INTO services (title, slug, description, content, price_range, process, icon, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
        ).bind(
          body.title,
          body.slug,
          body.description,
          body.content,
          body.price_range,
          JSON.stringify(body.process),
          body.icon,
          body.sort_order || 0
        ).run();
        return new Response(JSON.stringify({ success: true, id: result.lastInsertRowid }), {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      case 'PUT': {
        const body = await request.json();
        const result = await db.prepare(
          'UPDATE services SET title = ?, slug = ?, description = ?, content = ?, price_range = ?, process = ?, icon = ?, sort_order = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?'
        ).bind(
          body.title,
          body.slug,
          body.description,
          body.content,
          body.price_range,
          JSON.stringify(body.process),
          body.icon,
          body.sort_order || 0,
          body.id
        ).run();
        return new Response(JSON.stringify({ success: true, changes: result.changes }), {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      case 'DELETE': {
        const url = new URL(request.url);
        const id = url.searchParams.get('id');
        const result = await db.prepare(
          'DELETE FROM services WHERE id = ?'
        ).bind(id).run();
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
    console.error('Admin services error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
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
