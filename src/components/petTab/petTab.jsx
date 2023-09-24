import React, { useEffect, useState } from "react";
import { TextInput,  Button, Select, NumberInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useEditor } from '@tiptap/react';
import { RichTextEditor, Link } from '@mantine/tiptap';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { genre, species } from '@/lib/constants';
import './petTab.scss';
const PetTab = () => {
    let content = '<h2>Hola mundo Found Pet!</h2>'

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
        ],
        content,
    });

    const petForm = useForm({
        initialValues: {
            name: '',
            species: '',
            genre: '',
            age: 0
        },
        validate: {
            name: (value) => (value.length < 5 ? 'Debe tener almenos 5 digitos' : null),
        },
    });
    const updatePetData = async (values) => {
    }
    return (
        <div id='PetTab'>
            <div className='PetGallery'>
                <figure className="figure">
                    <img className="img" src='/images/EmptyDogPhotoGray.png' />
                    <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                    <i class="bi bi-trash3-fill fs-5" id='TrashIcon'></i>
                </figure>
                <figure>
                    <img className="img" src='/images/EmptyDogPhotoGray.png' />
                    <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                    <i class="bi bi-trash3-fill fs-5" id='TrashIcon'></i>
                </figure>
                <figure>
                    <img className="img" src='/images/EmptyDogPhotoGray.png' />
                    <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                    <i class="bi bi-trash3-fill fs-5" id='TrashIcon'></i>
                </figure>
                <figure>
                    <img  className="img" src='/images/EmptyDogPhotoGray.png' />
                    <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                    <i class="bi bi-trash3-fill fs-5" id='TrashIcon'></i>
                </figure>
                <figure>
                    <img className="img" src='/images/EmptyDogPhotoGray.png' />
                    <i className="bi bi-camera fs-5" id='CameraIcon' ></i>
                    <i class="bi bi-trash3-fill fs-5" id='TrashIcon'></i>
                </figure>
            </div>
            <form onSubmit={petForm.onSubmit((values) => updatePetData(values))}>
                < table className="table">
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
                            <td ><TextInput
                                label=""
                                placeholder="Nombre mascota"
                                {...petForm.getInputProps('name')}
                            /></td>
                            <td><i className="bi bi-pencil " /></td>
                        </tr>
                        <tr>
                            <td>Especie</td>
                            <td >
                                <Select
                                    data={species}
                                />
                            </td>
                            <td><i className="bi bi-pencil " /></td>
                        </tr>
                        <tr>
                            <td>Género</td>
                            <td >
                                <Select
                                    data={genre}
                                />
                            </td>
                            <td><i className="bi bi-pencil " /></td>
                        </tr>
                        <tr>
                            <td>Edad</td>
                            <td >
                                <NumberInput
                                    //label="Enter value between 10 and 20"
                                    placeholder="El rang de edad va de 0 a 30 años"
                                    min={0}
                                    max={30}
                                />
                            </td>
                            <td><i className="bi bi-pencil " /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="col-md-10">
                    <span className="col-md-2" >Otras descripciones</span>
                    <RichTextEditor editor={editor}>
                        <RichTextEditor.Toolbar sticky stickyOffset={60}>
                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.Bold />
                                <RichTextEditor.Italic />
                                <RichTextEditor.Underline />
                                <RichTextEditor.Strikethrough />
                                <RichTextEditor.ClearFormatting />
                                <RichTextEditor.Highlight />
                                <RichTextEditor.Code />
                            </RichTextEditor.ControlsGroup>

                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.H1 />
                                <RichTextEditor.H2 />
                                <RichTextEditor.H3 />
                                <RichTextEditor.H4 />
                            </RichTextEditor.ControlsGroup>

                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.Blockquote />
                                <RichTextEditor.Hr />
                                <RichTextEditor.BulletList />
                                <RichTextEditor.OrderedList />
                                <RichTextEditor.Subscript />
                                <RichTextEditor.Superscript />
                            </RichTextEditor.ControlsGroup>

                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.Link />
                                <RichTextEditor.Unlink />
                            </RichTextEditor.ControlsGroup>

                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.AlignLeft />
                                <RichTextEditor.AlignCenter />
                                <RichTextEditor.AlignJustify />
                                <RichTextEditor.AlignRight />
                            </RichTextEditor.ControlsGroup>
                        </RichTextEditor.Toolbar>

                        <RichTextEditor.Content />
                    </RichTextEditor>
                </div>
                <button id='BtnActualizar'>Actualizar</button>
            </form>



        </div>
    )
}

export default PetTab