export default function handler(req, res) {
  if (req.method === "POST") {
    const { number } = req.body;

    // Validasi input
    if (!number || !/^\d+$/.test(number)) {
      return res.status(400).json({
        success: false,
        message: "Nomor tidak valid! Gunakan format angka tanpa spasi atau simbol lain.",
      });
    }

    // Simulasi mengirim perintah `.attack` ke bot WhatsApp
    console.log(`Mengirim perintah .attack ke nomor ${number}`);

    // Respons sukses
    return res.status(200).json({
      success: true,
      message: `Perintah .attack telah dikirim ke nomor ${number}.`,
    });
  }

  // Jika metode HTTP bukan POST
  return res.status(405).json({
    success: false,
    message: "Metode tidak diizinkan. Gunakan POST.",
  });
}