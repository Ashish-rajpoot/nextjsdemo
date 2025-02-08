import Footer from "./components/Footer";
import { NavLink } from "./components/NavLink";
import TopNav from "./components/TopNav";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
      </head>
      <body className="relative scroll-none mx-10">
        <div className="flex justify-between items-center">
          <TopNav />
        </div>
        <header className="sticky top-0 backdrop-blur-lg text-center z-50">
          <nav className="grid grid-cols-7 gap-x-[1px]">
            <NavLink href={"/mdx-page"}>mdx page</NavLink>
            <NavLink href={"/"}>home</NavLink>
            {Array.from({ length: 5 }).map((_, index) => (
              <NavLink key={index + 1} href={`/posts/${index + 1}`}>
                Posts {index + 1}{" "}
              </NavLink>
            ))}
          </nav>
        </header>

        <main className="flex justify-center items-center py-10 w-[80vw] mx-auto mb-20">
          <div className="w-full max-w-[70vw] mx-auto min-h-screen">{children}</div>
        </main>

        <footer className="min-w-full flex justify-center items-center py-5 z-50 border-t">
          {/* <footer className="min-w-full fixed bottom-0 left-0 flex justify-center items-center py-5 z-50 mt-36 backdrop-blur-lg"> */}
          <Footer />
        </footer>
      </body>
    </html>
  );
}
