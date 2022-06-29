import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

type Data = {
    message: string;
    status: number;
    data?: any;
};

const mailConfig = {
    host: "mail45.mydevil.net",
    port: "587",
    login: "nodemail@deltastorm.pl",
    password: "3RzVTWpg!FNCo9",
};

const myMail = nodemailer.createTransport({
    host: mailConfig.host,
    port: mailConfig.port,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: mailConfig.login,
        pass: mailConfig.password,
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
    },
});

const sendMail = (email: string, subject: string, content: string) => {
    const message = {
        from: "noreply DeltaStorm <noreply@deltastorm.pl>",
        to: `kontakt@deltastorm.pl`,
        subject: `${subject}`,
        html: `
        <html>
        <head>
        <style>
            .weight { font-weight: 700;
                display: block;
            }
        </style>
        </head>
        <body>
        <p>Wiadomość od: <span class="weight">${email}</span></p><br/>
        <p>Treść:</p>
        <p>${content}</p>
        </body>
        </html>
        `,
    };
    myMail.sendMail(message, (error: any) => {
        if (error) {
            return console.log(error);
        }
        return true;
    });
};

const sendMailController = (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    if (req.method === "POST") {
        console.log("req.body :>> ", req.body);
        if (!req.body.subject || !req.body.email || !req.body.content) {
            res.status(400).json({ message: "Wrong data", status: 400 });
        }
        const { subject, email, content } = req.body;
        sendMail(email, subject, content);
        res.status(200).json({ message: "Message send", status: 200 });
    } else {
        res.status(200).json({
            message: "Endpoint does not exist",
            status: 404,
        });
    }
};

export default sendMailController;
