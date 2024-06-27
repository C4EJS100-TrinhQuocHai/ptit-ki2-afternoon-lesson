import React, { useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../config/firebase';
import axios from 'axios';


export default function UploadImage() {
    const [image, setImage] = useState<any>("");
    const [name, setName] = useState<string>("");
    const [imageUpLoad, setImageUpLoad] = useState<any>(null);
    const uploadImage = () => {
        const imageRef = ref(storage, `images/${image.name}`);
        uploadBytes(imageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(1111, url);
                const product={
                    name:name,
                    image:url
                }
                axios.post(" http://localhost:8000/product",product);
            })
        })
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let valueImage: any = event.target.files?.[0];
        console.log(111, valueImage);
        setImage(valueImage);
    }
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    return (
        <div>
            <input type="file" onChange={handleChange} /> <br />
            <input type="text" onChange={handleChangeName} /> <br />
            <button onClick={uploadImage}>    thêm sản phẩm</button>
        </div>
    )
}
