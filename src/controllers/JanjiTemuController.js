const prisma = require("../../prisma/client");

exports.createJanji = async (req, res) => {
    const { email, nama, nomor, umur, idLayanan } = req.body

    try {
        const newJanji = await prisma.janjiTemu.create({
            data : {
                idLayanan,
                email,
                nama,
                umur,
                nomor,
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