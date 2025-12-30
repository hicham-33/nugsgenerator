import React from 'react';
import { DeviceType, NugAmount } from './types';

export const DEVICES = [
  { value: DeviceType.QUEST2, label: 'Meta Quest 2' },
  { value: DeviceType.QUEST3, label: 'Meta Quest 3' },
  { value: DeviceType.QUESTPRO, label: 'Meta Quest Pro' },
];

export const NUG_AMOUNTS = [
  { value: NugAmount.LOW, label: '1,000 Gold Nugs' },
  { value: NugAmount.MEDIUM, label: '2,500 Gold Nugs' },
  { value: NugAmount.HIGH, label: '5,000 Gold Nugs' },
  { value: NugAmount.MAX, label: '9,999 Gold Nugs' },
];

export const RARE_ITEM_IMAGE = "https://i.postimg.cc/MTYP26Ck/1767135774116-019b717f-9a1d-7b45-90bb-4407c89113be.jpg";
export const GOLD_NUGS_IMAGE = "https://i.postimg.cc/XvjB1nkF/1767136242712-019b7185-2946-7098-b41f-65df473a4623-removebg-preview.png";

export const FAQS = [
  {
    question: "Is the UG VR Gold Nugs Generator safe?",
    answer: "Yes. We use 256-bit AES encryption to communicate with game servers, ensuring your account remains completely anonymous and safe."
  },
  {
    question: "Does this work on Quest 2 & Quest 3?",
    answer: "Absolutely. Our tool is optimized for all Meta Quest standalone devices including Quest 2, Quest 3, and Quest Pro."
  },
  {
    question: "Can I get rare dinosaur eggs?",
    answer: "Yes! Select the 'Rare Items' checkbox before generating to include a random Rare Dinosaur Egg in your package."
  },
  {
    question: "Is this updated for 2026?",
    answer: "The generator is updated daily. Current version: v4.2.0 (2026 Patch Verified)."
  }
];

export const RECENT_ACTIVITY = [
  { user: "Alex_VR99", amount: "9999", time: "2 mins ago" },
  { user: "DinoHunter23", amount: "5000", time: "4 mins ago" },
  { user: "QuestMasterX", amount: "9999", time: "5 mins ago" },
  { user: "SarahPlays", amount: "2500", time: "8 mins ago" },
  { user: "UG_Pro_Max", amount: "5000", time: "12 mins ago" },
];