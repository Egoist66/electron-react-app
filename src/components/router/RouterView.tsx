import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";


const HomeView = lazy(() => import('../pages/HomeScreen'))

export const RouterView: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
        </Routes>
    )
} 