import { SKILL_LEVELS } from '@/common/constant/skill-level';
import type { Performer } from '../@types';

//Score = (Profile Views × 1) + (Profile Likes × 5) + (External links Clicks × 10) (Need unique views and clicks)

export const TOP_PERFORMERS: Performer[] = [
  {
    id: 1,
    rank: 1,
    name: 'Lily Brown',
    profileImage: 'https://i.pinimg.com/236x/dd/d1/e4/ddd1e499a601d0b942ba81130daae7e1.jpg',
    skillLevel: SKILL_LEVELS.MASTER,
  },
  {
    id: 2,
    rank: 2,
    name: 'David Lee',
    profileImage:
      'https://www.whoa.in/download/ranbir-kapoor-face-closeup-with-black-background-hd-wallpaper',
    skillLevel: SKILL_LEVELS.EXPERT,
  },
  {
    id: 3,
    rank: 3,
    name: 'Emma Garcia',
    profileImage:
      'https://wallpapers.com/images/hd/virat-kohli-hd-black-tuxedo-fibgrtdlqvatdblj.jpg',
    skillLevel: SKILL_LEVELS.EXPERT,
  },
];

export const REMAINING_PERFORMERS: Performer[] = [
  {
    id: 4,
    rank: 4,
    name: 'Michael Chen',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.PRO,
  },
  {
    id: 5,
    rank: 5,
    name: 'Priya Sharma',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.MASTER,
  },
  {
    id: 6,
    rank: 6,
    name: 'Arjun Mehta',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.MASTER,
  },
  {
    id: 7,
    rank: 7,
    name: 'Sophia Patel',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.ROOKIE,
  },
  {
    id: 8,
    rank: 8,
    name: 'James Wilson',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.EXPERT,
  },
  {
    id: 9,
    rank: 9,
    name: 'Olivia Martinez',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.PRO,
  },
  {
    id: 10,
    rank: 10,
    name: 'Noah Anderson',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.RISING,
  },
  {
    id: 11,
    rank: 11,
    name: 'Ava Taylor',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.PRO,
  },
  {
    id: 12,
    rank: 12,
    name: 'Liam Thomas',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.ROOKIE,
  },
  {
    id: 13,
    rank: 13,
    name: 'Isabella Jackson',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.PRO,
  },
  {
    id: 14,
    rank: 14,
    name: 'Ethan White',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.EXPERT,
  },
  {
    id: 15,
    rank: 15,
    name: 'Mia Harris',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.RISING,
  },
  {
    id: 16,
    rank: 16,
    name: 'Alexander Martin',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.MASTER,
  },
  {
    id: 17,
    rank: 17,
    name: 'Charlotte Thompson',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.EXPERT,
  },
  {
    id: 18,
    rank: 18,
    name: 'Benjamin Garcia',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.MASTER,
  },
  {
    id: 19,
    rank: 19,
    name: 'Amelia Martinez',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.ROOKIE,
  },
  {
    id: 20,
    rank: 20,
    name: 'Daniel Robinson',
    profileImage: '/art-images/sample-artist.png',
    skillLevel: SKILL_LEVELS.RISING,
  },
];

export const HALL_OF_FAME: Performer[] = [
  {
    id: 1,
    rank: 1,
    name: 'Lily Brown',
    profileImage: 'https://i.pinimg.com/236x/dd/d1/e4/ddd1e499a601d0b942ba81130daae7e1.jpg',
    skillLevel: SKILL_LEVELS.LEGEND,
  },
  {
    id: 2,
    rank: 2,
    name: 'David Lee',
    profileImage: 'https://i.pinimg.com/236x/dd/d1/e4/ddd1e499a601d0b942ba81130daae7e1.jpg',
    skillLevel: SKILL_LEVELS.LEGEND,
  },
  {
    id: 3,
    rank: 3,
    name: 'Emma Garcia',
    profileImage: 'https://i.pinimg.com/236x/dd/d1/e4/ddd1e499a601d0b942ba81130daae7e1.jpg',
    skillLevel: SKILL_LEVELS.LEGEND,
  },
  {
    id: 4,
    rank: 4,
    name: 'Michael Chen',
    profileImage: 'https://i.pinimg.com/236x/dd/d1/e4/ddd1e499a601d0b942ba81130daae7e1.jpg',
    skillLevel: SKILL_LEVELS.LEGEND,
  },
  {
    id: 5,
    rank: 5,
    name: 'Priya Sharma',
    profileImage: 'https://i.pinimg.com/236x/dd/d1/e4/ddd1e499a601d0b942ba81130daae7e1.jpg',
    skillLevel: SKILL_LEVELS.LEGEND,
  },
  {
    id: 6,
    rank: 6,
    name: 'Arjun Mehta',
    profileImage: 'https://i.pinimg.com/236x/dd/d1/e4/ddd1e499a601d0b942ba81130daae7e1.jpg',
    skillLevel: SKILL_LEVELS.LEGEND,
  },
  {
    id: 7,
    rank: 7,
    name: 'Sophia Patel',
    profileImage: 'https://i.pinimg.com/236x/dd/d1/e4/ddd1e499a601d0b942ba81130daae7e1.jpg',
    skillLevel: SKILL_LEVELS.LEGEND,
  },
];
