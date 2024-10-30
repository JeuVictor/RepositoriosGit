import { title } from "process";


export const metadata ={
    title: "Painel do site",
    description: "Esse é o painel demonstrativo do site"
}

export default function DashboardLayout({
    children,
}: {children: React.ReactNode}){
    return(
        <>
        <h3>Header do Dashboard</h3>
        <br />
        {children}
        </>
    )
}