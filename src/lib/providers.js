'use client'
import Image from 'next/image'
import PocketBase from 'pocketbase';
import { useEffect } from 'react';
const pb = new PocketBase('https://foundpets.pockethost.io');



export const loginWithGoogle = async () => {
  
    /* const authData = await pb.collection('users').authWithPassword(
       'sergiotechx@yahoo.com',
       '0123456789',
   );*/
   
       // after the above you can also access the auth data from the authStore
       const authData2 = await pb.collection('users').authWithOAuth2({ provider: 'google' });
       console.log(pb.authStore.isValid);
       console.log(pb.authStore.token);
       console.log(pb.authStore.model.id);
       console.log("info",authData2);
       const user = {
        meta: {
          email: authData2.meta.email,
          id: authData2.meta.id,
          name: authData2.meta.name,
          avatarUrl: authData2.meta.avatarUrl,
          
        },

      };
  
      return user;
       
     }