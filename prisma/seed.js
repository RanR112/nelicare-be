const prisma = require("./client.js");

async function main() {
    await prisma.layanan.createMany({
        data: [
            {
                id: 1,
                nama: "Pemeriksaan Kehamilan",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                nama: "Keluarga Berencana (KB)",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                nama: "Imnuisasi",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                nama: "Layanan Persalinan",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],
        skipDuplicates: true,
    });

    console.log("Seeder selesai!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });
