'use client'
import React from 'react'
import './admin.scss'
import Header from '@/components/header/header'
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const Page = () => {
  return (
    <>
      <Header />
      <div className='AdminM'>
        <div className='AdminC'>
          <div className='AdminH'>
            <img src='/images/dogAdmin.png' />
            <h2>Sistema Administrativo</h2>
          </div>
          <div className='Admin_Search'>
          <p>Usuario</p>
          <TextInput
            placeholder="usuario a buscar"
            radius="lg"
            size="xs"
            icon={< IconSearch size="0.8rem" />}
          />
          <button>Buscar</button>
          </div>
          < table className='col-md-6'>
            <thead>
              <tr>
                <th className='col-md-3'>Usuario <i class="bi bi-sort-alpha-down"></i></th>
                <th className='col-md-2'>Ultimo ingreso <i class="bi bi-sort-alpha-down"></i></th>
                <th className='col-md-1'>Borrar</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Señor Huesos</td>
                <td>2023-09-14</td>
                <td><i class="bi bi-trash3-fill fs-5" id='TrashIcon'></i></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='AdminL'>
          < img src='/images/huellas3.png' />
          < img src='/images/puppy1.jpg' />
        </div>
      </div>
    </>
  )
}

export default Page