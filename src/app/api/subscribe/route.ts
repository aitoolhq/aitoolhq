import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.BUTTONDOWN_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        tags: ['aitoolhq'],
      }),
    });

    if (response.status === 201) {
      return NextResponse.json({ success: true });
    }

    const data = await response.json();

    // Already subscribed is fine
    if (data.email?.[0]?.includes('already')) {
      return NextResponse.json({ success: true, alreadySubscribed: true });
    }

    return NextResponse.json({ error: 'Subscription failed' }, { status: 400 });

  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
