import { CategoryRef } from './categoryref.model';
import { RelatedParty } from './relatedparty.model';

export interface Catalog{
  id: string,
  href: string,
  catalogType: string,
  description: string,
  lastUpdate: Date,
  lifecycleStatus: string,
  name: string,
  version: string,
  validFor: Date,
  category?: Array<CategoryRef>,
  relatedParty?: Array<RelatedParty>,
}