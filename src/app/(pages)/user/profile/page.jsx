'use client'
import React, { useEffect } from 'react'
import { Tabs } from '@mantine/core';
import { IconPaw, IconUserCircle, IconMail, IconMapPinHeart } from '@tabler/icons-react';
import UserTab from '@/components/userTab/userTab';
import PetTab from '@/components/petTab/petTab';
import InboxTab from '@/components/inboxTab/inboxTab';
import MapTab from '@/components/mapTab/mapTab';
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import './profile.scss'
import { getUserDataAction } from '@/store/user/userActions';

const Page = () => {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  const user = useSelector((store) => store.user);
  const router = useRouter();
  const loadData = () => {
    
    if (Object.entries(user.user).length === 0) {
      dispatch(getUserDataAction(auth.user.record.id))
    }
  }

useEffect(() => {

  if (auth.status != "not-authenticated") {
    loadData()
  }
  else {
    router.push('/')
  }
}, [])


return (
  <>

    <div className='ProfileM'>

      <div className='ProfileC'>
        <h1>Mi perfil</h1>

        <Tabs variant="outline" defaultValue="user">
          <Tabs.List>
            <Tabs.Tab icon={<IconUserCircle size="1rem" color="black" />} value="user" >
              <span className="text-body-emphasis text-center fs-6">Usuario</span>
              </Tabs.Tab>
            <Tabs.Tab icon={<IconPaw size="1rem" color="black"/>} value="pet" > 
            <span  className="text-body-emphasis text-center fs-6">Mascota</span>
            </Tabs.Tab>
            <Tabs.Tab icon={<IconMail size="1rem" color="black" />} value="inbox" >
              <span  className="text-body-emphasis text-center fs-6">Mensajes</span>
              </Tabs.Tab>
            <Tabs.Tab icon={<IconMapPinHeart  size="1rem" color="black"/>} value="map" >
              <span  className="text-body-emphasis text-center fs-6">Ubicación</span></Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="user" >
            <UserTab />
          </Tabs.Panel>

          <Tabs.Panel value="pet" >
            <PetTab />
          </Tabs.Panel>

          <Tabs.Panel value="inbox" >
            <InboxTab />
          </Tabs.Panel>

          <Tabs.Panel value="map" >
            <MapTab />
          </Tabs.Panel>

        </Tabs>
      </div>
      <div className='ProfileL'>
        < img src='/images/huellas3.png' />
        < img src='/images/puppy1.jpg' />
      </div>

    </div>

  </>
)
}

export default Page