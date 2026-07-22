import { NextRequest, NextResponse } from 'next/server';
import { PostPayload, PublishResult } from '@/types/social';

export async function POST(req: NextRequest) {
  try {
    const body: PostPayload = await req.json();

    if (!body.caption || !body.targetAccountIds || body.targetAccountIds.length === 0) {
      return NextResponse.json(
        { error: 'Caption and at least one target account are required.' },
        { status: 400 }
      );
    }

    // Simulate selective multi-platform publishing engine
    const results: PublishResult[] = body.targetAccountIds.map((accId) => ({
      accountId: accId,
      platform: 'FB_PAGE',
      accountName: `Account (${accId})`,
      success: true,
      postUrl: `https://facebook.com/post/published-${Date.now()}`,
      timestamp: new Date().toISOString(),
    }));

    return NextResponse.json({ success: true, results });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
