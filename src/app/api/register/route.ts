// app/api/register/route.
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { doctorId, userEmail } = await req.json();

  if (!doctorId || !userEmail) {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }

  // Настрой Nodemailer (SMTP от Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // твоя почта
      pass: process.env.GMAIL_PASS, // App Password из Google (не обычный пароль!)
    },
  });

  try {
    await transporter.sendMail({
      from: `"Клиника" <${process.env.GMAIL_USER}>`,
      to: userEmail,
      subject: "Вы успешно записались",
      text: `Вы записались к врачу с ID: ${doctorId}`,
      html: `<h1>Запись подтверждена</h1><p>Доктор ID: ${doctorId}</p>`,
    });

    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    console.error("Ошибка отправки письма:", error);
    return NextResponse.json(
      { message: "Ошибка отправки письма" },
      { status: 500 }
    );
  }
}
