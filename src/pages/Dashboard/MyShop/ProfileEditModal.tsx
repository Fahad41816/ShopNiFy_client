/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  Avatar,
} from "@mui/material"; 
import { MdOutlineAddAPhoto } from "react-icons/md";

const ProfileEditModel = ({shopData, uploadImage, isLoading,handleProfileUpdate} : any) => {

  const [profileImage, setProfileImage] = useState<string>(
    shopData.image || "https://via.placeholder.com/150" // Default profile image
  );
  const [ImgFile, setImgFile] = useState()
  const [name, setName] = useState(shopData.name);
  const [bio, setBio] = useState(shopData.bio);
  const [aboutShop, setAboutShop] = useState(shopData.about);
  const [isChanged, setIsChanged] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setProfileImage(reader.result as string);
          setIsChanged(true);
        }
      };
      setImgFile(file)
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
      setIsChanged(true);
  };

  const handleSave = async() => {
    
    let imageLink;

    if(profileImage !== shopData.image){
      imageLink = await uploadImage(ImgFile)
    } 
     
    
    console.log({ image : imageLink, name, bio, aboutShop });
    handleProfileUpdate({ image : imageLink, name, bio, about: aboutShop });
    setIsChanged(false);
  };

  return (
    <section className="mt-10">
     <Typography variant="h5" gutterBottom>
        Edit Profile
      </Typography>

      {/* Profile Image Section */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Avatar
          src={profileImage}
          alt="Profile"
          sx={{ width: 100, height: 100, mr: 2 }}
        />
        <IconButton
          color="primary"
          component="label"
        >
          <MdOutlineAddAPhoto />
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={handleImageChange}
          />
        </IconButton>
      </Box>

      {/* Name Field */}
      <TextField
        fullWidth
        label="Name"
        value={name}
        onChange={handleChange(setName)}
        variant="outlined"
        margin="normal"
      />

      {/* Bio Field */}
      <TextField
        fullWidth
        label="Bio"
        value={bio}
        onChange={handleChange(setBio)}
        variant="outlined"
        margin="normal"
        multiline
        rows={2}
      />

      {/* About Shop Field */}
      <TextField
        fullWidth
        label="About the Shop"
        value={aboutShop}
        onChange={handleChange(setAboutShop)}
        variant="outlined"
        margin="normal"
        multiline
        rows={3}
      />

      {/* Save Changes Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        disabled={!isChanged || isLoading}
        onClick={handleSave}
         
        sx={{ mt: 2 }}
      >
        Save Changes {isLoading && <span className="loading loading-spinner loading-sm"></span>}
      </Button>
    </section>
  );
};

export default ProfileEditModel;
