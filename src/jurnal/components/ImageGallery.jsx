import { ImageList, ImageListItem } from "@mui/material";

const defaultImg = 'https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1';

export const ImageGallery = ({ images = [] }) => {

  return (
    <ImageList sx={{ width: '100%', height: 500, p: 1, mt: 3 }} cols={3} rowHeight={164}>
      {images?.map( (image, idx) => {
        
        if ( image.includes('nof') ) {
            image = defaultImg
        }
        
        return (<ImageListItem key={idx}>
          <img
            src={`${ image }?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="imagen de la nota"
            loading="lazy"
          />
        </ImageListItem>
    )})}
    </ImageList>
  );
}