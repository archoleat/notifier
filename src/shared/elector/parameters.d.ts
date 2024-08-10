type Parameters = {
  message: string;
  icon: string;
  title: string;
  notificationMode?: 'console' | 'desktop' | 'multiple';
  hasTime?: boolean;
  messageLength?: number;
};

export { Parameters };
