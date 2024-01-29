import { ref, uploadBytes, getDownloadURL,  } from "firebase/storage";
import storage from "../configs/firebase.js"

// File uploading using Firebase.

export const uploadFile = async(file)=>{
    const fileName = new Date().toISOString() + '-' + file.originalname
    const fileRef = ref(storage, fileName)

    await uploadBytes(fileRef, file.buffer, {
        contentType: file.mimeType,
    })

    const fileUrl = getDownloadURL(fileRef)
    return fileUrl
}