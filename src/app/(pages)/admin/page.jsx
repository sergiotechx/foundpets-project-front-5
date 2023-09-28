'use client'
import './admin.scss'
import React, { useState, useEffect } from 'react';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction, deleDataAction } from '@/store/admin/adminActions';
import { Button, Text } from '@mantine/core';
import Swal from "sweetalert2";

const Page = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const users = useSelector((store) => store.admin.users);
  const status = useSelector((store) => store.auth.status);
  console.log('status', status)
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

  const handleDeleteUser = async (userId) => {
    const answer = await Swal.fire({

      title: "¿Estás seguro?",
      text: "¿Quieres eliminar este usuario?",
      icon: "warning",
      confirmButtonText: "Sí",
      confirmButtonColor: "#7FD161",
      cancelButtonText: "No",
      cancelButtonColor: "#CDD4DA",
      showCancelButton: true,
    })
    if(answer.isConfirmed){
      dispatch(deleDataAction(userId));
    }
  };

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
