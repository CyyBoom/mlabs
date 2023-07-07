import React, { useState } from 'react';
import images from '../images/index';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import DatePicker from 'react-datepicker';
import Modal from 'react-modal';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom";

function Scheduler() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [caption, setCaption] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState(false);
    const [instagramSchedule, setInstagramSchedule] = useState(false);
    const [linkedinSchedule, setLinkedinSchedule] = useState(false);
    
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleCaptionChange = (event) => {
        setCaption(event.target.value);
    };

    const handleImageDrop = (acceptedFiles) => {
        setSelectedImage(acceptedFiles[0]);
    };

    const schedulePost = () => {
        if(!instagramSchedule && !linkedinSchedule) {
            return;
        }
        const formattedDate = selectedDate.toISOString();
        const formData = new FormData();
        formData.append('image', selectedImage);
        formData.append('caption', caption);
        formData.append('date', formattedDate);
    
        axios.post('https://your-api-endpoint.com/schedule', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
            console.log('Post scheduled successfully!');
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Error scheduling post:', error);
        });

        setSuccess(true);
    };

    const handleCancel = () => {
        setShowModal(true);
    };

    const handleApprove = () => {
        setShowModal(true);
    };
    
    const handleConfirmCancel = () => {
        setSelectedImage(null);
        setCaption('');
        setSelectedDate(new Date());
        setShowModal(false);
        setInstagramSchedule(false);
        setLinkedinSchedule(false);
    };
    
    const handleModalClose = () => {
        setShowModal(false);
    };

    
    const handleEmojiSelect = (emoji) => {
        setCaption(caption + emoji.native);
        setShowEmojiPicker(false);
    };

    return (
        <>
            <div className="grid-container-schedueler">
                <div className="socialmidia"> 
                    <p className="tittle">Redes sociais</p>
                    <div className="socialmidia_icons"> 
                        {instagramSchedule && 
                            <img src={images.instagramlogopost} onClick={() => setInstagramSchedule(!instagramSchedule)} className="instagram" alt="instagram" />
                        }
                        {!instagramSchedule && 
                            <img src={images.instagram} onClick={() => setInstagramSchedule(!instagramSchedule)} className="instagram" alt="instagram" />
                        }

                        {linkedinSchedule && 
                            <img src={images.linkedinlogopost} onClick={() => setLinkedinSchedule(!linkedinSchedule)} className="linkedin" alt="linkedin" />
                        }
                        {!linkedinSchedule && 
                            <img src={images.linkedin} onClick={() => setLinkedinSchedule(!linkedinSchedule)} className="linkedin" alt="linkedin" />
                        }
                        <img src={images.youtube} className="youtube" alt="youtube" />
                        <img src={images.pinterest} className="pinterest" alt="pinterest" />
                        <img src={images.twitter} className="twitter" alt="twitter" />
                        <img src={images.facebook} className="facebook" alt="facebook" />
                    </div>
                </div>
                <div className="postdate">
                    <p className="tittle">Data de publicação</p>
                    <DatePicker
                        id="date"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                    />
                </div>
                <div className="postpreview">
                    <p className="tittle">Visualização do post</p>
                    <div className='previewwrapper'>
                        {(!instagramSchedule && !linkedinSchedule) && (
                            <div className="previewdraft">
                                <p className="image_message">Aguardando conteúdo. Informe os canais e as mídias desejadas para visualização.</p>
                                <>
                                    <img src={images.imagepreview} className="imagepreview" alt="imagepreview" />
                                    <br/>
                                    <img src={images.captionpreview} className="captionpreview" alt="captionpreview" />
                                </>
                            </div>
                        )}
                        {instagramSchedule  && (
                            <div className="preview user">
                                <div className='previewheader'>
                                    <img src={images.instagramlogopost} className="instagramlogopost" alt="instagramlogopost" />
                                    <span>Anselmo Carlos</span>
                                </div>
                                <div className='postimage'>
                                    {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" width="100%" />}                                    
                                    {!selectedImage && <img src={images.imagepreview} className="imagepreview" alt="imagepreview" />}
                                </div>
                                <div className="interative">
                                    <div class="interativeitem">
                                        <img src={images.heart} className="heart" alt="heart" />
                                    </div>
                                    <div class="interativeitem">
                                        <img src={images.comment} className="comment" alt="comment" />
                                    </div>
                                    <div class="interativeitem">
                                        <img src={images.bookmark} className="bookmark" alt="bookmark" />
                                    </div>
                                </div>
                                
                                <div className="caption">
                                    {!caption && 
                                        <p id="textarea_post">Aqui vai o texto descritivo desse post</p>
                                    }
                                    {caption}
                                </div>
                            </div>
                        )}     
                    
                        {linkedinSchedule  && (
                            <div className="preview user">
                                <div className='previewheader'>
                                    <img src={images.linkedinlogopost} className="linkedinlogopost" alt="linkedinlogopost" />
                                    <span>Anselmo Carlos</span>
                                </div>
                                <div>
                                <div className="caption">
                                    {!caption && 
                                        <p id="textarea_post">Aqui vai o texto descritivo desse post</p>
                                    }
                                    {caption}
                                </div>
                                    {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" width="200" />}                                    
                                    {!selectedImage && <img src={images.imagepreview} className="imagepreview" alt="imagepreview" />}
                                </div>
                                <div className="interative">
                                    <div class="interativeitem">
                                        <img src={images.like} className="like" alt="like" />
                                    </div>
                                    <div class="interativeitem">
                                        <img src={images.commentlinkedin} className="commentlinkedin" alt="comment" />
                                    </div>
                                    <div class="interativeitem">
                                        <img src={images.send} className="send" alt="send" />
                                    </div>
                                </div>
                                
                            </div>
                        )}      
                    </div>  
                </div> 
                <div className="posttext">
                    <p className="tittle">Texto do post</p>
                    <div variant="secondary" className="ml-2 emojiwrapper">
                        <div onClick={() => setShowEmojiPicker(!showEmojiPicker)} className="emoji">
                            😊
                        </div>
                        <textarea
                            id="textarea_post"
                            name="textarea_post"
                            rows="4"
                            placeholder="Aqui vai o texto descritivo desse post"
                            value={caption}
                            onChange={handleCaptionChange}
                        ></textarea>                        
                        {showEmojiPicker && (
                            <Picker data={data} onEmojiSelect={handleEmojiSelect} />
                        )}
                    </div>                    
                </div>
                <div className="posttext">
                    <p className="tittle">Upload de imagem</p>
                    <Dropzone onDrop={handleImageDrop} accept="image/*" multiple={false}>
                        {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()} className="dropzone">
                            <input {...getInputProps()} />
                            <img src={images.upload_image} className="upload_image" alt="upload_image" />
                            <p className="image_message">Arraste e solte uma imagem aqui ou clique no botão abaixo</p>
                            <button type="button" className="draft_button">Pesquisar imagens</button>
                        </div>
                        )}
                    </Dropzone>
                </div>
            </div>

            <div className="grid-container-footer">
                <div className="footer">   
                    <button type="button" className="cancel_button" onClick={handleCancel}>Cancelar</button>
                    <button type="button" className="draft_button">Salvar Rascunho</button>
                    <button
                        type="button"
                        className="scheduele_button"
                        onClick={schedulePost}
                    >Agendar</button>
                </div>
            </div>

            <Modal isOpen={showModal} contentLabel="Salvar">
                <p className='modal_tit'>Todas as informações preenchidas serão perdidas</p>
                <p className='modal_tit'>Deseja continuar?</p>
                <button type="button" className="scheduele_button" onClick={handleConfirmCancel}>Confirmar</button>
                <button type="button" className="draft_button" onClick={handleModalClose}>Cancelar</button>
            </Modal>   
            <Modal isOpen={success} contentLabel="Salvo">
                <img src={images.emojithumbnail} className="App-logo" alt="logo" />
                <p className='modal_tit_sucess'>Agendado com sucesso!</p>
                <Link to="/PostList" className="scheduele_button sucess">
                        OK
                </Link>
            </Modal>      
        </>
    );
  }


export default Scheduler;

