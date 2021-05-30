import { CategoryRef } from './categoryref.model';
import { Ref } from './ref.model';
import { RelatedParty } from './relatedparty.model';

export interface ProductOffering{
  id: string,
  href: string,
  description: string,
  isBundle: boolean,
  isSellable: boolean,
  lastUpdate: Date,
  lifecycleStatus: string,
  statusReason: string,
  name: string,
  version: string,
  validFor: string,
  category?: Array<CategoryRef>,
  relatedParty?: Array<RelatedParty>,
  channel?: Array<Ref>,
  marketSegment?: Array<Ref>,
  place?:  Array<Ref>,
  productOfferingPrice?: Array<Ref>,
  aggrement?: Array<Ref> 
}