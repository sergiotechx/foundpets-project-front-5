import React, { useEffect, useState } from "react";
import { TextInput, Switch } from '@mantine/core';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { CldUploadButton } from "next-cloudinary";
import Swal from "sweetalert2";
import './userTab.scss';
import { updateUserDataAction } from "@/store/user/userActions";

const UserTab = () => {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  const user = useSelector((store) => store.user);
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

    const answer = await Swal.fire({
      title: "Operación de sistema",
      text: "¿Desea actualizar los datos?",
      icon: "question",
      confirmButtonText: "Sí",
      confirmButtonColor: "#7FD161",
      cancelButtonText: "No",
      cancelButtonColor: "#CDD4DA",
      showCancelButton: true,
    })
    if (answer.isConfirmed) {
  
      
      dispatch(updateUserDataAction(auth.user.record.id,usrName,usrEmail,usrMobile,
                                   usrAddress,usrImage,usrLost,usrAddressVisible,
                                   usrEmailVisible,usrMobileVisible ));
    }

  }
  const loadData = () => {
    console.log(user.user)
    setUsrImage(user.user?.userImage)
    setUsrName(user.user?.name)
    setUsrEmail(user.user?.email)
    setUsrMobile(user.user?.mobile)
    setUsrAddress(user.user?.address)
    setUsrLost(user.user?.lost)
    setUsrEmailVisible(user.user?.publicEmail)
    setUsrMobileVisible(user.user?.publicMobile)
    setUsrAddressVisible(user.user?.publicAddress)
   }


  useEffect(() => {
    if (auth.status != "not-authenticated") {
        loadData()
    }
 }, [user])


  function handleOnUpload(result, operations) {
    if (!result.event === "success") {
      updateError(result?.info);
      return;
    }
    setUsrImage(result?.info.secure_url);
  }


  return (
    <div id='UserTab'>
      <figure>

        {usrImage ? <img src={usrImage} /> : <i className="bi bi-person-circle fs-1"></i>}


        <CldUploadButton
          uploadPreset="FoundPets"
          onUpload={handleOnUpload}
          id="cloudinary"
        >
          <i className="bi bi-camera fs-5" id='CameraIcon' />
        </CldUploadButton>

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