const prisma = require("../../prisma/client");

exports.createJanji = async (req, res) => {
    let { email, nama, nomor, umur, idLayanan, tanggal } = req.body;

    try {
        // Konversi umur dan idLayanan menjadi integer
        umur = parseInt(umur);
        idLayanan = parseInt(idLayanan);

        // Validasi jika hasil parse bukan angka
        if (isNaN(umur) || isNaN(idLayanan)) {
            return res.status(400).json({ message: "Umur dan idLayanan harus berupa angka." });
        }

        const newJanji = await prisma.janjiTemu.create({
            data: {
                idLayanan,
                email,
                nama,
                umur,
                nomor,
                tanggal,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        });

        res.json({
            message: "Janji Temu berhasil dibuat",
            janjiTemu: newJanji,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Gagal membuat Janji Temu" });
    }
}
