import { FC } from 'react';

interface AiIconProps {
  type: 'brain' | 'rocket' | 'shield' | 'search' | 'video' | 'podcast' | 'design' | 'globe' | 'automation';
  className?: string;
}

const AiIcon: FC<AiIconProps> = ({ type, className = '' }) => {
  const icons = {
    brain: (
      <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FF4444', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FF8844', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#brainGrad)" opacity="0.1" className="animate-pulse" />
        <path d="M30 40 Q35 30 45 30 Q50 28 55 30 Q65 30 70 40" stroke="url(#brainGrad)" strokeWidth="3" fill="none" strokeLinecap="round" className="animate-pulse" />
        <path d="M30 50 Q35 45 45 45 Q50 43 55 45 Q65 45 70 50" stroke="url(#brainGrad)" strokeWidth="3" fill="none" strokeLinecap="round" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <path d="M30 60 Q35 55 45 55 Q50 53 55 55 Q65 55 70 60" stroke="url(#brainGrad)" strokeWidth="3" fill="none" strokeLinecap="round" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
        <circle cx="35" cy="40" r="2" fill="url(#brainGrad)" className="animate-ping" />
        <circle cx="50" cy="45" r="2" fill="url(#brainGrad)" className="animate-ping" style={{ animationDelay: '0.3s' }} />
        <circle cx="65" cy="50" r="2" fill="url(#brainGrad)" className="animate-ping" style={{ animationDelay: '0.6s' }} />
      </svg>
    ),
    rocket: (
      <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#22C55E', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#rocketGrad)" opacity="0.1" className="animate-pulse" />
        <path d="M50 20 L60 50 L50 45 L40 50 Z" fill="url(#rocketGrad)" className="animate-bounce" />
        <circle cx="50" cy="35" r="5" fill="#fff" opacity="0.3" />
        <path d="M40 55 Q35 70 30 75" stroke="url(#rocketGrad)" strokeWidth="3" fill="none" className="animate-pulse" />
        <path d="M60 55 Q65 70 70 75" stroke="url(#rocketGrad)" strokeWidth="3" fill="none" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#shieldGrad)" opacity="0.1" className="animate-pulse" />
        <path d="M50 20 L70 30 L70 50 Q70 70 50 80 Q30 70 30 50 L30 30 Z" fill="url(#shieldGrad)" opacity="0.2" />
        <path d="M50 20 L70 30 L70 50 Q70 70 50 80 Q30 70 30 50 L30 30 Z" stroke="url(#shieldGrad)" strokeWidth="2" fill="none" className="animate-pulse" />
        <path d="M40 50 L47 57 L60 40" stroke="url(#shieldGrad)" strokeWidth="3" fill="none" strokeLinecap="round" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      </svg>
    ),
    search: (
      <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="searchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="45" cy="45" r="20" stroke="url(#searchGrad)" strokeWidth="3" fill="none" className="animate-pulse" />
        <circle cx="45" cy="45" r="35" stroke="url(#searchGrad)" strokeWidth="1" fill="none" opacity="0.3" className="animate-ping" />
        <line x1="60" y1="60" x2="75" y2="75" stroke="url(#searchGrad)" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
        <circle cx="45" cy="45" r="10" fill="url(#searchGrad)" opacity="0.3" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
      </svg>
    ),
    video: (
      <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="videoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#EF4444', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#videoGrad)" opacity="0.1" className="animate-pulse" />
        <rect x="25" y="35" width="50" height="30" rx="3" fill="url(#videoGrad)" opacity="0.2" />
        <rect x="25" y="35" width="50" height="30" rx="3" stroke="url(#videoGrad)" strokeWidth="2" fill="none" className="animate-pulse" />
        <polygon points="42,43 42,57 57,50" fill="url(#videoGrad)" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <circle cx="30" cy="40" r="2" fill="url(#videoGrad)" className="animate-ping" />
      </svg>
    ),
    podcast: (
      <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="podcastGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#D946EF', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="45" r="8" fill="url(#podcastGrad)" className="animate-pulse" />
        <circle cx="50" cy="45" r="15" stroke="url(#podcastGrad)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
        <circle cx="50" cy="45" r="22" stroke="url(#podcastGrad)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <circle cx="50" cy="45" r="29" stroke="url(#podcastGrad)" strokeWidth="1" fill="none" opacity="0.5" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <rect x="45" y="60" width="10" height="15" rx="2" fill="url(#podcastGrad)" />
        <path d="M40 55 Q40 65 45 65" stroke="url(#podcastGrad)" strokeWidth="2" fill="none" />
        <path d="M60 55 Q60 65 55 65" stroke="url(#podcastGrad)" strokeWidth="2" fill="none" />
      </svg>
    ),
    design: (
      <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="designGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#designGrad)" opacity="0.1" className="animate-pulse" />
        <path d="M35 35 L65 35 L65 50 L50 65 L35 50 Z" fill="url(#designGrad)" opacity="0.2" />
        <path d="M35 35 L65 35 L65 50 L50 65 L35 50 Z" stroke="url(#designGrad)" strokeWidth="2" fill="none" className="animate-pulse" />
        <circle cx="50" cy="42" r="5" fill="url(#designGrad)" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <line x1="42" y1="50" x2="58" y2="50" stroke="url(#designGrad)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0EA5E9', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="30" stroke="url(#globeGrad)" strokeWidth="2" fill="none" className="animate-pulse" />
        <ellipse cx="50" cy="50" rx="30" ry="15" stroke="url(#globeGrad)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
        <ellipse cx="50" cy="50" rx="15" ry="30" stroke="url(#globeGrad)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <line x1="50" y1="20" x2="50" y2="80" stroke="url(#globeGrad)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <circle cx="50" cy="50" r="3" fill="url(#globeGrad)" className="animate-ping" />
      </svg>
    ),
    automation: (
      <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="autoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="20" stroke="url(#autoGrad)" strokeWidth="2" fill="none" className="animate-spin" style={{ animationDuration: '8s' }} />
        <circle cx="50" cy="30" r="5" fill="url(#autoGrad)" className="animate-pulse" />
        <circle cx="70" cy="50" r="5" fill="url(#autoGrad)" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <circle cx="50" cy="70" r="5" fill="url(#autoGrad)" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
        <circle cx="30" cy="50" r="5" fill="url(#autoGrad)" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
        <line x1="50" y1="35" x2="50" y2="45" stroke="url(#autoGrad)" strokeWidth="2" />
        <line x1="65" y1="50" x2="55" y2="50" stroke="url(#autoGrad)" strokeWidth="2" />
        <line x1="50" y1="65" x2="50" y2="55" stroke="url(#autoGrad)" strokeWidth="2" />
        <line x1="35" y1="50" x2="45" y2="50" stroke="url(#autoGrad)" strokeWidth="2" />
      </svg>
    )
  };

  return icons[type] || null;
};

export default AiIcon;
