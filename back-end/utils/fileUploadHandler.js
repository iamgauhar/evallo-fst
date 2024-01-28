import { ref, uploadBytes, getDownloadURL,  } from "firebase/storage";
import storage from "../configs/firebase.js"

export const uploadFile = async(file)=>{
    const fileName = new Date().toISOString() + '-' + file[0].originalname
    const fileRef = ref(storage, fileName)

    await uploadBytes(fileRef, file[0].buffer, {
        contentType: file.mimeType,
    })

    const fileUrl = getDownloadURL(fileRef)
    return fileUrl
}