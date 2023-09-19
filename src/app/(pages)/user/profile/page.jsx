'use client'
import Header from '@/components/header/header'
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
import './profile.scss'
import { species, genre } from '../../../../lib/constants'

const Page = () => {
  let content = '<h2>Hola mundo Found Pet!</h2>'

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content,
  });
  const userForm = useForm({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      address: ''
    },
    validate: {
      name: (value) => (value.length < 5 ? 'Debe tener almenos 5 digitos' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Correo invalido'),
      mobile: (value) => (value.length < 9 ? 'Debe tener almenos 10 digitos' : null),
      address: (value) => (value.length < 9 ? 'Debe tener almenos 10 digitos' : null),
    },
  });
  const updateUserData = async (values) => {
  }
  const petForm = useForm({
    initialValues: {
      name: '',
      species: '',
      genre: '',
      age: 0
    },
    validate: {
      name: (value) => (value.length < 5 ? 'Debe tener almenos 5 digitos' : null),
      // specie: (value) => (/^\S+@\S+$/.test(value) ? null : 'Correo invalido'),
      // mobile: (value) => (value.length < 9 ? 'Debe tener almenos 10 digitos' : null),
      //  address: (value) => (value.length < 9 ? 'Debe tener almenos 10 digitos' : null),
    },
  });
  const updatePetData = async (values) => {
  }

  return (
    <>
      <Header />
      <div className='ProfileM'>

        <div className='ProfileC'>
          <h1>Mi perfil</h1>

          <Tabs variant="outline" defaultValue="user">
            <Tabs.List>
              <Tabs.Tab icon={<IconUserCircle size="0.8rem" />} value="user" >Usuario</Tabs.Tab>
              <Tabs.Tab icon={<IconPawFilled size="0.8rem" />} value="pet" >Mascota</Tabs.Tab>
              <Tabs.Tab icon={<IconMail size="0.8rem" />} value="inbox" >Mensajes</Tabs.Tab>
              <Tabs.Tab icon={<IconMapPinHeart size="0.8rem" />} value="map" >Ubicación</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="user" >
              <div id='UserTab'>
                <figure>
                  <i className="bi bi-person-circle fs-1">
                    <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                  </i>
                </figure>
                <form onSubmit={userForm.onSubmit((values) => updateUserData(values))}>
                  < table>
                    <thead>
                      <tr>
                        <th className="col-md-1 invisible" scope="col">Items</th>
                        <th className="col-md-9 invisible" scope="col">Expenditure</th>
                        <th className="col-md-1 invisible" scope="col">Items</th>
                        <th className="col-md-1 " scope="col">Visible</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Nombre</td>
                        <td ><TextInput
                          label=""
                          placeholder="Nombre completo"
                          {...userForm.getInputProps('name')}
                        /></td>
                        <td><i className="bi bi-pencil " /></td>
                        <td><input className="form-check-input   invisible" type="checkbox" id="checkboxNoLabel" value="" /></td>
                      </tr>
                      <tr>
                        <td>Correo</td>
                        <td ><TextInput
                          label=""
                          placeholder="Correo electrónico"
                          {...userForm.getInputProps('email')}
                        /></td>
                        <td><i className="bi bi-pencil " /></td>
                        <td><input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" /></td>
                      </tr>
                      <tr>
                        <td>Celular</td>
                        <td ><TextInput
                          label=""
                          placeholder="Número celular"
                          {...userForm.getInputProps('mobile')}
                        /></td>
                        <td><i className="bi bi-pencil" /></td>
                        <td><input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" /></td>
                      </tr>
                      <tr>
                        <td>Dirección</td>
                        <td ><TextInput
                          label=""
                          placeholder="Dirección"
                          {...userForm.getInputProps('address')}
                        /></td>
                        <td><i className="bi bi-pencil " /></td>
                        <td><input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" /></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="form-check form-switch mt-4">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" for="flexSwitchCheckDefault">Habilitar búsqueda</label>
                  </div>
                  <button >Actualizar</button>
                </form>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="pet" >
              <div id='PetTab'>
                <div className='PetGallery'>
                  <figure>
                    <img src='/images/EmptyDogPhotoGray.png' />
                    <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                    <i class="bi bi-trash3-fill fs-5" id='TrashIcon'></i>
                  </figure>
                  <figure>
                    <img src='/images/EmptyDogPhotoGray.png' />
                    <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                    <i class="bi bi-trash3-fill fs-5" id='TrashIcon'></i>
                  </figure>
                  <figure>
                    <img src='/images/EmptyDogPhotoGray.png' />
                    <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                    <i class="bi bi-trash3-fill fs-5" id='TrashIcon'></i>
                  </figure>
                  <figure>
                    <img src='/images/EmptyDogPhotoGray.png' />
                    <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                    <i class="bi bi-trash3-fill fs-5" id='TrashIcon'></i>
                  </figure>
                  <figure>
                    <img src='/images/EmptyDogPhotoGray.png' />
                    <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                    <i class="bi bi-trash3-fill fs-5" id='TrashIcon'></i>
                  </figure>
                </div>
                <form onSubmit={petForm.onSubmit((values) => updatePetData(values))}>
                  < table>
                    <thead>
                      <tr>
                        <th className="col-md-1 invisible" scope="col">Items</th>
                        <th className="col-md-9 invisible" scope="col">Expenditure</th>
                        <th className="col-md-1 invisible" scope="col">Items</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Nombre</td>
                        <td ><TextInput
                          label=""
                          placeholder="Nombre mascota"
                          {...petForm.getInputProps('name')}
                        /></td>
                        <td><i className="bi bi-pencil " /></td>
                      </tr>
                      <tr>
                        <td>Especie</td>
                        <td >
                          <Select
                            data={species}
                          />
                        </td>
                        <td><i className="bi bi-pencil " /></td>
                      </tr>
                      <tr>
                        <td>Género</td>
                        <td >
                          <Select
                            data={genre}
                          />
                        </td>
                        <td><i className="bi bi-pencil " /></td>
                      </tr>
                      <tr>
                        <td>Edad</td>
                        <td >
                          <NumberInput
                            //label="Enter value between 10 and 20"
                            placeholder="El rang de edad va de 0 a 30 años"
                            min={0}
                            max={30}
                          />
                        </td>
                        <td><i className="bi bi-pencil " /></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="col-md-10">
                    <span className="col-md-2" >Otras descripciones</span>
                    <RichTextEditor editor={editor}>
                      <RichTextEditor.Toolbar sticky stickyOffset={60}>
                        <RichTextEditor.ControlsGroup>
                          <RichTextEditor.Bold />
                          <RichTextEditor.Italic />
                          <RichTextEditor.Underline />
                          <RichTextEditor.Strikethrough />
                          <RichTextEditor.ClearFormatting />
                          <RichTextEditor.Highlight />
                          <RichTextEditor.Code />
                        </RichTextEditor.ControlsGroup>

                        <RichTextEditor.ControlsGroup>
                          <RichTextEditor.H1 />
                          <RichTextEditor.H2 />
                          <RichTextEditor.H3 />
                          <RichTextEditor.H4 />
                        </RichTextEditor.ControlsGroup>

                        <RichTextEditor.ControlsGroup>
                          <RichTextEditor.Blockquote />
                          <RichTextEditor.Hr />
                          <RichTextEditor.BulletList />
                          <RichTextEditor.OrderedList />
                          <RichTextEditor.Subscript />
                          <RichTextEditor.Superscript />
                        </RichTextEditor.ControlsGroup>

                        <RichTextEditor.ControlsGroup>
                          <RichTextEditor.Link />
                          <RichTextEditor.Unlink />
                        </RichTextEditor.ControlsGroup>

                        <RichTextEditor.ControlsGroup>
                          <RichTextEditor.AlignLeft />
                          <RichTextEditor.AlignCenter />
                          <RichTextEditor.AlignJustify />
                          <RichTextEditor.AlignRight />
                        </RichTextEditor.ControlsGroup>
                      </RichTextEditor.Toolbar>

                      <RichTextEditor.Content />
                    </RichTextEditor>
                  </div>
                  <button id='BtnActualizar'>Actualizar</button>
                </form>
             


              </div>
            </Tabs.Panel>
            <Tabs.Panel value="inbox" >
              <div id='InboxTab'>
                <div className='InboxTabH'>
                  <img src='/images/dogEmail.png' />
                  <h2>Mis mensajes</h2>
                </div>
                < table className='col-md-12'>
                  <thead>
                    <tr>
                      <th className='col-md-3'>Nombre <i class="bi bi-sort-alpha-down"></i></th>
                      <th className='col-md-7'>Mensaje</th>
                      <th className='col-md-1'>Fecha <i class="bi bi-sort-alpha-down"></i></th>
                      <th className='col-md-1'>Borrar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Señor Huesos</td>
                      <td>Encontré a Firulais!</td>
                      <td>2023-09-14</td>
                      <td><i class="bi bi-trash3-fill fs-5" id='TrashIcon'></i></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="map" >
              <div id='MapTab'>
                <div className='MapTabH'>
                  <img src='/images/dogMagnifier.png' />
                  <h2>¿Dónde está mi mascota?</h2>
                </div>

                <div className='MapTabB'>
                  <img src='/images/fakeMap.png' />
                </div>
              </div>
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