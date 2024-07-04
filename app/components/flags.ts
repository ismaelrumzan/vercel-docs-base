import { unstable_flag as flag } from '@vercel/flags/next';
import { get } from '@vercel/edge-config';
 
export const showAISection = flag({
  key: 'show-ai-section',
  async decide() {
    const value = await get(this.key); 
    return value ?? false;
  },
});

export const showCardList = flag({
  key: 'card-list',
  async decide() {
    const value = await get(this.key); 
    return value ?? false;
  },
});