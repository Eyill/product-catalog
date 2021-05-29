import { CategoryRef } from './categoryref.model';
import { ProductOfferingRef } from './productofferingref.model';

export interface Category{
  id: string,
  href: string,
  description: string,
  isRoot: boolean,
  lastUpdate: any, //DateTime
  lifecycleStatus: string,
  name: string,
  parentId: string,
  version: string,
  validFor: any, //TimePeriod
  category?: Array<CategoryRef>,
  productOffering?: Array<ProductOfferingRef>,
  
  //@baseType: string,
  //@schemaLocation: Uri
  //@type: string
}