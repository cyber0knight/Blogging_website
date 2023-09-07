import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const successNote = (text = "🙌 Woo-hoo! Great job!!.") => {
    toast.success(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
const warningNote= (text = '❗Oops! unexpected error.') => {
    toast.warn(text, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}

export {successNote, warningNote};