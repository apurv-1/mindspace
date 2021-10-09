import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Post from '../../Firebase/api';
import Swal from 'sweetalert2';

const Facesnap = () => {
  const [image, setImage] = useState([]);
  const [sentImage, setSentImage] = useState({});
  const [previewImage, setPreviewImage] = useState(null);
  const [switcher, setSwitcher] = useState(true);
  const [show, setShow] = useState(true);
  const [showUpload, setShowUpload] = useState(true);

  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (localStorage.getItem('user-details') !== null) {
      let values = localStorage.getItem('user-details');
      let newVal = JSON.parse(values);
      setProfile(newVal.user);
    }
  }, []);

  const showImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
  };

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
      setImage(reader.result);
      setSentImage(reader.result);
      // console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };

  const handlePost = (e) => {
    const newDate = new Date();
    e.preventDefault();
    let idCardBase64 = '';
    getBase64(image, (result) => {
      idCardBase64 = result;
      console.log(idCardBase64);
      setImage(idCardBase64);
      setSentImage(idCardBase64);
      console.log(localStorage.getItem('user-details'));
      let mood = {
        angry: 0.03,
        disgust: 0.1,
        fear: 0.18,
        happy: 0.13,
        sad: 0.11,
        surprise: 0.09,
        neutral: 0.54,

        // angry: 0.03,
        // disgust: 0.1,
        // fear: 0.18,
        // happy: 0.63,
        // sad: 0.11,
        // surprise: 0.09,
        // neutral: 0.14,
      };
      Post(`${profile.uid}`, mood, newDate);
      //Getdata('id','lucky'); //pass your data in place of lucky and key in place of id
      console.log(sentImage);
    });
    setShowUpload(false);
    Swal.fire({
      title: 'Wow!',
      text: 'Response Submitted',
      icon: 'success',
    });
    console.log(image);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setImage([]);
    setPreviewImage([]);
    setSwitcher(true);
    setShowUpload(true);
    setShow(true);
  };
  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    showImage(file);
    setImage(file);
    console.log(file);
    setSwitcher(false);
    setShow(false);
  };

  return (
    <>
      <div className="container">
        <h1>FaceSnap</h1>
        <h3>Let your face speak what your mind can't</h3>

        <form>
          <center>
            {switcher && (
              <div className="upload-div">
                <div>
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    // multiple
                    type="file"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span" fullWidth>
                      Upload Your Photo
                    </Button>
                  </label>
                </div>
              </div>
            )}
          </center>

          {/* Only show first image, for now. */}
          <div className="up-image-container">
            {show && <h1>Please Upload your image</h1>}
            {previewImage && <img src={previewImage} className="image-upload" alt="preview" />}
          </div>
          <center>
            <div className="btn-container">
              {showUpload && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePost}
                  className="form-btn"
                  disabled={switcher}>
                  Read My Face
                </Button>
              )}

              <Button
                className="left-btn form-btn"
                variant="contained"
                color="primary"
                onClick={handleReset}>
                Reset
              </Button>
            </div>
          </center>
        </form>
      </div>
    </>
  );
};

export default Facesnap;
