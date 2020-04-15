import React, { Component } from 'react';
import Image from 'react-image-resizer';
import NavbarItem from './Navbar Compoment/NavbarItem';
import AlertSuccess from './Alerts/alertSuccess';
import AlertWarning from './Alerts/alertDanger';

class inputFile extends Component {
  state = {
    selectedFile: null,
    imagePreviewUrl: '',
    dimensions: {},
    isCorrectResolution: false,
    showAlertSuccess: false,
    showAlertWarning: false,
    isDisabled: true,
  };

  // Function to Select the File
  fileSelectedHandler = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0] || e.dataTransfer.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        isDisabled: false,
        isCorrectResolution:false
      });
    };

    reader.readAsDataURL(file);
  };
  // Image Preview
  onImgLoad = ({ target: img }) => {
    this.setState(
      {
        dimensions: { height: img.naturalHeight, width: img.naturalWidth },
      },
    );
  };

  // Function for Success Alert
  onShowAlert = () => {
    this.setState({
      showAlertSuccess: true,
    });
    setTimeout(() => {
      this.setState({
        showAlertSuccess: false,
      });
    }, 5000);
  };
  // Function For Warning Popup
  onShowAlertWarning = () => {
    this.setState({
      showAlertWarning: true,
    });
    setTimeout(() => {
      this.setState({
        showAlertWarning: false,
      });
    }, 5000);
  };
  // Upload File Function
  fileUploadHandler = () => {
    let { dimensions } = this.state;
    console.log('Dia', dimensions);
    console.log('Selected File', this.state.file);
    if (dimensions.height === 1024 && dimensions.width === 1024) {
      this.onShowAlert();
      this.setState({
        isCorrectResolution: true,
      });
    } else {
      this.setState({
        isCorrectResolution: false,
      });
      this.onShowAlertWarning();
    }
  };

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (
        <img
          onLoad={this.onImgLoad}
          src={imagePreviewUrl}
          className="initial-image-preview"
          alt=""
        />
      );
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      <div className="wrapper">
        <NavbarItem />
        <div className="parent-div container margin-t-30">
          <input
            style={{ display: 'none' }}
            type="file"
            onChange={this.fileSelectedHandler}
            ref={(fileInput) => (this.fileInput = fileInput)}
            accept="image/*"
          ></input>
          <button
            onClick={() => this.fileInput.click()}
            className="btn btn-primary btn-square shadow-sm btncolor"
          >
            <span className="choose-file">
              <i class="fa fa-folder-open" aria-hidden="true"></i>
            </span>
            Choose File
          </button>
          <button
            onClick={this.fileUploadHandler}
            className="btn btn-primary btn-square shadow-sm btncolor"
            style={{ marginLeft: '23px' }}
            disabled={this.state.isDisabled}
          >
            <span className="upload-file">
              <i class="fa fa-cloud-upload" aria-hidden="true"></i>
            </span>
            Upload
          </button>
          <div className="imgPreview margin-t-30">{$imagePreview}</div>

          {this.state.isCorrectResolution ? (
            <div className="sub-parent-div">
              <div className="horizontal-view imgPreview ">
                <h4>Horizontal View</h4>
                <Image src={imagePreviewUrl} height={450} width={750} />
              </div>
              <div className="horizontal-small-view imgPreview">
                <h4>Horizontal Small</h4>
                <Image src={imagePreviewUrl} height={365} width={212} />
              </div>
            </div>
          ) : null}
          {this.state.isCorrectResolution ? (
            <div className="sub-parent-div">
              <div className="vertical-view imgPreview">
                <h4>Vertical View</h4>
                <Image src={imagePreviewUrl} height={365} width={450} />
              </div>

              <div className="gallery-view imgPreview">
                <h4>Gallery </h4>
                <Image src={imagePreviewUrl} height={380} width={380} alt="" />
              </div>
            </div>
          ) : null}
        </div>
        <div className="alertDivs">
          {this.state.showAlertSuccess ? (
            <AlertSuccess
              message="Image Uploaded Successfully."
              show={this.state.showAlertSuccess}
            />
          ) : null}
        </div>
        <div className="alertDivs">
          {this.state.showAlertWarning ? (
            <AlertWarning
              message="Oops! The image that you are trying to upload is not of proper resolution. The Required resolution is 1024 X 1024. Request you to try uploading the image of required resolution"
              show={this.state.showAlertWarning}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default inputFile;
