export async function getChannel() {
  let channel = localStorage.getItem("channel");

  if (!channel) return "";
  const channels = {
    "facebook.com": "Facebook",
    "twitter.com": "Twitter",
    "t.co": "Twitter",
    "instagram.com": "Instagram",
    "linkedin.com": "LinkedIn",
    "pinterest.com": "Pinterest",
    "reddit.com": "Reddit",
    "tiktok.com": "TikTok",
    "snapchat.com": "Snapchat",
    "youtube.com": "YouTube",
    "whatsapp.com": "WhatsApp",
    "t.me": "Telegram",
    "discord.com": "Discord",
    "quora.com": "Quora",
  };

  const normalizedChannel = channel.toLowerCase();

  for (const domain in channels) {
    if (normalizedChannel.includes(domain.toLowerCase())) {
      return channels[domain];
    }
  }
}
