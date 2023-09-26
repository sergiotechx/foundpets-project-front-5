import './userTab.scss';
import '../../lib/bearLoader.scss'
import React, { useEffect, useState } from "react";
import { TextInput, Switch, Select } from '@mantine/core';
import { useDispatch, useSelector } from "react-redux";
import { updateUserDataAction } from "@/store/user/userActions";
import { CldUploadButton } from "next-cloudinary";
import Swal from "sweetalert2";
import { URL, cities } from "@/lib/constants";
import { getBarrios } from "@/lib/pocketbase";
import { useForm, useWatch } from "react-hook-form";
import QRCode from 'react-qr-code';

const UserTab = () => {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  const user = useSelector((store) => store.user);

  const [usrNameDisabled, setUsrNameDisabled] = useState(true);
  const [usrMobileDisabled, setUsrMobileDisabled] = useState(true);
  const [usrAddressDisabled, setUsrAddressDisabled] = useState(true);
  const [usrImage, setUsrImage] = useState('');
  const [usrCityDisabled, setUsrCityDisabled] = useState(true);
  const [usrBarrioDisabled, setUsrBarrioDisabled] = useState(true);
  const [formatedBarrios, setFormatedBarrios] = useState('');
  const [barrios, setBarrios] = useState([])
  const [usrBarrio, setUsrBarrio] = useState(0)
  const [usrQRURL, setUsrQRURL] = useState(0)

  const { register, formState: { errors }, watch, handleSubmit, setValue, getValues } =
    useForm({
      defaultValues: {
        id: '',
        name: '',
        userImage: '',
        email: '',
        mobile: '',
        address: '',
        ciudad: 0,
        barrio: 0,
        publicAddress: false,
        publicEmail: false,
        publicMobile: false,
        publicBarrio: false,
        publicCiudad: false,
        lost: false
      }
    });
  const ciudad = watch('ciudad');
  let barrio = watch('barrio');

  const onSubmit = async (data) => {

    data.id = auth.user.record.id

    console.log('la data', data)

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



      dispatch(updateUserDataAction(data));
    }

  }
  const loadData = () => {
    if (Object.entries(user.user).length > 0) {

      let usrImage = user.user?.userImage;
      if (usrImage == '') {
        usrImage = auth.user.record.userImage;
      }
      setUsrImage(usrImage)
      setValue("userImage", usrImage);
      setValue("name", user.user?.name);
      setValue("email", user.user?.email);
      setValue("mobile", user.user?.mobile);
      setValue("address", user.user?.address);
      setValue("ciudad", user.user?.ciudad);
      setValue("barrio", user.user?.barrio);
      setUsrBarrio(user.user?.barrio)
      setValue("lost", user.user?.lost);
      setValue("publicAddress", user.user?.publicAddress);
      setValue("publicEmail", user.user?.publicEmail);
      setValue("publicMobile", user.user?.publicMobile);
      setValue("publicBarrio", user.user?.publicBarrio);
      setValue("publicCiudad", user.user?.publicCiudad);
      setValue("lost", user.user?.lost);

      let QRURL = `${URL}lostPet/${user.user.id}?qr=${user.user.qr}`
      setUsrQRURL(QRURL)

    }
  }

  const loadBarrios = async () => {
    if (barrios.length == 0) {
      setBarrios(await getBarrios())

    }
  }

  const createFormatedBarrio = async () => {
    if (getValues("ciudad") != 0) {

      let preformated = barrios.filter((barrio) => barrio.ciudad == getValues("ciudad"))
      let temFormatedBarrios = []
      preformated.forEach((barrio, index) => {

        temFormatedBarrios.push({ label: barrio.descripcion, value: barrio.id })
      })
      setFormatedBarrios(temFormatedBarrios)
    }
  }
  useEffect(() => {
    loadBarrios()
  }, [])

  useEffect(() => {
    if (auth.status != "not-authenticated") {

      loadData()
    }
  }, [user.user])

  useEffect(() => {
    createFormatedBarrio()
  }, [ciudad])

  useEffect(() => {
    if (barrio != 0) {
      setUsrBarrio(barrio)
    }
  }, [barrio])






  function handleOnUpload(result, operations) {
    if (!result.event === "success") {
      updateError(result?.info);
      return;
    }
    setUsrImage(result?.info.secure_url);
    setValue("userImage", result?.info.secure_url);
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
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        < table>
          <thead>
            <tr>
              <th className="col-md-1 invisible" scope="col">Items</th>
              <th className="col-md-9 invisible" scope="col">Expenditure</th>
              <th className="col-md-1 invisible" scope="col">Items</th>
              <th className="col-md-1 " scope="col">Visible</th>
            </tr>
          </thead>
          <tbody className="table">
            <tr>
              <td>Nombre</td>
              <td >

                <input type="text" class="form-control input" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1 " disabled={usrNameDisabled}
                  {...register('name', {
                    required: true,
                    maxLength: 50
                  })} />
                {errors.name?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.name?.type === 'maxLength' && <p>El campo nombre debe tener menos de 50 caracteres</p>}
              </td>

              <td><i className="bi bi-pencil " onClick={() => setUsrNameDisabled(!usrNameDisabled)} /></td>
              <td><input className="form-check-input-solid invisible input" type="checkbox" id="checkboxNoLabel" value="" /></td>
            </tr>
            <tr>
              <td>Correo</td>
              <td >
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  class="form-control input" aria-label="Username" aria-describedby="basic-addon1 "
                  disabled={true}
                  {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                  })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                {errors.email?.type === 'required' && <p>El campo correo es requerido</p>}
              </td>
              <td><i className="bi bi-pencil invisible" /></td>
              <td>
                <input className="input" type="checkbox"  {...register('publicEmail')} />
              </td>
            </tr>
            <tr>
              <td>Celular</td>
              <td >


                <input type="tel" className="form-control input" placeholder="Número celular" aria-label="Username" aria-describedby="basic-addon1 " disabled={usrMobileDisabled}
                  {...register('mobile', {
                    required: true,
                    maxLength: 20

                  })} />
                {errors.name?.type === 'required' && <p>El campo celular es requerido</p>}
                {errors.name?.type === 'maxLength' && <p>El campo celular debe tener menos de 20 caracteres</p>}

              </td>
              <td><i className="bi bi-pencil" onClick={() => setUsrMobileDisabled(!usrMobileDisabled)} /></td>
              <td><input className="form-check-input-solid input" type="checkbox" id="checkboxNoLabel" {...register('publicMobile')} /></td>
            </tr>
            <tr>
              <td>Dirección</td>
              <td >

                <input type="tel" class="form-control input" placeholder="Dirección" aria-label="Username" aria-describedby="basic-addon1 " disabled={usrAddressDisabled}
                  {...register('address', {
                    required: true,
                    maxLength: 100

                  })} />
                {errors.address?.type === 'required' && <p>El campo dirección es requerido</p>}
                {errors.address?.type === 'maxLength' && <p>El campo dirección debe tener menos de 100 caracteres</p>}
              </td>
              <td><i className="bi bi-pencil " onClick={() => setUsrAddressDisabled(!usrAddressDisabled)} /></td>
              <td><input className="form-check-input-solid input" type="checkbox" id="checkboxNoLabel"  {...register('publicAddress')} /></td>
            </tr>
            <tr>
              <td>Ciudad</td>
              <td >

                <select class="form-select input" disabled={usrCityDisabled}  {...register('ciudad', {
                  required: true
                })} >
                  {cities?.map((city) =>
                    <option key={city.value} value={city.value}>{city.label}</option>
                  )}
                </select>
                {errors.ciudad?.type === 'required' && <p>El campo ciudad es requerido</p>}
              </td>
              <td><i className="bi bi-pencil " onClick={() => setUsrCityDisabled(!usrCityDisabled)} /></td>
              <td><input className="form-check-input-solid input" type="checkbox" id="checkboxNoLabel"  {...register('publicCiudad')} /></td>
            </tr>
            <tr>
              <td>Barrio</td>

              <td>
                {formatedBarrios.length > 0 ?
                  <>
                    <select class="form-select" value={usrBarrio} disabled={usrBarrioDisabled}  {...register('barrio')} >
                      {formatedBarrios?.map(barrio =>

                        <option key={barrio.value} value={barrio.value}>{barrio.label}</option>
                      )}
                    </select>

                  </>
                  :
                  <>
                    <select class="form-select input" disabled={usrBarrioDisabled}  {...register('barrio')} >
                      <option value={null}> Elige un barrio</option>
                    </select>
                  </>
                }
              </td>
              <td><i className="bi bi-pencil " onClick={() => setUsrBarrioDisabled(!usrBarrioDisabled)} /></td>
              <td><input className="form-check-input-solid  input" type="checkbox" id="checkboxNoLabel" {...register('publicBarrio')} /></td>
            </tr>
            <tr>
              <td>Qr</td>
              <br />
              {usrQRURL != '' &&
                <QRCode
                  size={256}
                  style={{ height: "200", maxWidth: "100%", width: "100%" }}
                  value={usrQRURL}
                  viewBox={`0 0 256 256`}
                />
              }
              <td>

              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>

              <td>
                {usrQRURL != '' &&
                  <center><bold><h5>Imprime este QR y lo pones en el collar de tu mascota</h5></bold></center>
                }
                 {usrQRURL == '' &&
                 <></>
                }
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="form-check form-switch mt-4">
          <div class="form-check form-switch">
            <input class="form-check-input bg-success" type="checkbox" role="switch" {...register('lost')} />
            <label class="form-check-label" for="flexSwitchCheckDefault">habilitar busqueda </label>
          </div>
        </div>
        <button id='BtnActualizar'>Actualizar</button>
      </form>
    </div>
  )
}

export default UserTab