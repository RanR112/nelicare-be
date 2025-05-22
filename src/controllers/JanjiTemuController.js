const prisma = require("../../prisma/client");

exports.createJanji = async (req, res) => {
    let { email, nama, nomor, umur, idLayanan, tanggal } = req.body;

    try {
        umur = parseInt(umur);
        idLayanan = parseInt(idLayanan);
        tanggal = new Date(tanggal);

        if (isNaN(umur) || isNaN(idLayanan) || isNaN(tanggal.getTime())) {
            return res.status(400).json({ message: "Umur, idLayanan, dan tanggal harus valid." });
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
