'use client'
import Header from '@/components/header/header'
import React from 'react'
import { Tabs } from '@mantine/core';
import { IconPawFilled, IconUserCircle, IconMail, IconMapPinHeart } from '@tabler/icons-react';

import './profile.scss'

const Page = () => {
  return (
    <>
      <Header />
      <div className='ProfileC'>
        <h1>Mi perfil</h1>
        <Tabs variant="outline" defaultValue="user">
          <Tabs.List>
            <Tabs.Tab icon={<IconUserCircle size="0.8rem" />} value="user" >Usuario</Tabs.Tab>
            <Tabs.Tab icon={<IconPawFilled size="0.8rem" />} value="pet" >Mascota</Tabs.Tab>
            <Tabs.Tab icon={<IconMail size="0.8rem" />} value="Inbox" >Mensajes</Tabs.Tab>
            <Tabs.Tab icon={<IconMapPinHeart size="0.8rem" />} value="Map" >Ubicación</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="user" >
            <div id='UserTab'>
              <figure>
                <i className="bi bi-person-circle fs-1">
                  <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                </i>
              </figure>

              <form>

                <div className="input-group col-md-12 mt-1">
                  <span className="col-md-11" ></span>


                  <h5 className="col-md-1 text-center">Público</h5>

                </div>
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
              </form>

            </div>
          </Tabs.Panel>

          <Tabs.Panel value="pet" >
            <div id='PetTab'>
              <div className='PetGallery'>
                <figure>
                  <img src='/images/EmptyDogPhotoGray.png' />
                  <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                </figure>
                <figure>
                  <img src='/images/EmptyDogPhotoGray.png' />
                  <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                </figure>
                <figure>
                  <img src='/images/EmptyDogPhotoGray.png' />
                  <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                </figure>
                <figure>
                  <img src='/images/EmptyDogPhotoGray.png' />
                  <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                </figure>
                <figure>
                  <img src='/images/EmptyDogPhotoGray.png' />
                  <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
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
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2Disabled">Disabled textarea with some text inside</textarea>
                </div>
              </form>


            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  )
}

export default Page