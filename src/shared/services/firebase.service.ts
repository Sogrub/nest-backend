import { UserFirebaseModel } from '@/self-service/models/selfService.models';
import { Injectable } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import {
  collection,
  getDocs,
  getFirestore,
  where,
  query,
  QueryDocumentSnapshot,
  addDoc,
} from 'firebase/firestore/lite';

const app = initializeApp({
  apiKey: 'AIzaSyD4hRi2qxlG50K315SbhE8nb5LWqcA0QNY',
  authDomain: 'econtainers2022.firebaseapp.com',
  projectId: 'econtainers2022',
  storageBucket: 'econtainers2022.appspot.com',
  messagingSenderId: '178845195151',
  appId: '1:178845195151:web:af2448ec05b5d25d1f89fa',
});
const dataBase = getFirestore(app);
const selfServiceUserCollection = collection(dataBase, 'selfServiceUser');

@Injectable()
export class FirebaseService {
  async getAll() {
    const documents = await getDocs(selfServiceUserCollection);
    const resultsAll = documents.docs.map((doc) => doc.data());
    return resultsAll;
  }

  async getOne(email: string): Promise<UserFirebaseModel> {
    let userCredentials: UserFirebaseModel;
    const oneDocument = query(
      selfServiceUserCollection,
      where('email', '==', email),
    );
    const docSnap = await getDocs(oneDocument);
    docSnap.forEach((doc: QueryDocumentSnapshot<UserFirebaseModel>) => {
      console.log('Esto es data =>', doc.data());
      userCredentials = doc.data();
    });
    return userCredentials;
  }

  async createOne(data : UserFirebaseModel) {
    const docRef = await addDoc(selfServiceUserCollection, data);
    console.log("Document written with ID: ", docRef.id);
  }

  // updateOne(){}

  // deleteOne(){}
}
