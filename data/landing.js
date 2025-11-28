import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "50K+",
    label: "Usuarios Activos",
  },
  {
    value: "S/2B+",
    label: "Transacciones Registradas",
  },
  {
    value: "99.9%",
    label: "Tiempo de Actividad",
  },
  {
    value: "4.9/5",
    label: "Calificación de Usuarios",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Análisis Avanzado",
    description:
      "Obtén información detallada sobre tus patrones de gastos con análisis impulsado por IA",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Escáner Inteligente de Recibos",
    description:
      "Extrae datos automáticamente de recibos usando tecnología IA avanzada",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Planificación de Presupuesto",
    description: "Crea y gestiona presupuestos con recomendaciones inteligentes",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Soporte Multi-Cuenta",
    description: "Gestiona múltiples cuentas y tarjetas de crédito en un solo lugar",
  },
  // {
  //   icon: <Globe className="h-8 w-8 text-blue-600" />,
  //   title: "Multi-Moneda",
  //   description: "Soporte para múltiples monedas con conversión en tiempo real",
  // },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Información Automatizada",
    description: "Obtén información financiera automatizada y recomendaciones",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Crea Tu Cuenta",
    description:
      "Comienza en minutos con nuestro proceso de registro simple y seguro",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Registra Tus Gastos",
    description:
      "Categoriza y registra automáticamente tus transacciones en tiempo real",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Obtén Información",
    description:
      "Recibe información impulsada por IA y recomendaciones para optimizar tus finanzas",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Propietaria de Pequeña Empresa",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote:
      "Welth ha transformado cómo gestiono mis finanzas empresariales. La información de IA me ha ayudado a identificar oportunidades de ahorro que nunca conocía.",
  },
  {
    name: "Michael Chen",
    role: "Autónomo",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "La función de escaneo de recibos me ahorra horas cada mes. Ahora puedo enfocarme en mi trabajo en lugar de entrada de datos manual y seguimiento de gastos.",
  },
  {
    name: "Emily Rodriguez",
    role: "Asesora Financiera",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    quote:
      "Recomiendo Welth a todos mis clientes. El soporte multi-moneda y análisis detallado lo hacen perfecto para inversores internacionales.",
  },
];
