import { NextApiRequest, NextApiResponse } from 'next';
import { createCanvas } from 'canvas';

const generateRandomNumber = (length = 6) => {
    let number = '';
    for (let i = 0; i < length; i++) {
        number += Math.floor(Math.random() * 10); // Generate a random digit (0-9)
    }
    return number;
};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    const captchaNumber = generateRandomNumber();
    const canvas = createCanvas(200, 100);
    const ctx = canvas.getContext('2d');

    // Draw background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text
    ctx.font = '40px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(captchaNumber, 50, 60);

    // Set response headers
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'no-store');

    // Send the image as a response
    canvas.toBuffer((err, buffer) => {
        if (err) {
            res.status(500).send('Error generating CAPTCHA');
            return;
        }
        res.send(buffer);
    });
}
