import "./globals.css";
import Nav from "@/Components/NavBar/Nav";
export const metadata = {
  title: "Raman Nirman Sewa | Best Construction Company in Nepal",
  description:
    "Raman Nirman Sewa is the leading construction company in Nepal, providing top-notch construction services with a focus on quality and customer satisfaction.",
  keywords:
    "construction company, Nepal, Raman Nirman Sewa, building services, top construction, quality construction, Nepal construction services",}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
