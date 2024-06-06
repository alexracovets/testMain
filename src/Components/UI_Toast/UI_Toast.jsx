import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import useToast from "../../store/useToast";

export default function UI_Toast() {
    const [isOk, setIsOk] = useState(false);
    const isPlay = useToast(state => state.isPlay);
    useEffect(() => {
        if (isPlay) {
            isOk ? toast.success("Text was copied!") : toast.error("Something went wrong");
        }

    }, [isOk, isPlay])
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