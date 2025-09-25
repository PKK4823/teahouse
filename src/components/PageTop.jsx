import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const PageTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);//滾動頁面到最上方        
    }, [pathname])


    return null;
}

export default PageTop