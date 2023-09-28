import React, { useEffect, useState } from 'react';
import './inboxTab.scss';
import { useSelector } from 'react-redux';
import { deleteMessage, ownerMessages } from '@/lib/pocketbase';
import Swal from 'sweetalert2';
import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const InboxTab = () => {
  const user = useSelector((store) => store.user);
  const userMessageId = user.user.id;

  const [opened, { open, close }] = useDisclosure(false);

  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    ownerMessages(userMessageId)
      .then((data) => {
        setMessages(data);
        console.log("estadata:", data);
      })
      .catch((error) => {
        console.error("Error al obtener mensajes:", error);
      });
  }, [userMessageId]);
  
  const formatDateM = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDeleteMessage = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Una vez eliminado, no podrás recuperar este mensaje.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      try {
        await deleteMessage(id);
        const updatedMessages = messages.filter((message) => message.id !== id);
        setMessages(updatedMessages);

        Swal.fire('Eliminado', 'El mensaje ha sido eliminado.', 'success');
      } catch (error) {
        console.error("Error al eliminar el mensaje:", error);
      }
    }
  };

  return (
    <div id='InboxTab'>
      <Modal opened={opened} onClose={close} title="Información y contacto">
        <form className="contactOwner">
          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="nombre@ejemplo.com"
            value={selectedMessage ? selectedMessage.contactData : ""}
          />
          <label>Nombre</label>
          <input
            type="text"
            value={selectedMessage ? selectedMessage.contactName : ""}
          />
          <label>Descripción de la mascota</label>
          <textarea
            className="description"
            type="textarea"
            cols="30"
            rows="10"
            value={selectedMessage ? selectedMessage.message : ""}
          ></textarea>
          <figure className='imageContact'>
          {selectedMessage&&<img src={selectedMessage.image}/>}
          </figure>
          {/* <Button color="indigo" radius="md" type="submit">
            Contactar
          </Button> */}
        </form>
      </Modal>

      <div className='InboxTabH'>
        <img src='/images/dogEmail.png' alt="Dog" />
        <h2>Mis mensajes</h2>
      </div>
      <table className='col-md-12'>
        <thead>
          <tr>
            <th className='col-md-3'>Nombre <i className="bi bi-sort-alpha-down"></i></th>
            <th className='col-md-7'>Asunto</th>
            <th className='col-md-1'>Fecha <i className="bi bi-sort-alpha-down"></i></th>
            <th className='col-md-1'>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={index}>
              <td>{message.contactName}</td>
              <td
                onClick={() => {
                  setSelectedMessage(message);
                  open();
                }}
              >
                {message.asunto}
              </td>
              <td>{formatDateM(message.updated)}</td>
              <td>
                <i
                  className="bi bi-trash3-fill fs-5"
                  id='TrashIcon'
                  onClick={() => handleDeleteMessage(message.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InboxTab;
