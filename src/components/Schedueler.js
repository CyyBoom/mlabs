import React, { useState } from 'react';
import instagram from '../images/icon-instagram.png';
import linkedin from '../images/icon-linkedin.png';
import youtube from '../images/icon-youtube.png';
import pinterest from '../images/icon-pinterest.png';
import twitter from '../images/icon-twitter.png';
import facebook from '../images/icon-facebook.png';
import postdefault from '../images/post-preview.png';
import imagepreview from '../images/imagepreview.png';
import captionpreview from '../images/captionpreview.png';
import heart from '../images/heart.png';
import instagramlogopost from '../images/instagramlogopost.png';
import linkedinlogopost from '../images/linkedinlogopost.png';
import emojithumbnail from '../images/emojithumbnail.png';
import bookmark from '../images/bookmark.png';
import comment from '../images/comment.png';
import commentlinkedin from '../images/commentlinkedin.png';
import send from '../images/send.png';
import like from '../images/like.png';
import upload_image from '../images/upload_image.png';
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
                            <img src={instagramlogopost} onClick={() => setInstagramSchedule(!instagramSchedule)} className="instagram" alt="instagram" />
                        }
                        {!instagramSchedule && 
                            <img src={instagram} onClick={() => setInstagramSchedule(!instagramSchedule)} className="instagram" alt="instagram" />
                        }

                        {linkedinSchedule && 
                            <img src={linkedinlogopost} onClick={() => setLinkedinSchedule(!linkedinSchedule)} className="linkedin" alt="linkedin" />
                        }
                        {!linkedinSchedule && 
                            <img src={linkedin} onClick={() => setLinkedinSchedule(!linkedinSchedule)} className="linkedin" alt="linkedin" />
                        }
                        <img src={youtube} className="youtube" alt="youtube" />
                        <img src={pinterest} className="pinterest" alt="pinterest" />
                        <img src={twitter} className="twitter" alt="twitter" />
                        <img src={facebook} className="facebook" alt="facebook" />
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
                        {(!selectedImage && !caption && !instagramSchedule && !linkedinSchedule) && (
                            <div className="previewdraft">
                                <p className="image_message">Aguardando conteúdo. Informe os canais e as mídias desejadas para visualização.</p>
                                <>
                                    <img src={imagepreview} className="imagepreview" alt="imagepreview" />
                                    <br/>
                                    <img src={captionpreview} className="captionpreview" alt="captionpreview" />
                                </>
                            </div>
                        )}
                        {instagramSchedule  && (
                            <div className="preview user">
                                <div className='previewheader'>
                                    <img src={instagramlogopost} className="instagramlogopost" alt="instagramlogopost" />
                                    <span>Anselmo Carlos</span>
                                </div>
                                <div>
                                    {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" width="200" />}                                    
                                    {!selectedImage && <img src={imagepreview} className="imagepreview" alt="imagepreview" />}
                                </div>
                                <div className="interative">
                                    <div class="interativeitem">
                                        <img src={heart} className="heart" alt="heart" />
                                    </div>
                                    <div class="interativeitem">
                                        <img src={comment} className="comment" alt="comment" />
                                    </div>
                                    <div class="interativeitem">
                                        <img src={bookmark} className="bookmark" alt="bookmark" />
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
                                    <img src={linkedinlogopost} className="linkedinlogopost" alt="linkedinlogopost" />
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
                                    {!selectedImage && <img src={imagepreview} className="imagepreview" alt="imagepreview" />}
                                </div>
                                <div className="interative">
                                    <img src={heart} className="heart" alt="heart" />
                                    <img src={comment} className="comment" alt="comment" />
                                    <img src={bookmark} className="bookmark" alt="bookmark" />
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
                            <img src={upload_image} className="upload_image" alt="upload_image" />
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
                <img src={emojithumbnail} className="App-logo" alt="logo" />
                <p className='modal_tit_sucess'>Agendado com sucesso!</p>
                <button className="scheduele_button">
                    <Link to="/PostList">OK</Link>
                </button>
            </Modal>      
        </>
    );
  }


export default Scheduler;

