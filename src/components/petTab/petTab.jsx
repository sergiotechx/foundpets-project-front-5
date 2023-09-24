import './petTab.scss';
import React, { useEffect, useState } from "react";
import { genre, species } from '@/lib/constants';
import { useDispatch, useSelector } from "react-redux";
import { updatePetDataAction } from "@/store/user/userActions";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { CldUploadButton } from "next-cloudinary";


const PetTab = () => {
    const dispatch = useDispatch();
    const auth = useSelector((store) => store.auth);
    const user = useSelector((store) => store.user);
    const [petNameDisabled, setPetNameDisabled] = useState(true)
    const [petTypeDisabled, setPetTypeDisabled] = useState(true)
    const [petGenreDisabled, setPetGenreDisabled] = useState(true)
    const [petAgeDisabled, setPetAgeDisabled] = useState(true)
    const [petDescriptionDisabled, setPetDescriptionDisabled] = useState(true)
    const [petImage1, setPetImage1] = useState('')
    const [petImage2, setPetImage2] = useState('')
    const [petImage3, setPetImage3] = useState('')
    const [petImage4, setPetImage4] = useState('')
    const [petImage5, setPetImage5] = useState('')
    const noImage = '/images/EmptyDogPhotoGray.png'
    const { register, formState: { errors }, watch, handleSubmit, setValue, getValues } =
        useForm({
            defaultValues: {
                owner: '',
                name: '',
                type: 0,
                genre: 0,
                age: 0,
                description: '',
                image1: '',
                image2: '',
                image3: '',
                image4: '',
                image5: ''
            }
        });





    const onSubmit = async (data) => {
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



            dispatch(updatePetDataAction(data))


        }

    }


    const loadData = () => {
        setValue("owner", user.user.id);
        setValue("name", user.pet?.name);
        setValue("type", user.pet?.type);
        setValue("genre", user.pet?.genre);
        setValue("description", user.pet?.description);
        setValue("image1", user.pet?.image1 === '' ? noImage : user.pet?.image1);
        setValue("image2", user.pet?.image2 === '' ? noImage : user.pet?.image2);
        setValue("image3", user.pet?.image3 === '' ? noImage : user.pet?.image3);
        setValue("image4", user.pet?.image4 === '' ? noImage : user.pet?.image4);
        setValue("image5", user.pet?.image5 === '' ? noImage : user.pet?.image5);
        setPetImage1(getValues("image1"))
        setPetImage2(getValues("image2"))
        setPetImage3(getValues("image3"))
        setPetImage4(getValues("image4"))
        setPetImage5(getValues("image5"))
    }


    useEffect(() => {
        if (auth.status != "not-authenticated") {
            loadData()
        }
    }, [user.pet])

   


    function handleOnUpload1(result, operations) {
        if (!result.event === "success") {
            updateError(result?.info);
            return;
        }
        setPetImage1(result?.info.secure_url);
        setValue("image1", result?.info.secure_url)
    }
    function handleOnUpload2(result, operations) {
        if (!result.event === "success") {
            updateError(result?.info);
            return;
        }
        setPetImage2(result?.info.secure_url);
        setValue("image2", result?.info.secure_url)
    }
    function handleOnUpload3(result, operations) {
        if (!result.event === "success") {
            updateError(result?.info);
            return;
        }
        setPetImage3(result?.info.secure_url);
        setValue("image3", result?.info.secure_url)
    }
    function handleOnUpload4(result, operations) {
        if (!result.event === "success") {
            updateError(result?.info);
            return;
        }
        setPetImage4(result?.info.secure_url);
        setValue("image4", result?.info.secure_url)
    }
    function handleOnUpload5(result, operations) {
        if (!result.event === "success") {
            updateError(result?.info);
            return;
        }
        setPetImage5(result?.info.secure_url);
        setValue("image5", result?.info.secure_url)
    }
    const deleteImage = async (index) => {
        const answer = await Swal.fire({

            title: "¿Estás seguro?",
            text: "¿Quieres eliminar esta imagen?",
            icon: "warning",
            confirmButtonText: "Sí",
            confirmButtonColor: "#7FD161",
            cancelButtonText: "No",
            cancelButtonColor: "#CDD4DA",
            showCancelButton: true,
        })
        if (answer.isConfirmed) {
            const image = `image${index}`
            setValue(image, '')
            switch (index) {
                case 1:
                    setPetImage1('')
                    break;
                case 2:
                    setPetImage2('')
                    break;
                case 3:
                    setPetImage3('')
                    break;
                case 4:
                    setPetImage4('')
                    break;
                case 5:
                    setPetImage5('')
                    break;

            }
        }
    }

    return (
        <div id='PetTab'>
            <div className='PetGallery'>


            <figure>
                    {petImage1 != '' ? <img src={petImage1} /> : <img src={noImage} />}
                    <CldUploadButton
                        uploadPreset="FoundPets"
                        onUpload={()=>handleOnUpload1}
                        id="cloudinary"
                      
                    >
                        <i className="bi bi-camera fs-5" id='CameraIcon' onClick={handleOnUpload1}></i>
                    </CldUploadButton>
                    <i class="bi bi-trash3-fill fs-5" id='TrashIcon' onClick={() => deleteImage(1)} />
                </figure>
                <figure>
                    {petImage2 != '' ? <img src={petImage2} /> : <img src={noImage} />}
                    <CldUploadButton
                        uploadPreset="FoundPets"
                        onUpload={()=>handleOnUpload2}
                        id="cloudinary"
                      
                    >
                        <i className="bi bi-camera fs-5" id='CameraIcon'></i>
                    </CldUploadButton>
                    <i class="bi bi-trash3-fill fs-5" id='TrashIcon' onClick={() => deleteImage(2)} />
                </figure>
                <figure>
                    {petImage3 != '' ? <img src={petImage3} /> : <img src={noImage} />}
                    <CldUploadButton
                        uploadPreset="FoundPets"
                        onUpload={()=>handleOnUpload3}
                        id="cloudinary"
                     
                    >
                        <i className="bi bi-camera fs-5" id='CameraIcon'></i>
                    </CldUploadButton>
                    <i class="bi bi-trash3-fill fs-5" id='TrashIcon' onClick={() => deleteImage(3)} />
                </figure>
                <figure>
                    {petImage4 != '' ? <img src={petImage4} /> : <img src={noImage} />}
                    <CldUploadButton
                        uploadPreset="FoundPets"
                        onUpload={()=>handleOnUpload4}
                        id="cloudinary"
                      
                    >
                        <i className="bi bi-camera fs-5" id='CameraIcon'></i>
                    </CldUploadButton>
                    <i class="bi bi-trash3-fill fs-5" id='TrashIcon' onClick={() => deleteImage(4)} />
                </figure>
                <figure>
                    {petImage5 != '' ? <img src={petImage5} /> : <img src={noImage} />}
                    <CldUploadButton
                        uploadPreset="FoundPets"
                        onUpload={()=>handleOnUpload5}
                        id="cloudinary"
                       
                    >
                        <i className="bi bi-camera fs-5" id='CameraIcon'></i>
                    </CldUploadButton>
                    <i class="bi bi-trash3-fill fs-5" id='TrashIcon' onClick={() => deleteImage(5)} />
                </figure>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                < table>
                    <thead>
                        <tr>
                            <th className="col-md-1 invisible" scope="col">Items</th>
                            <th className="col-md-9 invisible" scope="col">Expenditure</th>
                            <th className="col-md-1 invisible" scope="col">Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nombre</td>
                            <td >
                                <input type="text" class="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1 " disabled={petNameDisabled}
                                    {...register('name', {
                                        required: true,
                                        maxLength: 50

                                    })} />
                                {errors.name?.type === 'required' && <p>El campo nombre es requerido</p>}
                                {errors.name?.type === 'maxLength' && <p>El campo nombre debe tener menos de 50 caracteres</p>}
                            </td>
                            <td><i className="bi bi-pencil " onClick={() => setPetNameDisabled(!petNameDisabled)} /></td>
                        </tr>
                        <tr>
                            <td>Especie</td>
                            <td >
                                <select class="form-select" disabled={petTypeDisabled}  {...register('type', {
                                    required: true
                                })} >
                                    {species?.map((specie) =>
                                        <option key={specie.value} value={specie.value}>{specie.label}</option>
                                    )}
                                </select>
                                {errors.type?.type === 'required' && <p>La especie  es requerida</p>}
                            </td>
                            <td><i className="bi bi-pencil " onClick={() => setPetTypeDisabled(!petTypeDisabled)} /></td>
                        </tr>
                        <tr>
                            <td>Género</td>
                            <td >
                                <select class="form-select" disabled={petGenreDisabled}  {...register('genre', {
                                    required: true
                                })} >
                                    {genre?.map((_genre) =>
                                        <option key={_genre.value} value={_genre.value}>{_genre.label}</option>
                                    )}
                                </select>
                                {errors.genre?.type === 'required' && <p>El género  es requerido</p>}
                            </td>
                            <td><i className="bi bi-pencil " onClick={() => setPetGenreDisabled(!petGenreDisabled)} /></td>
                        </tr>
                        <tr>
                            <td>Edad</td>
                            <td >
                                <input class="form-control" type="number" placeholder="Edad" disabled={petAgeDisabled} {...register("age", { required: true, max: 30, min: 0, maxLength: 2 })} />
                                {errors.age?.type === 'required' && <p>El campo edad es requerido</p>}
                                {errors.age?.type === 'maxLength' && <p>El campo edad debe tener 2 cifras máximo</p>}
                            </td>
                            <td><i className="bi bi-pencil " onClick={() => setPetAgeDisabled(!petAgeDisabled)} /></td>
                        </tr>
                        <tr>
                            <td>Otras descripciones</td>
                            <td >
                                <textarea class="form-control " placeholder="Descripciones relevantes de tu  mascota"
                                    disabled={petDescriptionDisabled}
                                    {...register("description", { maxLength: 255 })} />
                            </td>
                            <td><i className="bi bi-pencil " onClick={() => setPetDescriptionDisabled(!petDescriptionDisabled)} /></td>
                        </tr>
                    </tbody>
                </table>

                <button id='BtnActualizar'>Actualizar</button>
            </form>
        </div >
    )
}

export default PetTab