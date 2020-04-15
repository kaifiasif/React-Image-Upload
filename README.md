## React Image - Upload 
![React Image - Upload ](https://i.ibb.co/qRL078S/Inital-View.png)


### [Live Site] (https://react-image-upload.netlify.com/)


## Introduction 
 - This project lets you upload an image locally, 
 - I have used React, Image Resizer and React Bootstrap to build UI.


## Overview of the Project 

Intially, the page loads with two option 
 - Choose file - It provides you an option to choose any file of image format.
 - Upload File - In the inital stage, the upload button is disabled, until the user choose the image, upon selecting the choosen images, the user gets the option to upload the image based on the following conditions. 

If your image resolution is 1024X1024, and upon clicking on upload a success alert pops up with a success message 

"Image Uploaded Successfully". Also, it shows the image preview of the uploaded images, with different view option. 

- Horizontal View - It will display horizontal view  preview of the image of resolution ( 755 x 450 )

- Horizontal Small -  It will display horizontal small view preview of the image of resolution ( 365 x 212 )

- Vertical View -  It will display vertical view preview of the image of resolution ( 365 x 450  )

- Gallery -  It will display vertical view preview of the image of resolution ( 380 x 380 )
 
Also, if the uploaded image is not of proper resolution, and if the user tries uploading that image,

a warning popup is being displayed with a warring message "Oops! The image that you are trying to upload is not of proper 

resolution. The Required resolution is 1024 X 1024. Request you to try uploading the image of required resolution"


## Dependencies Installed 
 - react-bootstrap
 - react-image-resizer
 - enzyme
 - jest 


## Setup:
- run ```npm i && npm start```

