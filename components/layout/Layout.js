import styles from "./Layout.module.css";
import Link from "next/link";

const Layout = ({children}) => {
     return (
          <div>
               <header className={styles.header}>
                    <Link href="/">
                         <h2>JAFARPOUR MOTORS</h2>
                         <p>Choose an Buy your car</p>
                    </Link>
               </header>
               <div className={styles.container}>
                    {children}
               </div>
               <footer className={styles.footer}>
                    <a href="https://www.linkedin.com/in/esmail-jafarpour/" target="_blank">
                         Jafarpour
                    </a>
                    <p>Next.js Projects | Jafarpour Motors  &copy;</p>
               </footer>
          </div>
     )
          
     
}

export default Layout;
