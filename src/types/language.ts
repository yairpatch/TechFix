export type Language = 'he' | 'ru';

export interface Translation {
  title: string;
  subtitle: string;
  services: string;
  computerRepair: string;
  computerRepairDesc: string;
  virusRemoval: string;
  virusRemovalDesc: string;
  callNow: string;
  available247: string;
  findUs: string;
  address: string;
  direction: 'rtl' | 'ltr';
  expertService: string;
  yearsExperience: string;
  languageName: string;
  pickupService: string;
  pickupServiceDesc: string;
  createdBy: string;
  allRightsReserved: string;
  metaDescription: string;
  metaKeywords: string;
}