'use client'
import './admin.scss'
import React, { useState, useEffect } from 'react';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction, deleDataAction } from '@/store/admin/adminActions';
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

const Page = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const users = useSelector((store) => store.admin.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAction());
  }, [])
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDeleteUser = (userId) => {
    // Dispatch a la acción para eliminar el usuario por su ID
    // Puedes crear una acción como deleteUserAction(userId) y usarla aquí
    // Luego, después de eliminar el usuario, actualiza la lista de usuarios
    // Esto puede implicar otra llamada a la acción para cargar los usuarios nuevamente.
    //dispatch(deleDataAction(userId));
 
    openModal(userId);
  };

  const openModal = (userId) => modals.openConfirmModal({
  
    title: '¿Está seguro de realizar esta operación?',
    children: (
      <Text size="sm">
        Esta acción, borrará de manera permanente al usuario.
      </Text>
    ),
    labels: { confirm: 'Confirmar', cancel: 'Cancelar' },
    confirmProps: { color: 'green' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () =>deleteUser(userId),
  });
  
  const deleteUser= (userId)=>{
    dispatch(deleDataAction(userId));
  }

  return (
    <div className='AdminM'>
      <div className='AdminC'>
        <div className='AdminH'>
          <img src='/images/dogAdmin.png' />
          <h2>Sistema Administrativo</h2>
        </div>
        <div className='Admin_Search'>
          <p>Usuario</p>
          <TextInput
            placeholder="Usuario a buscar"
            radius="lg"
            size="xs"
            icon={<IconSearch size="0.8rem" />}
            value={searchTerm} // Asigna el valor del estado searchTerm al input
            onChange={(event) => setSearchTerm(event.target.value)} // Actualiza searchTerm en cada cambio
          />
          <button>Buscar</button>
        </div>
        <table className='col-md-6'>
          <thead >
            <tr>
              <th className='col-md-3'>Usuario <i className="bi bi-sort-alpha-down"></i></th>
              <th className='col-md-2'>Ultimo ingreso <i className="bi bi-sort-alpha-down"></i></th>
              <th className='col-md-1'>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers && filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{formatDate(user.date)}</td>
                  <td>
                    <i
                      className="bi bi-trash3-fill fs-5"
                      id='TrashIcon'
                      onClick={() => handleDeleteUser(user.id)}
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No se encontraron usuarios</td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
      <div className='AdminL'>
        <img src='/images/huellas3.png' />
        <img src='/images/puppy1.jpg' />
      </div>
    </div>
  )
}

export default Page;
