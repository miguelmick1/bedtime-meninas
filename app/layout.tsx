import './style.css';
export const metadata={title:'Soninho | Fernanda & Alice',description:'Diário de sono da família',appleWebApp:{capable:true,title:'Soninho',statusBarStyle:'default'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
