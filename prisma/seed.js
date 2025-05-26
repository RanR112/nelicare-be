const prisma = require("./client.js");

async function main() {
    // await prisma.layanan.createMany({
    //     data: [
    //         {
    //             id: 1,
    //             nama: "Pemeriksaan Kehamilan",
    //             createdAt: new Date(),
    //             updatedAt: new Date(),
    //         },
    //         {
    //             id: 2,
    //             nama: "Keluarga Berencana (KB)",
    //             createdAt: new Date(),
    //             updatedAt: new Date(),
    //         },
    //         {
    //             id: 3,
    //             nama: "Imnuisasi",
    //             createdAt: new Date(),
    //             updatedAt: new Date(),
    //         },
    //         {
    //             id: 4,
    //             nama: "Layanan Persalinan",
    //             createdAt: new Date(),
    //             updatedAt: new Date(),
    //         },
    //     ],
    //     skipDuplicates: true,
    // });

    await prisma.admin.createMany({
        data: [
            {
                id: 1,
                nama: "Admin",
                email: "admin@gmail.com",
                role:'admin',
                password: "$2a$12$cjhajScDOabuTEI1c90bNubSivom1toeCoyb1fbJilJCd96XKJoKm"
            },
            {
                id: 2,
                nama: "Super Admin",
                email: "superadmin@gmail.com",
                role: "superadmin",
                password: "$2a$12$zNOCmwPnaC/Tclskbi.Koe5jO0ogvHH.cASuVHSJFB5oynTO5ao9W"
            }
        ]
    })

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
