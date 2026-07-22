export type AuthProvider = 'FACEBOOK' | 'GOOGLE' | 'EMAIL';

export type SocialPlatform = 
  | 'FB_PAGE' 
  | 'FB_PROFILE' 
  | 'INSTAGRAM' 
  | 'YOUTUBE_VIDEO' 
  | 'YOUTUBE_SHORTS' 
  | 'X_TWITTER' 
  | 'THREADS' 
  | 'TIKTOK' 
  | 'LINKEDIN';

export type PostPublishMode = 'IMMEDIATE' | 'SCHEDULED' | 'DRAFT';

export interface UserSession {
  id: string;
  name: string;
  email?: string | null;
  avatarUrl?: string | null;
  provider: AuthProvider;
}

export interface SocialAccount {
  id: string;
  userId: string;
  platform: SocialPlatform;
  platformId: string;
  accountName: string;
  avatarUrl?: string | null;
  isEnabled: boolean;
  createdAt: string;
}

export interface BYOKCredentials {
  metaAppId?: string;
  metaAppSecret?: string;
  googleClientId?: string;
  googleClientSecret?: string;
  xApiKey?: string;
  xApiSecret?: string;
}

export interface PostPayload {
  caption: string;
  targetAccountIds: string[];
  tags: string[];
  locationTag?: string;
  mediaUrls?: string[];
  publishMode: PostPublishMode;
  scheduledAt?: string;
}

export interface PlatformAnalytics {
  platform: SocialPlatform;
  reach: number;
  impressions: number;
  likes: number;
  comments: number;
  shares: number;
}

export interface PublishResult {
  id: string;
  accountId: string;
  platform: SocialPlatform;
  accountName: string;
  success: boolean;
  status: 'PUBLISHED' | 'SCHEDULED' | 'DRAFT_SAVED';
  postUrl?: string;
  scheduledAt?: string;
  tags?: string[];
  analytics?: PlatformAnalytics;
  createdAt: string;
}

export interface BestTimeRecommendation {
  platform: SocialPlatform;
  bestTimeLabel: string;
  recommendedDateTime: string;
  reason: string;
}

export interface LiveStreamPayload {
  title: string;
  description?: string;
  targetPlatformIds: string[];
}

export interface LiveStreamSession {
  id: string;
  title: string;
  targetPlatforms: string[];
  streamStatus: 'IDLE' | 'LIVE' | 'ENDED';
  ingestUrls: Record<string, string>;
  createdAt: string;
}
