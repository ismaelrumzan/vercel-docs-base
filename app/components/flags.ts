import { unstable_flag as flag } from '@vercel/flags/next';
import { get } from '@vercel/edge-config';
 
export const showAISection = flag({
  key: 'show-ai-section',
  decide: () => process.env.AI_SECTION === '1',
});

export const showCardList = flag({
  key: 'card-list',
  decide: () => process.env.CARD_LIST === '1',
});