import React, { useState } from 'react';
import instagram from '../images/icon-instagram.png';
import linkedin from '../images/icon-linkedin.png';
import youtube from '../images/icon-youtube.png';
import pinterest from '../images/icon-pinterest.png';
import twitter from '../images/icon-twitter.png';
import facebook from '../images/icon-facebook.png';
import postdefault from '../images/post-preview.png';
import heart from '../images/heart.png';
import instagramlogopost from '../images/instagramlogopost.png';
import bookmark from '../images/bookmark.png';
import comment from '../images/comment.png';
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
                            <img src={instagramlogopost} onClick={() => setLinkedinSchedule(!linkedinSchedule)} className="linkedin" alt="linkedin" />
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
                        {(!selectedImage || !caption) && (
                            <img src={postdefault} className="postdefault" alt="postdefault" />
                        )}
                        {instagramSchedule && selectedImage && caption && (
                            <div className="preview">
                                <img src={instagramlogopost} className="instagramlogopost" alt="instagramlogopost" />
                                Instagram
                                <div>
                                    <img src={URL.createObjectURL(selectedImage)} alt="Selected" width="200" />
                                </div>
                                <img src={heart} className="heart" alt="heart" />
                                <img src={comment} className="comment" alt="comment" />
                                <img src={bookmark} className="bookmark" alt="bookmark" />
                                <div>
                                    {caption}
                                </div>
                            </div>
                        )}     
                    
                        {linkedinSchedule && selectedImage && caption && (
                            <div className="preview">
                                <img src={instagramlogopost} className="instagramlogopost" alt="instagramlogopost" />
                                linkedin
                                <div>
                                    <img src={URL.createObjectURL(selectedImage)} alt="Selected" width="200" />
                                </div>
                                <img src={heart} className="heart" alt="heart" />
                                <img src={comment} className="comment" alt="comment" />
                                <img src={bookmark} className="bookmark" alt="bookmark" />
                                <div>
                                    {caption}
                                </div>
                            </div>
                        )}         
                    </div>  
                </div> 
                <div className="posttext">
                    <p className="tittle">Texto do post</p>
                    <div variant="secondary" className="ml-2 emojiwrapper">
                        <div onClick={() => setShowEmojiPicker(!showEmojiPicker)} class="emoji">
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
                        className={(!instagramSchedule && !linkedinSchedule) ? 'disable ' : "scheduele_button"}
                        onClick={schedulePost}
                    >Agendar</button>
                </div>


            </div>

            <Modal isOpen={showModal} contentLabel="Salvar">
                <p className='modal_tit'>Salvar alterações?</p>
                <button type="button" className="scheduele_button" onClick={handleConfirmCancel}>Confirmar</button>
                <button type="button" className="draft_button" onClick={handleModalClose}>Cancelar</button>
            </Modal>   
            <Modal isOpen={success} contentLabel="Salvo">
                <p className='modal_tit'>Agendado com sucesso!</p>
                <Link to="/PostList">ok</Link>
            </Modal>      
        </>
    );
  }


export default Scheduler;

