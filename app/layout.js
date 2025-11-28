import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations"; // <--- 1. Importar español
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    // 2. Añadir localization={esES}
    <ClerkProvider localization={esES}>
      <html lang="es">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-secondary/50 py-4 border-t border-border">
            <div className="container mx-auto px-4 text-center text-muted-foreground">
              <p>© {new Date().getFullYear()} | Danilo Alvarado</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}