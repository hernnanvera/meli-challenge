import { Outlet } from "@remix-run/react";
import Footer from "~/components/footer";
import Header from "~/components/header";

export default function Index() {
    return (
        <>
            {/* <Header logo="/icons/logo-large-plus.png" logoAlt="meli challenge" logoTitle="Meli Challenge" /> */}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}