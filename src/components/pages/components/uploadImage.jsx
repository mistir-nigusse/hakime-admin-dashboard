import React from "react";
import { INSERT_BANNER, INSERT_BANNER_IMAGE } from '../../model/mutations/advertisementMutations';
import { useMutation } from "@apollo/client";

const UploadImage  = (props) =>{
    const [img, setImg] = React.useState("")
    const [imgId, setImgId] = React.useState("")
    function encodeImageFileAsURL(element,data) {
        var file = element.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
        //   console.log('RESULT', reader.result.toString());
          setImg(reader.result.toString());
        }
        reader.readAsDataURL(file);
        insert_banner_image({ variables: { url: img} });
        setImgId(data)
        console.log(imgId)
        // console.log(data.insert_images.returning[0].id)

          props.onUpload(data)
      }
      
      const [insert_banner_image, { data, loading, error }] = useMutation(INSERT_BANNER_IMAGE);

      if (loading) return 'Submitting...';
      if (error) return `Submission error! ${error.message}`;
   return(
    <>
    <div>
    </div>
     {
     
     img? (<img src={img}/>):(<div><input type="file"   onChange = {(e)=>encodeImageFileAsURL(e,data)}
            error = {!img}
            helperText= {
              !img? 'Required' : " "
            }/></div>)
        
            }
        
    </>
   )
}
export default UploadImage;