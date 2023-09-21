'use client'
import React from 'react'
import { TextInput, PasswordInput, Button, Modal, Loader, Select, NumberInput, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { IconPawFilled, IconUserCircle, IconMail, IconMapPinHeart } from '@tabler/icons-react';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import UserTab from '@/components/userTab/userTab';
import PetTab from '@/components/petTab/petTab';
import InboxTab from '@/components/inboxTab/inboxTab';
import MapTab from '@/components/mapTab/mapTab';
import './profile.scss'
const Page = () => {


  return (
    <>

      <div className='ProfileM'>

        <div className='ProfileC'>
          <h1>Mi perfil</h1>

          <Tabs variant="outline" defaultValue="user">
            <Tabs.List>
              <Tabs.Tab icon={<IconUserCircle size="1rem" />} value="user" >Usuario</Tabs.Tab>
              <Tabs.Tab icon={<IconPawFilled size="1rem" />} value="pet" >Mascota</Tabs.Tab>
              <Tabs.Tab icon={<IconMail size="1rem" />} value="inbox" >Mensajes</Tabs.Tab>
              <Tabs.Tab icon={<IconMapPinHeart size="1rem" />} value="map" >Ubicación</Tabs.Tab>
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