'use client'
import React, {useEffect} from 'react'
import './admin.scss'
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { store } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '@/store/admin/adminActions';

const Page = () => {
  const dispatch = useDispatch();
  const { admin } = useSelector((store) => store.admin);
  
  useEffect(() => {
    
    dispatch(getDataAction())
    
  }, [])
  
  return (
    
      <div className='AdminM'>
        {console.log('iiii',admin)}
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
                <th className='col-md-3'>Usuario <i className="bi bi-sort-alpha-down"></i></th>
                <th className='col-md-2'>Ultimo ingreso <i className="bi bi-sort-alpha-down"></i></th>
                <th className='col-md-1'>Borrar</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Señor Huesos</td>
                <td>2023-09-14</td>
                <td><i className="bi bi-trash3-fill fs-5" id='TrashIcon'></i></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='AdminL'>
          < img src='/images/huellas3.png' />
          < img src='/images/puppy1.jpg' />
        </div>
      </div>
   
  )
}

export default Page