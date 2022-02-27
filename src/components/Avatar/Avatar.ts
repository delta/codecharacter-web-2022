import duck from '../../assets/avatars/duck.png';
import elephant from '../../assets/avatars/elephant.png';
import giraffe from '../../assets/avatars/giraffe.png';
import frog from '../../assets/avatars/frog.png';
import monkey from '../../assets/avatars/monkey.png';
import moose from '../../assets/avatars/moose.png';
import narwhal from '../../assets/avatars/narwhal.png';
import owl from '../../assets/avatars/owl.png';
import panda from '../../assets/avatars/panda.png';
import parrot from '../../assets/avatars/parrot.png';
import penguin from '../../assets/avatars/penguin.png';
import pig from '../../assets/avatars/pig.png';
import rabbit from '../../assets/avatars/rabbit.png';
import rhino from '../../assets/avatars/rhino.png';
import sloth from '../../assets/avatars/sloth.png';
import snake from '../../assets/avatars/snake.png';
import walrus from '../../assets/avatars/walrus.png';
import whale from '../../assets/avatars/whale.png';
import zebra from '../../assets/avatars/zebra.png';
import horse from '../../assets/avatars/horse.png';

interface AvatarType {
  id: number;
  url: string;
}

const avatars: AvatarType[] = [
  {
    id: 0,
    url: duck,
  },
  {
    id: 1,
    url: elephant,
  },
  {
    id: 2,
    url: giraffe,
  },
  {
    id: 3,
    url: frog,
  },
  {
    id: 4,
    url: monkey,
  },
  {
    id: 5,
    url: moose,
  },
  {
    id: 6,
    url: narwhal,
  },
  {
    id: 7,
    url: owl,
  },
  {
    id: 8,
    url: panda,
  },
  {
    id: 9,
    url: parrot,
  },
  {
    id: 10,
    url: penguin,
  },
  {
    id: 11,
    url: pig,
  },
  {
    id: 12,
    url: rabbit,
  },
  {
    id: 13,
    url: rhino,
  },
  {
    id: 14,
    url: sloth,
  },
  {
    id: 15,
    url: snake,
  },
  {
    id: 16,
    url: walrus,
  },
  {
    id: 17,
    url: whale,
  },
  {
    id: 18,
    url: zebra,
  },
  {
    id: 19,
    url: horse,
  },
];

export const getAvatarByID = (id: number): AvatarType => {
  return avatars[id];
};

export const getAllAvatars = (): AvatarType[] => {
  return avatars;
};
