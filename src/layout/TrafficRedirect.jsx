import { useEffect, useState } from 'react';
import Social from '../pages/landing/social/Social';

function TrafficRedirect() {
  const [source, setSource] = useState(() => localStorage.getItem('traffic_source') || '');

  useEffect(() => {
    if (source) return;

    const referrer = document.referrer ? document.referrer.toLowerCase() : '';

    const socialDomains = new Set([
      'twitter.com',
      't.co',
      'facebook.com',
      'instagram.com',
      'linkedin.com',
      'pinterest.com',
      'reddit.com',
      'tiktok.com',
      'snapchat.com',
      'youtube.com',
      'whatsapp.com',
      't.me',
      'discord.com',
      'quora.com',
    ]);

    const isSocial = referrer && [...socialDomains].some((domain) => referrer.includes(domain));
    const trafficSource = isSocial ? 'social' : 'organic';

    localStorage.setItem('traffic_source', trafficSource);
    if (referrer) localStorage.setItem('channel', referrer);

    setSource(trafficSource);
  }, [source]);

  // return source === "social" ? <Social /> : <Organic />;
  return <Social />;
}

export default TrafficRedirect;
