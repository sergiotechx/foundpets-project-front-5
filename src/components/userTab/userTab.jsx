import React, { useEffect, useState } from "react";
import { TextInput, PasswordInput, Button, Modal, Loader, Select, NumberInput, Tabs, Switch } from '@mantine/core';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import './userTab.scss';

const UserTab = () => {
  const auth = useSelector((store) => store.auth);
  const router = useRouter();

  const [usrName, setUsrName] = useState('');
  const [usrEmail, setUsrEmail] = useState('');
  const [usrMobile, setUsrMobile] = useState('');
  const [usrAddress, setUsrAddress] = useState('');
  const [usrNameDisabled, setUsrNameDisabled] = useState(true);
  const [usrEmailDisabled, setUsrEmailDisabled] = useState(true);
  const [usrMobileDisabled, setUsrMobileDisabled] = useState(true);
  const [usrAddressDisabled, setUsrAddressDisabled] = useState(true);
  const [usrEmailVisible, setUsrEmailVisible] = useState(true);
  const [usrMobileVisible, setUsrMobileVisible] = useState(true);
  const [usrAddressVisible, setUsrAddressVisible] = useState(true);
  const [usrLost, setUsrLost] = useState('');
  const [usrImage, setUsrImage] = useState('');


  const updateUserData = async (event) => {
    event.preventDefault();
    console.log('lo que va a enviar')

  }
  const loadData = () => {
    setUsrImage(auth.user.record?.userImage)
    setUsrName(auth.user.record?.name)
    setUsrEmail(auth.user.record?.email)
    setUsrMobile(auth.user.record?.mobile)
    setUsrAddress(auth.user.record?.address)
    setUsrLost(auth.user.record?.lost)
    setUsrEmailVisible(auth.user.record?.publicEmail)
    setUsrMobileVisible(auth.user.record?.publicMobile)
    setUsrAddressVisible(auth.user.record?.publicAddress)

    console.log(auth.user.record)
  }

  useEffect(() => {

    if (auth.status === "not-authenticated") {
      // router.push('/')
    }
    else {
      loadData()
    }


  }, [])


  return (
    <div id='UserTab'>
      <figure>

        {usrImage ? <img src={usrImage} /> : <i className="bi bi-person-circle fs-1"></i>}

        <i className="bi bi-camera fs-5" id='CameraIcon' ></i>

      </figure>
      <form onSubmit={(event) => updateUserData(event)}>
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
                value={usrName}
                onChange={(event) => setUsrName(event.currentTarget.value)}
                disabled={usrNameDisabled}

              /></td>
              <td><i className="bi bi-pencil " onClick={() => setUsrNameDisabled(!usrNameDisabled)} /></td>
              <td><input className="form-check-input-solid invisible" type="checkbox" id="checkboxNoLabel" value="" /></td>
            </tr>
            <tr>
              <td>Correo</td>
              <td ><TextInput
                label=""
                placeholder="Correo electrónico"

                value={usrEmail}
                onChange={(event) => setUsrEmail(event.currentTarget.value)}
                disabled={usrEmailDisabled}
              /></td>
              <td><i className="bi bi-pencil " onClick={() => setUsrEmailDisabled(!usrEmailDisabled)} /></td>
              <td><input type="checkbox" checked={usrEmailVisible} onChange={(event) => setUsrEmailVisible(event.currentTarget.checked)} /></td>
            </tr>
            <tr>
              <td>Celular</td>
              <td ><TextInput
                label=""
                placeholder="Número celular"

                value={usrMobile}
                onChange={(event) => setUsrMobile(event.currentTarget.value)}
                disabled={usrMobileDisabled}
              /></td>
              <td><i className="bi bi-pencil" onClick={() => setUsrMobileDisabled(!usrMobileDisabled)} /></td>
              <td><input className="form-check-input-solid" type="checkbox" id="checkboxNoLabel" checked={usrMobileVisible} onChange={(event) => setUsrMobileVisible(event.currentTarget.checked)} /></td>
            </tr>
            <tr>
              <td>Dirección</td>
              <td ><TextInput
                label=""
                placeholder="Dirección"

                value={usrAddress}
                onChange={(event) => setUsrAddress(event.currentTarget.value)}
                disabled={usrAddressDisabled}
              /></td>
              <td><i className="bi bi-pencil " onClick={() => setUsrAddressDisabled(!usrAddressDisabled)} /></td>
              <td><input className="form-check-input-solid" type="checkbox" id="checkboxNoLabel" checked={usrAddressVisible} onChange={(event) => setUsrAddressVisible(event.currentTarget.checked)} /></td>
            </tr>
          </tbody>
        </table>
        <div className="form-check form-switch mt-4">

          <Switch
            defaultChecked
            color="lime"
            label="Habilitar búsqueda"
            size="sm"
            onLabel="ON" offLabel="OFF"
            checked={usrLost} onChange={(event) => setUsrLost(event.currentTarget.checked)}
          />
        </div>
        <button >Actualizar</button>
      </form>
    </div>
  )
}

export default UserTab