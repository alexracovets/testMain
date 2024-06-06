import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import useToast from "../../store/useToast";

import 'react-toastify/dist/ReactToastify.css';
export default function UI_Toast() {
    const isPlay = useToast(state => state.isPlay);
    const isSuccess = useToast(state => state.isSuccess);
    const textToast = useToast(state => state.text);

    useEffect(() => {
        if (isPlay) {
            isSuccess ? toast.success(textToast) : toast.error(textToast);
        }
        console.log(isPlay)
    }, [isPlay, isSuccess, textToast])
    return (
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss={false}
            theme="light"
        />
    )
} 