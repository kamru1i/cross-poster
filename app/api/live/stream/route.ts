import { NextRequest, NextResponse } from 'next/server';
import { LiveStreamPayload, LiveStreamSession } from '@/types/social';

export async function POST(req: NextRequest) {
  try {
    const body: LiveStreamPayload = await req.json();

    if (!body.title || !body.targetPlatformIds || body.targetPlatformIds.length === 0) {
      return NextResponse.json(
        { error: 'Stream title and target platforms are required.' },
        { status: 400 }
      );
    }

    const ingestUrls: Record<string, string> = {};
    body.targetPlatformIds.forEach(pId => {
      ingestUrls[pId] = `rtmp://live.${pId.toLowerCase()}.com/live-app/stream_key_secure_12345`;
    });

    const liveSession: LiveStreamSession = {
      id: `live-session-${Date.now()}`,
      title: body.title,
      targetPlatforms: body.targetPlatformIds,
      streamStatus: 'LIVE',
      ingestUrls,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ success: true, session: liveSession });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to initialize live stream' }, { status: 500 });
  }
}
