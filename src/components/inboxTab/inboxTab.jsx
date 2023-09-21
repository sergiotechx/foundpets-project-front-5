import React from 'react'
import './inboxTab.scss'

const InboxTab = () => {
  return (
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
  )
}

export default InboxTab