import { CategoryRef } from './categoryref.model';
import { ProductOfferingRef } from './productofferingref.model';

export interface Category{
  id: string,
  href: string,
  description: string,
  isRoot: boolean,
  lastUpdate: Date,
  lifecycleStatus: string,
  name: string,
  parentId: string,
  version: string,
  validFor: Date, 
  category?: Array<CategoryRef>,
  productOffering?: Array<ProductOfferingRef>,
}