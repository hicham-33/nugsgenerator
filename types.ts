export enum DeviceType {
  QUEST2 = 'Meta Quest 2',
  QUEST3 = 'Meta Quest 3',
  QUESTPRO = 'Meta Quest Pro'
}

export enum NugAmount {
  LOW = '1000',
  MEDIUM = '2500',
  HIGH = '5000',
  MAX = '9999'
}

export interface UserState {
  username: string;
  device: DeviceType;
  nugs: NugAmount;
  rareItems: boolean;
}

export enum AppStep {
  FORM = 'FORM',
  GENERATING = 'GENERATING',
  VERIFY = 'VERIFY'
}

export interface ConsoleLog {
  id: number;
  text: string;
  type: 'info' | 'success' | 'warning' | 'error';
}