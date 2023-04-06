import axios from "axios";

const uploadImage = async (file) => {
    
    const data = new FormData();
    data.append("file", file);
    data.append("preset", "ecommerce");
    try {
        const { url } = await axios.post("url", data);
        return url;
    } catch (error) {
        console.log(error);
        return "something went wrong";
    }

}

export default uploadImage;