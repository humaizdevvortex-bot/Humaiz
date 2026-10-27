import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const WordPressIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 95.8C24.7 95.8 4.2 75.3 4.2 50S24.7 4.2 50 4.2 95.8 24.7 95.8 50 75.3 95.8 50 95.8z" />
    <path d="M7.7 50c0 17.7 10.9 32.8 26.3 39.1L14.7 36.3C10.2 40.3 7.7 44.9 7.7 50zm74.7-2.6c0-4.8-1.7-8.1-3.2-10.7-2-3.3-3.9-6.2-3.9-9.5 0-3.7 2.8-7.2 6.8-7.2.2 0 .4 0 .6.1C74.6 12.3 63.1 7.4 50 7.4c-12.7 0-24 5-32.3 13.2 1 .1 1.9.1 2.9.1 4.7 0 12-0.6 12-0.6 2.4-0.1 2.7 3.4.3 3.6 0 0-2.4.3-5.1.4l16.2 48.3 9.7-29.2-6.9-19.1c-2.4-.1-4.7-.4-4.7-.4-2.4-.1-2.1-3.7.3-3.6 0 0 7.5.6 11.9.6 4.7 0 12-.6 12-.6 2.4-.1 2.7 3.4.3 3.6 0 0-2.4.3-5.1.4l16 47.7 4.5-15.1c2-6.5 3.5-11.2 3.5-15.3zm-39.7 3.1l-13.3 38.6c4.6 1.4 9.5 2.1 14.6 2.1 6.1 0 11.8-1.1 17.1-3.1l-18.4-37.6zm44.2-1.9c0 1.2-.2 2.5-.5 3.8-3.7 10.7-14.7 42.4-14.7 42.4l12.4-36.1c5.2-7.2 8.3-15.9 8.3-25.4 0-2.1-.2-4.1-.5-6.1-3.3 6.3-5 13.5-5 21.4z" />
  </svg>
);

export const ShopifyIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 109 124"
    className={className}
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fill="#95BF47"
      d="M74.7 14.4c-.1-1.3-.9-2.3-2.1-2.4l-14.2-1.4c-.4-.4-.8-1-1.2-1.6-3.8-5.3-9-8.4-15.1-8.9-1.3-.1-2.6-.1-3.9 0-11.9 1.2-19.6 10.4-19.6 23.1 0 1.9.2 3.8.7 5.7L4.7 34c-1.3.4-2.1 1.6-2 3 .7 11.5 13.5 90.5 15.3 100.8 1.1 6.2 6.5 10.6 12.8 10.6 1.1 0 2.2-.1 3.3-.4l65-17.4c6.1-1.6 10.1-7.2 9.7-13.5L96.2 35c-.1-1.4-1.2-2.5-2.6-2.5l-18.9-18.1z"
    />
    <path
      fill="#5E8E3E"
      d="M72.6 12l-14.2-1.4c-.4-.4-.8-1-1.2-1.6-3.8-5.3-9-8.4-15.1-8.9L38.2 124c1.1 0 2.2-.1 3.3-.4l65-17.4c6.1-1.6 10.1-7.2 9.7-13.5L96.2 35c-.1-1.4-1.2-2.5-2.6-2.5l-18.9-18.1c-.1-1.3-.9-2.3-2.1-2.4z"
    />
    <path
      fill="#FFFFFF"
      d="M54.5 39.8c-1.3-.7-2.9-.6-4.1.2-6.5 4.7-15.5 15.7-17 31.6-.2 2.3 1.1 4.5 3.3 5.3 1 .4 2.1.4 3.1.1 2.3-.7 3.8-2.7 4-5.1 1-10.7 7.2-19.1 12.4-23.7 1.4-1.2 2-3.1 1.4-4.9-.7-1.8-2-3-3.1-3.5zm7.3 29.5c-4.2-2.4-9.3-3.8-14.6-3.8-1.5 0-3 .1-4.5.3-2.4.4-4.2 2.4-4.2 4.9 0 2.8 2.2 5 5 5 1.1 0 2.1-.2 3.2-.4 3.3-.6 6.5.1 9.1 1.8 4.2 2.8 6.7 7.5 6.7 12.5 0 8.3-6.8 15.1-15.1 15.1-5.4 0-10.2-2.8-12.9-7.1-1.5-2.3-4.5-3.1-6.9-1.6s-3.1 4.5-1.6 6.9c4.2 6.7 11.6 11.1 19.9 11.1 13.4 0 24.3-10.9 24.3-24.3 0-8.2-4.1-15.7-11.1-20.2z"
    />
  </svg>
);

export const ElementorIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="50" fill="#92003B" />
    <path
      fill="#FFFFFF"
      d="M34 28h8v44h-8zm16 0h24v8H50zm0 18h24v8H50zm0 18h24v8H50z"
    />
  </svg>
);

export const WooCommerceIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 100 60"
    className={className}
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fill="#96588A"
      d="M89.7 0H10.3C4.6 0 0 4.6 0 10.3v34.4c0 5.7 4.6 10.3 10.3 10.3h17.2l8.6 5 8.6-5h45c5.7 0 10.3-4.6 10.3-10.3V10.3C100 4.6 95.4 0 89.7 0z"
    />
    <path
      fill="#FFFFFF"
      d="M26.2 38.6c-4.6 0-8.3-3.7-8.3-8.3 0-5.3 4.8-13.8 8.3-19.1 3.5 5.3 8.3 13.8 8.3 19.1 0 4.6-3.7 8.3-8.3 8.3zm0-20.8c-2.4 4.3-5.2 10.3-5.2 12.5 0 2.9 2.3 5.2 5.2 5.2s5.2-2.3 5.2-5.2c0-2.2-2.8-8.2-5.2-12.5zm47.6 20.8c-4.6 0-8.3-3.7-8.3-8.3 0-5.3 4.8-13.8 8.3-19.1 3.5 5.3 8.3 13.8 8.3 19.1 0 4.6-3.7 8.3-8.3 8.3zm0-20.8c-2.4 4.3-5.2 10.3-5.2 12.5 0 2.9 2.3 5.2 5.2 5.2s5.2-2.3 5.2-5.2c0-2.2-2.8-8.2-5.2-12.5zM50 38.6c-4.6 0-8.3-3.7-8.3-8.3 0-5.3 4.8-13.8 8.3-19.1 3.5 5.3 8.3 13.8 8.3 19.1 0 4.6-3.7 8.3-8.3 8.3zm0-20.8c-2.4 4.3-5.2 10.3-5.2 12.5 0 2.9 2.3 5.2 5.2 5.2s5.2-2.3 5.2-5.2c0-2.2-2.8-8.2-5.2-12.5z"
    />
  </svg>
);

export const PhpIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fill="#777BB4"
      d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm-27.1 79.5l-3.3 14.8h-11l9.6-43.1h18.2c7.2 0 12.2 1.6 14.9 4.8 2.8 3.2 2.9 7.7 0.5 13.6-2.6 6.3-6.5 10.3-11.8 12.1-3.6 1.2-8.5 1.8-14.8 1.8h-2.3v-4zm41.2 0l-3.3 14.8h-11l9.6-43.1h18.2c7.2 0 12.2 1.6 14.9 4.8 2.8 3.2 2.9 7.7 0.5 13.6-2.6 6.3-6.5 10.3-11.8 12.1-3.6 1.2-8.5 1.8-14.8 1.8h-2.3v-4zm-14.6-13.8h8.8l-5.6 25.1h-10.7l9.6-43.1h10.7l-3.8 18z"
    />
  </svg>
);

export const Html5Icon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 512 512"
    className={className}
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z" />
    <path fill="#EF652A" d="M256 472l149-41 35-391H256v432z" />
    <path fill="#EBEBEB" d="M256 208h-74l-5-58h79V94H114l16 172h126v-58zm0 147l-64-17-4-45h-56l7 89 117 32v-59z" />
    <path fill="#FFFFFF" d="M256 208v58h71l-7 74-64 17v59l117-32 16-176H256zm0-114v56h137l5-56H256z" />
  </svg>
);

export const Css3Icon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 512 512"
    className={className}
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path fill="#1572B6" d="M71 460L30 0h452l-41 460-185 52z" />
    <path fill="#33A9DC" d="M256 472l149-41 35-391H256v432z" />
    <path fill="#EBEBEB" d="M256 208h129l5-56H256V94h193l-16 172H256v-58zm0 147l64-17 4-45h56l-7 89-117 32v-59z" />
    <path fill="#FFFFFF" d="M256 208v58h-71l7 74 64 17v59l-117-32-16-176H256zm0-114v56H119l-5-56H256z" />
  </svg>
);

export const AiStudioIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" fill="url(#ai-grad)" stroke="#f97316" />
    <defs>
      <linearGradient id="ai-grad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f97316" stopOpacity="0.4" />
        <stop offset="1" stopColor="#eab308" stopOpacity="0.8" />
      </linearGradient>
    </defs>
  </svg>
);
