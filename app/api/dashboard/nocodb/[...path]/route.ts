import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const NOCODB_URL = process.env.NOCODB_URL || 'https://nocodb-u70402.vm.elestio.app';
const NOCODB_API_KEY = process.env.NOCODB_API_KEY || '';

export async function GET(
  req: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const subpath = params.path.join('/');
    const searchParams = req.nextUrl.searchParams.toString();
    const targetUrl = `${NOCODB_URL}/api/${subpath}${searchParams ? `?${searchParams}` : ''}`;

    console.log(`[Dashboard NocoDB Proxy] GET -> ${targetUrl}`);

    const res = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'xc-token': NOCODB_API_KEY,
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      return NextResponse.json({ error: `NocoDB responded with status ${res.status}` }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('[Dashboard NocoDB Proxy] GET error:', error);
    return NextResponse.json({ error: error.message || 'Proxy failed' }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const subpath = params.path.join('/');
    const searchParams = req.nextUrl.searchParams.toString();
    const targetUrl = `${NOCODB_URL}/api/${subpath}${searchParams ? `?${searchParams}` : ''}`;
    const body = await req.json().catch(() => ({}));

    console.log(`[Dashboard NocoDB Proxy] POST -> ${targetUrl}`);

    const res = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'xc-token': NOCODB_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return NextResponse.json({ error: `NocoDB responded with status ${res.status}` }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('[Dashboard NocoDB Proxy] POST error:', error);
    return NextResponse.json({ error: error.message || 'Proxy failed' }, { status: 500 });
  }
}
