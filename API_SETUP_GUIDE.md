# 🔑 Official Developer API Credentials Setup Guide for Cross Poster

This guide provides step-by-step instructions to obtain free official developer API keys for all 6 supported platforms in **Cross Poster**.

---

## 📋 Required Developer APIs Overview

| Platform | Developer Portal | Credentials Required | Products / Scopes Needed |
| :--- | :--- | :--- | :--- |
| **Meta (Facebook & Instagram)** | [developers.facebook.com](https://developers.facebook.com/) | `Meta App ID`, `Meta App Secret` | Facebook Login, Instagram Graph API, Pages API |
| **Google (YouTube Videos & Live)**| [console.cloud.google.com](https://console.cloud.google.com/) | `Client ID`, `Client Secret` | YouTube Data API v3, YouTube Live Streaming API |
| **X (Twitter)** | [developer.twitter.com](https://developer.twitter.com/) | `API Key`, `API Secret` | X API v2 (Read & Write permissions) |
| **Threads** | Meta Developer Console | `Meta App Credentials` | Threads API (`threads_content_publish`) |
| **TikTok** | [developers.tiktok.com](https://developers.tiktok.com/) | `Client Key`, `Client Secret` | Content Posting API |
| **LinkedIn** | [linkedin.com/developers](https://www.linkedin.com/developers/) | `Client ID`, `Client Secret` | Share on LinkedIn (`w_member_social`) |

---

## 🛠️ Step-by-Step Platform Setup

### 1. 🔵 Meta Developer Platform (Facebook Pages, Profiles & Instagram)
1. Navigate to [Meta for Developers](https://developers.facebook.com/) and log in with your Facebook account.
2. Click **Create App** and select **Business** or **Consumer** type.
3. Under **Add Products to Your App**, enable:
   - **Facebook Login for Business**
   - **Instagram Graph API**
   - **Pages API**
4. Go to **App Settings -> Basic** to copy your `Meta App ID` and `Meta App Secret`.
5. Required Permissions: `pages_manage_posts`, `pages_read_engagement`, `instagram_basic`, `instagram_content_publish`.

---

### 2. 🔴 Google Cloud Console (YouTube Videos, Shorts & Live Streaming)
1. Go to [Google Cloud Console](https://console.cloud.google.com/) and create a new project (e.g. "Cross Poster App").
2. Navigate to **APIs & Services -> Library** and enable:
   - **YouTube Data API v3**
   - **YouTube Live Streaming API**
3. Go to **Credentials -> Create Credentials -> OAuth 2.0 Client ID**.
4. Select **Web application** as Application type.
5. Add Authorized Redirect URI: `http://localhost:3000/api/auth/youtube/callback` (or your production URL).
6. Copy your `Google OAuth Client ID` and `Google Client Secret`.

---

### 3. 🖤 X (Twitter) Developer Portal (X API v2)
1. Register at [X Developer Portal](https://developer.twitter.com/).
2. Create a new Project & App under the **Free / Basic Tier**.
3. Under **User Authentication Settings**, set App Permissions to **Read and Write**.
4. Copy your `X API Key` and `X API Secret`.

---

### 4. 🧵 Threads Developer Platform
1. Inside your existing Meta App Console, click **Add Product** and select **Threads API**.
2. Add Authorized Redirect URIs for Threads OAuth.
3. Ensure scopes `threads_basic` and `threads_content_publish` are requested.

---

### 5. 🎵 TikTok Developer Portal
1. Go to [TikTok for Developers](https://developers.tiktok.com/).
2. Create a new Developer App.
3. Enable **Content Posting API** and request scopes `video.upload` and `user.info.basic`.
4. Copy your `Client Key` and `Client Secret`.

---

### 6. 💼 LinkedIn Developer Portal
1. Go to [LinkedIn Developers](https://www.linkedin.com/developers/).
2. Click **Create App** and associate it with your LinkedIn Company Page.
3. Under **Products**, request access to **Share on LinkedIn** and **Sign In with LinkedIn**.
4. Under **Auth Settings**, copy your `Client ID` and `Client Secret`.

---

## ⚙️ How to Enter Credentials in Cross Poster UI

1. Open **Cross Poster** Web or Mobile App.
2. Go to **⚙️ BYOK Settings** in the navbar.
3. Paste your credentials into the corresponding platform input fields.
4. Click **Save Encrypted Credentials**. Your keys are encrypted with **AES-256** and isolated to your user account.
