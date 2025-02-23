'use client'

import { useEffect, useState } from 'react';

const NumberCaptcha = () => {
    const [captchaUrl, setCaptchaUrl] = useState('');

    const generateCaptcha = () => {
        const timestamp = new Date().getTime();
        setCaptchaUrl(`/api/number-captcha?d=${timestamp}`);
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    return (
        <div>
            {captchaUrl && <img src={captchaUrl} alt="Numeric CAPTCHA" />} {/* Render img only if captchaUrl is not empty */}
            <button onClick={generateCaptcha}>Refresh CAPTCHA</button>
        </div>
    );
};

export default NumberCaptcha;
