import { RESOURCES } from 'config/constants';

export const appInformation: App.Information[] = [
  {
    title: 'web map',
    contents: [
      'Home',
      'Games',
      'News',
      'Math',
      'Company',
      'Events',
      'Partners',
    ],
  },
  {
    title: 'About Us',
    contents: [
      'Licensing',
      'Certification',
      'Responsible Gaming',
      'Exhibitions',
      'Copyright Protection',
      'Copyright Protection',
      'Privacy Policy',
    ],
  },
  {
    title: 'Events',
    contents: ['PG ICE 2017', 'PG ICE 2018', 'PG ICE 2019', 'About ICE'],
  },
  {
    title: 'Our Partners',
    contents: ['Relax Gaming', 'Leander Games'],
  },
];

export const hotGameData: Game.HotGame[] = [
  {
    id: '1',
    name: 'Mahjong Ways',
    description:
      '4TECH™ has just launched their very first Mahjong inspired slot machine game 4 TECH™ has just launched their very first Mahjong inspired slot machine game',
    icon: RESOURCES.HOT_GAME_ICON_1,
    image: RESOURCES.HOT_GAME_1,
  },
  {
    id: '2',
    name: 'Wild Bandito',
    description:
      'Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activity',
    icon: RESOURCES.HOT_GAME_ICON_2,
    image: RESOURCES.HOT_GAME_2,
  },
  {
    id: '3',
    name: 'Mahjong Ways',
    description:
      '4TECH™ has just launched their very first Mahjong inspired slot machine game 4 TECH™ has just launched their very first Mahjong inspired slot machine game',
    icon: RESOURCES.HOT_GAME_ICON_1,
    image: RESOURCES.HOT_GAME_1,
  },
  {
    id: '4',
    name: 'Wild Bandito',
    description:
      'Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activity',
    icon: RESOURCES.HOT_GAME_ICON_2,
    image: RESOURCES.HOT_GAME_2,
  },
];

export const hotCategoryData: Game.HotCategory[] = [
  {
    id: '1',
    name: 'Music',
    description:
      'Music makes everything better, and these games will grove to it!',
    logos: [
      RESOURCES.CATEGORY_LOGO_1,
      RESOURCES.CATEGORY_LOGO_2,
      RESOURCES.CATEGORY_LOGO_3,
      RESOURCES.CATEGORY_LOGO_4,
    ],
    image: RESOURCES.CATEGORY_IMAGE_1,
    icon: RESOURCES.MUSIC_ICON,
  },
  {
    id: '2',
    name: 'Table Games',
    description: 'The classic table games for the gentlemen and ladies.',
    logos: [
      RESOURCES.CATEGORY_LOGO_1,
      RESOURCES.CATEGORY_LOGO_2,
      RESOURCES.CATEGORY_LOGO_3,
      RESOURCES.CATEGORY_LOGO_4,
    ],
    image: RESOURCES.CATEGORY_IMAGE_2,
    icon: RESOURCES.POKER_ICON,
  },
  {
    id: '3',
    name: 'Music',
    description:
      'Music makes everything better, and these games will grove to it!',
    logos: [
      RESOURCES.CATEGORY_LOGO_1,
      RESOURCES.CATEGORY_LOGO_2,
      RESOURCES.CATEGORY_LOGO_3,
      RESOURCES.CATEGORY_LOGO_4,
    ],
    image: RESOURCES.CATEGORY_IMAGE_1,
    icon: RESOURCES.MUSIC_ICON,
  },
  {
    id: '4',
    name: 'Table Games',
    description: 'The classic table games for the gentlemen and ladies.',
    logos: [
      RESOURCES.CATEGORY_LOGO_1,
      RESOURCES.CATEGORY_LOGO_2,
      RESOURCES.CATEGORY_LOGO_3,
      RESOURCES.CATEGORY_LOGO_4,
    ],
    image: RESOURCES.CATEGORY_IMAGE_2,
    icon: RESOURCES.POKER_ICON,
  },
];
