import React, { useEffect, useState } from "react";
import { TextInput, Switch, Select } from '@mantine/core';
import { useDispatch, useSelector } from "react-redux";
import { updateUserDataAction } from "@/store/user/userActions";
import { useRouter } from "next/navigation";
import { CldUploadButton } from "next-cloudinary";
import Swal from "sweetalert2";
import './userTab.scss';
import { cities } from "@/lib/constants";
import { getBarrios } from "@/lib/pocketbase";

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

  const [usrMobileDisabled, setUsrMobileDisabled] = useState(true);
  const [usrAddressDisabled, setUsrAddressDisabled] = useState(true);
  const [usrEmailVisible, setUsrEmailVisible] = useState(true);
  const [usrMobileVisible, setUsrMobileVisible] = useState(true);
  const [usrAddressVisible, setUsrAddressVisible] = useState(true);
  const [usrCityVisible, setUsrCityVisible] = useState(true);
  const [usrBarrioVisible, setUsrBarrioVisible] = useState(true);
  const [usrLost, setUsrLost] = useState('');
  const [usrImage, setUsrImage] = useState('');
  const [usrCity, setUsrCity] = useState('');
  const [usrCityDisabled, setUsrCityDisabled] = useState(true);
  const [usrBarrioDisabled, setUsrBarrioDisabled] = useState(true);
  const [usrBarrio, setUsrBarrio] = useState('');
  const [formatedBarrios, setFormatedBarrios] = useState('');
  const [barrios, setBarrios] = useState([])


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


      dispatch(updateUserDataAction(auth.user.record.id, usrName, usrEmail, usrMobile,
        usrAddress, usrCity, usrBarrio, usrImage, usrLost, usrAddressVisible,
        usrEmailVisible, usrMobileVisible, usrCityVisible, usrBarrioVisible));
    }

  }
  const loadData = () => {

    let usrImage = user.user?.userImage;
    if (usrImage == '') {
      usrImage = auth.user.record.userImage;
    }

    setUsrImage(usrImage)
    setUsrName(user.user?.name)
    setUsrEmail(user.user?.email)
    setUsrMobile(user.user?.mobile)
    setUsrAddress(user.user?.address)
    setUsrCity(user.user?.ciudad)
    setUsrBarrio(user.user?.barrio)
    setUsrLost(user.user?.lost)
    setUsrEmailVisible(user.user?.publicEmail)
    setUsrMobileVisible(user.user?.publicMobile)
    setUsrAddressVisible(user.user?.publicAddress)
    setUsrCityVisible(user.user?.publicCiudad) 
    setUsrBarrioVisible(user.user?.publicBarrio)
  }

  const loadBarrios = async () => {
    if (barrios.length == 0) {
      setBarrios(await getBarrios())
    }
  }
  const createFormatedBarrio = async () => {
    let preformated = barrios.filter((barrio) => barrio.ciudad == Number(usrCity))

    let temFormatedBarrios = []
    preformated.forEach((barrio) => {
      temFormatedBarrios.push({ label: barrio.descripcion, value: barrio.id })
    })
    setFormatedBarrios(temFormatedBarrios)
  }

  useEffect(() => {
    if (auth.status != "not-authenticated") {
      loadData()
    }
  }, [user])

  useEffect(() => {
    createFormatedBarrio()
  }, [usrCity])

  useEffect(() => {
    loadBarrios()
  }, [])


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
                disabled={true}
              /></td>
              <td><i className="bi bi-pencil invisible" /></td>
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
            <tr>
              <td>Ciudad</td>
              <td ><Select data={cities} value={usrCity} onChange={(event) => { setUsrCity(event); setUsrBarrio('') }} disabled={usrCityDisabled} /></td>
              <td><i className="bi bi-pencil " onClick={() => setUsrCityDisabled(!usrCityDisabled)} /></td>
              <td><input className="form-check-input-solid " type="checkbox" id="checkboxNoLabel" checked={usrCityVisible} onChange={(event) => setUsrCityVisible(event.currentTarget.checked)} /></td>
            </tr>
            <tr>
              <td>Barrio</td>

              <td>
                {formatedBarrios.length > 0 ?
                  <Select data={formatedBarrios} value={usrBarrio} onChange={setUsrBarrio} disabled={usrBarrioDisabled} />
                  : <Select placeholder='cargando datos' data={['',]} disabled={usrBarrioDisabled} />
                }
              </td>
              <td><i className="bi bi-pencil " onClick={() => setUsrBarrioDisabled(!usrBarrioDisabled)} /></td>
              <td><input className="form-check-input-solid " type="checkbox" id="checkboxNoLabel" checked={usrBarrioVisible} onChange={(event) => setUsrBarrioVisible(event.currentTarget.checked)}/></td>
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