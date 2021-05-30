import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Catalog } from '../shared/models/catalog.model';

@Injectable({
  providedIn: 'root'
})

export class FbBaseService <T extends { id?: string }> {  

  constructor(private afs: AngularFirestore) { }

  async add(collectionName: string, data: Catalog, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }
  
  get(collectionName: string){
   return this.afs.collection(collectionName, ref => {
     let query: CollectionReference | Query = ref;
     query = query.orderBy('id', 'asc');
     return query;
   }).valueChanges() as Observable<T[]>;
  }
  
  getById(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }

  update(collectionName: string, id: string, data: T): Promise<void> {
    return this.afs.collection(collectionName).doc(id).update(data).then(
      result => { console.log(result); }, err => { console.log(err); }).finally(() => { console.log('finally'); });
  }

  delete(collectionName: string, id: string): Promise<void> {
    return this.afs.collection(collectionName).doc(id).delete();
  }
}