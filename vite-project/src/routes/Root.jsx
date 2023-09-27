import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getCardName } from "../redux/createCardSlice";

export const Root = () => {

    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(getCardName());
    }, []);

    return (
        <div className="site-wrapper">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};


