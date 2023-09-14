'use client'
import Header from '@/components/header/header'
import React from 'react'
import { Tabs } from '@mantine/core';
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

                <form>
                  < table>
                    <tbody>
                      <tr>
                        <td className="col-md-11 invisible">a</td>
                        <td className="col-md-1 text-center">Visible</td>
                      </tr>
                    </tbody>
                  </table>


                  <div className="input-group  mt-1">
                    <span className="input-group-text col-md-1" >Usuario</span>
                    <div className="col-md-9" >
                      <input type="text" className="form-control" placeholder="Usuario" />
                    </div>

                    <div className='Operations col-md-2 '>
                      <i className="bi bi-pencil col-md-1" />
                      <input className="form-check-input col-md-1" type="checkbox" id="checkboxNoLabel" value="" />
                    </div>

                  </div>
                  <div className="input-group col-md-12 mt-1">
                    <span className="input-group-text col-md-1" >Nombre</span>
                    <div className="col-md-9" >
                      <input type="text" className="form-control" placeholder="nombre" />
                    </div>
                    <div className='Operations col-md-2 '>
                      <i className="bi bi-pencil col-md-1" />
                      <input className="form-check-input col-md-1" type="checkbox" id="checkboxNoLabel" value="" />
                    </div>
                  </div>
                  <div className="input-group col-md-12 mt-1">
                    <span className="input-group-text col-md-1" >Correo</span>
                    <div className="col-md-9" >
                      <input type="email" className="form-control" placeholder="Correo" />
                    </div>
                    <div className='Operations col-md-2 '>
                      <i className="bi bi-pencil col-md-1" />
                      <input className="form-check-input col-md-1" type="checkbox" id="checkboxNoLabel" value="" />
                    </div>
                  </div>
                  <div className="input-group col-md-12 mt-1">
                    <span className="input-group-text col-md-1" >Celular</span>
                    <div className="col-md-9" >
                      <input type="text" className="form-control" placeholder="Celular" />
                    </div>
                    <div className='Operations col-md-2 '>
                      <i className="bi bi-pencil col-md-1" />
                      <input className="form-check-input col-md-1" type="checkbox" id="checkboxNoLabel" value="" />
                    </div>
                  </div>
                  <div className="input-group col-md-12 mt-1">
                    <span className="input-group-text col-md-1" >Dirección</span>
                    <div className="col-md-9" >
                      <input type="text" className="form-control" placeholder="Dirección" />
                    </div>
                    <div className='Operations col-md-2 '>
                      <i className="bi bi-pencil col-md-1" />
                      <input className="form-check-input col-md-1" type="checkbox" id="checkboxNoLabel" value="" />
                    </div>
                  </div>
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
                <form>
                  <div className="input-group col-md-12 mt-2">
                    <span className="input-group-text col-md-1" >Nombre</span>
                    <div className="col-md-9" >
                      <input type="text" className="form-control" placeholder="Nombre" />
                    </div>
                    <i className="bi bi-pencil col-md-1 text-center" />
                  </div>
                  <div className="input-group col-md-11 mt-1">
                    <span className="input-group-text col-md-1" >Especie</span>
                    <div className="col-md-9" >
                      <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Especie</option>
                        <option value="1">Gato</option>
                        <option value="2">Perro</option>
                      </select>
                    </div>
                    <i className="bi bi-pencil col-md-1 text-center" />
                  </div>
                  <div className="input-group col-md-11 mt-1">
                    <span className="input-group-text col-md-1" >Raza</span>
                    <div className="col-md-9" >
                      <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Raza</option>
                        <option value="1">Gato</option>
                        <option value="2">Perro</option>
                      </select>
                    </div>
                    <i className="bi bi-pencil col-md-1 text-center" />
                  </div>
                  <div className="input-group col-md-11 mt-1">
                    <span className="input-group-text col-md-1" >Género</span>
                    <div className="col-md-9" >
                      <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Género</option>
                        <option value="1">Macho</option>
                        <option value="2">Hembra</option>
                      </select>
                    </div>
                    <i className="bi bi-pencil col-md-1 text-center" />
                  </div>
                  <div className="input-group col-md-11 mt-1">
                    <span className="input-group-text col-md-1" >Edad</span>
                    <div className="col-md-1" >
                      <input type="number" className="form-control" placeholder="Edad" />
                    </div>
                    <i className="bi bi-pencil col-md-1 text-center" />
                  </div>
                  <div className="input-group col-md-11 mt-1">
                    <span className="input-group-text col-md-1" >Color</span>
                    <div className="col-md-9" >
                      <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Color</option>
                        <option value="1">Amarillo</option>
                        <option value="2">Negro</option>
                      </select>
                    </div>
                    <i className="bi bi-pencil col-md-1 text-center" />
                  </div>
                  <div className="col-md-10">
                    <span className="input-group-text col-md-2" >Otras descripciones</span>
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
                  <button  id='BtnActualizar'>Actualizar</button> 
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