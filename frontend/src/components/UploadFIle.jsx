import { AttachmentIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, FormControl, FormLabel, Image, Input } from "@chakra-ui/react";
import { useState } from "react";

function ImageInput() {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel
          htmlFor="image"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          padding="8px 10px"
          bg="teal.500"
          color="white"
          border="1px solid teal.600"
          borderRadius="10px"
          _hover={{
            bg: "teal.600",
          }}
        >
          <AttachmentIcon fontSize="20px" marginRight="4px" />
          Selecione a imagem do evento
        </FormLabel>

        <Input
          hidden
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </FormControl>
      {selectedImage && (
        <Box mt="4" position="relative">
          <CloseIcon
            onClick={handleRemoveImage}
            w={3}
            h={3}
            color="red.500"
            right={0}
            top={0}
            _hover={{
              cursor: "pointer",
            }}
          />
          <Image src={selectedImage} alt="Imagem selecionada" maxH="200px" />
        </Box>
      )}
    </Box>
  );
}

export default ImageInput;
