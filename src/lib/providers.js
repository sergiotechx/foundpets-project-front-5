'use client'

import PocketBase from 'pocketbase';
import { amp } from '../../next.config';
const pb = new PocketBase('https://foundpets.pockethost.io');



export const loginWithGoogle = async () => {
  
    
   try {
    const authData2 = await pb.collection('users').authWithOAuth2({ provider: 'google' });
    console.log("info",authData2);
  //   const user = {
  //    meta: {
  //      email: authData2.meta.email,
  //      id: authData2.meta.id,
  //      name: authData2.meta.name,
  //      avatarUrl: authData2.meta.avatarUrl,
       
  //    },

  //  };
    
    return authData2;

   } catch (error) {
    if(error.message == "Failed to authenticate");{
    const user = {
      meta: {
        email: null,
        id: null,
        name: null,
        avatarUrl: null,   
      },    
   }     
   return user;
  }
  throw error;
     }
    }