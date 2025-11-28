export const defaultCategories = [
  // Income Categories
  {
    id: "salary",
    name: "Salario",
    type: "INCOME",
    color: "#22c55e", // green-500
    icon: "Wallet",
  },
  {
    id: "freelance",
    name: "Autónomo",
    type: "INCOME",
    color: "#06b6d4", // cyan-500
    icon: "Laptop",
  },
  {
    id: "investments",
    name: "Inversiones",
    type: "INCOME",
    color: "#6366f1", // indigo-500
    icon: "TrendingUp",
  },
  {
    id: "business",
    name: "Negocio",
    type: "INCOME",
    color: "#ec4899", // pink-500
    icon: "Building",
  },
  {
    id: "rental",
    name: "Alquiler",
    type: "INCOME",
    color: "#f59e0b", // amber-500
    icon: "Home",
  },
  {
    id: "other-income",
    name: "Otros Ingresos",
    type: "INCOME",
    color: "#64748b", // slate-500
    icon: "Plus",
  },

  // Expense Categories
  {
    id: "housing",
    name: "Vivienda",
    type: "EXPENSE",
    color: "#ef4444", // red-500
    icon: "Home",
    subcategories: ["Alquiler", "Hipoteca", "Impuesto Propiedad", "Mantenimiento"],
  },
  {
    id: "transportation",
    name: "Transporte",
    type: "EXPENSE",
    color: "#f97316", // orange-500
    icon: "Car",
    subcategories: ["Combustible", "Transporte Público", "Mantenimiento", "Estacionamiento"],
  },
  {
    id: "groceries",
    name: "Comestibles",
    type: "EXPENSE",
    color: "#84cc16", // lime-500
    icon: "Shopping",
  },
  {
    id: "utilities",
    name: "Servicios",
    type: "EXPENSE",
    color: "#06b6d4", // cyan-500
    icon: "Zap",
    subcategories: ["Electricidad", "Agua", "Gas", "Internet", "Teléfono"],
  },
  {
    id: "entertainment",
    name: "Entretenimiento",
    type: "EXPENSE",
    color: "#8b5cf6", // violet-500
    icon: "Film",
    subcategories: ["Cine", "Juegos", "Servicios de Streaming"],
  },
  {
    id: "food",
    name: "Comida",
    type: "EXPENSE",
    color: "#f43f5e", // rose-500
    icon: "UtensilsCrossed",
  },
  {
    id: "shopping",
    name: "Compras",
    type: "EXPENSE",
    color: "#ec4899", // pink-500
    icon: "ShoppingBag",
    subcategories: ["Ropa", "Electrónica", "Artículos del Hogar"],
  },
  {
    id: "healthcare",
    name: "Salud",
    type: "EXPENSE",
    color: "#14b8a6", // teal-500
    icon: "HeartPulse",
    subcategories: ["Médico", "Dental", "Farmacia", "Seguro"],
  },
  {
    id: "education",
    name: "Educación",
    type: "EXPENSE",
    color: "#6366f1", // indigo-500
    icon: "GraduationCap",
    subcategories: ["Matrícula", "Libros", "Cursos"],
  },
  {
    id: "personal",
    name: "Cuidado Personal",
    type: "EXPENSE",
    color: "#d946ef", // fuchsia-500
    icon: "Smile",
    subcategories: ["Corte de Pelo", "Gimnasio", "Belleza"],
  },
  {
    id: "travel",
    name: "Viajes",
    type: "EXPENSE",
    color: "#0ea5e9", // sky-500
    icon: "Plane",
  },
  {
    id: "insurance",
    name: "Seguros",
    type: "EXPENSE",
    color: "#64748b", // slate-500
    icon: "Shield",
    subcategories: ["Vida", "Hogar", "Vehículo"],
  },
  {
    id: "gifts",
    name: "Regalos y Donaciones",
    type: "EXPENSE",
    color: "#f472b6", // pink-400
    icon: "Gift",
  },
  {
    id: "bills",
    name: "Facturas y Cuotas",
    type: "EXPENSE",
    color: "#fb7185", // rose-400
    icon: "Receipt",
    subcategories: ["Comisiones Bancarias", "Cuotas de Mora", "Cargos de Servicio"],
  },
  {
    id: "other-expense",
    name: "Otros Gastos",
    type: "EXPENSE",
    color: "#94a3b8", // slate-400
    icon: "MoreHorizontal",
  },
];

export const categoryColors = defaultCategories.reduce((acc, category) => {
  acc[category.id] = category.color;
  return acc;
}, {});
