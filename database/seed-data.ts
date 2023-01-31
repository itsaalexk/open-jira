interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {
    description: string,
    status:'pending' | 'in-progress' | 'finished',
    createdAt: number
}


export const seedData:SeedData = {
  entries: [  {
        
        description: "Pendiente",
        status: "pending",
        createdAt: Date.now()
    },
    {
        
        description: "En progreso",
        status: "in-progress",
        createdAt: Date.now() *2
    },
    {
        
        description: "Terminada",
        status: "finished",
        createdAt: Date.now() *3
    }
]
}