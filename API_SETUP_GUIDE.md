# 🔑 Complete Master API & RTMP Setup Guide for Cross Poster

Welcome to the official developer credentials and simultaneous live streaming setup guide for **Cross Poster**. This guide covers step-by-step instructions to obtain API credentials, access tokens, and RTMP stream keys for **Cross-Platform Post Publishing** and **Cross-Platform Live Streaming**.

---

## 📋 Required Developer APIs & RTMP Stream Setup Overview

| Platform | Category | Developer Portal / Console | Required Credentials & Tokens | Required Scopes / Permissions |
| :--- | :--- | :--- | :--- | :--- |
| **Meta (Facebook Pages & IG)** | Posts & Live | [developers.facebook.com](https://developers.facebook.com/) | `Meta App ID`, `App Secret`, `Page Access Token` | `pages_manage_posts`, `pages_read_engagement`, `instagram_content_publish`, `publish_video` |
| **Facebook Live** | Live Stream | Meta Live Producer | `FB RTMP Server URL`, `FB Stream Key` | `rtmps://live-api-s.facebook.com:443/rtmp/` |
| **YouTube Studio & Live** | Posts & Live | [console.cloud.google.com](https://console.cloud.google.com/) | `Google Client ID`, `Client Secret`, `YouTube API Key` | `youtube.upload`, `youtube.force-ssl`, `youtube.readonly` |
| **YouTube Live** | Live Stream | YouTube Studio Live Control Room | `YouTube RTMP Server URL`, `YouTube Stream Key` | `rtmp://a.rtmp.youtube.com/live2` |
| **X (Twitter)** | Posts | [developer.twitter.com](https://developer.twitter.com/) | `API Key`, `API Secret`, `Bearer Token`, `Client ID` | X API v2 (Read & Write permissions) |
| **Threads** | Posts | Meta Developer Console | `Threads App ID`, `Threads App Secret` | `threads_basic`, `threads_content_publish` |
| **TikTok** | Posts | [developers.tiktok.com](https://developers.tiktok.com/) | `TikTok Client Key`, `TikTok Client Secret` | `video.upload`, `user.info.basic` |
| **LinkedIn** | Posts & Live | [linkedin.com/developers](https://www.linkedin.com/developers/) | `LinkedIn Client ID`, `Client Secret` | `w_member_social`, `r_liteprofile`, `rw_organization_admin` |
| **Twitch** | Live Stream | [dev.twitch.tv](https://dev.twitch.tv/) | `Twitch Stream Key`, `RTMP Server URL` | `rtmp://live.twitch.tv/app/{stream_key}` |

---

## 🛠️ Step-by-Step API Setup Instructions

### 1. 📘 Meta Developer API (Facebook Pages, Reels & Instagram Business)

#### A. Post Publishing & Page Setup
1. Go to [Meta for Developers](https://developers.facebook.com/) and log in with your Facebook account.
2. Click **Create App** -> Select **Business** app type.
3. Under **Add Products to Your App**, enable:
   - **Facebook Login for Business**
   - **Instagram Graph API**
   - **Pages API**
4. Under **App Settings -> Basic**, copy your **Meta App ID** and **Meta App Secret**.
5. Use the Graph API Explorer to generate a **Long-Lived Page Access Token** with permissions:
   - `pages_manage_posts`
   - `pages_read_engagement`
   - `instagram_basic`
   - `instagram_content_publish`
   - `publish_video`

#### B. Facebook Live Stream Setup (RTMP)
1. Open [Facebook Live Producer](https://facebook.com/live/producer).
2. Choose **Use Stream Key**.
3. Copy the **Server URL** (`rtmps://live-api-s.facebook.com:443/rtmp/`) and your unique **Stream Key**.
4. Paste into Cross Poster `Create Live` studio setup.

---

### 2. 🔴 Google Cloud & YouTube API (YouTube Shorts, Videos & Live)

#### A. YouTube Data API Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project named **Cross Poster App**.
3. Navigate to **APIs & Services -> Library** and search & enable:
   - **YouTube Data API v3**
   - **YouTube Live Streaming API**
4. Go to **Credentials -> Create Credentials**:
   - Create an **API Key** (Copy `YouTube Data API Key`).
   - Create **OAuth 2.0 Client IDs** (Application type: **Web application**).
5. Set Authorized Redirect URI to `http://localhost:3000/api/auth/youtube/callback`.
6. Copy your **Google OAuth Client ID** and **Google Client Secret**.

#### B. YouTube Live Stream Setup (RTMP)
1. Open [YouTube Studio](https://studio.youtube.com/) -> Click **Go Live** at the top right.
2. Select **Stream** tab.
3. Copy **Stream URL** (`rtmp://a.rtmp.youtube.com/live2`) and **Stream Key**.
4. Input into Cross Poster `Create Live` studio for simultaneous broadcasting.

---

### 3. ⬛ X (Twitter) Developer V2 API Setup
1. Register at [X Developer Portal](https://developer.twitter.com/).
2. Create a Project and an App under the **Free or Basic Tier**.
3. Navigate to **User Authentication Settings**:
   - Set App permissions to **Read and Write**.
   - Type of App: **Web App**.
4. Copy your **API Key (Consumer Key)**, **API Key Secret**, **Bearer Token**, and **Client ID**.

---

### 4. 🧵 Threads API Setup
1. Inside your existing Meta App Console ([developers.facebook.com](https://developers.facebook.com/)), click **Add Product** and select **Threads API**.
2. Request scopes:
   - `threads_basic`
   - `threads_content_publish`
3. Copy your **Threads App ID** and **Threads App Secret**.

---

### 5. 🎵 TikTok Developer API Setup
1. Go to [TikTok for Developers](https://developers.tiktok.com/).
2. Click **My Apps** -> **Create an App**.
3. Enable **Content Posting API** and request scopes:
   - `video.upload`
   - `user.info.basic`
4. Copy your **TikTok Client Key** and **TikTok Client Secret**.

---

### 6. 💼 LinkedIn Marketing & Live Setup
1. Go to [LinkedIn Developers](https://www.linkedin.com/developers/).
2. Click **Create App** and associate it with your LinkedIn Company Page.
3. Under **Products**, request access to:
   - **Share on LinkedIn**
   - **Sign In with LinkedIn**
4. Under **Auth Settings**, copy your **LinkedIn Client ID** and **LinkedIn Client Secret**.

---

## 📺 How to Enter Credentials in Cross Poster UI

1. Open **Cross Poster** (`http://localhost:3000`).
2. Click **🔑 API Setup** in the left sidebar menu.
3. Select your desired platform from the **Choose Platform to Configure** dropdown (Meta, Google, X, Threads, TikTok, LinkedIn).
4. Enter your API credentials into the corresponding fields.
5. Click **Save Encrypted Credentials**. Your keys are encrypted with **AES-256** and saved locally!
