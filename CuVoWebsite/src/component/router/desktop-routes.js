import React from "react";
import { PathConstants } from "../constants/path-constants";
import { Route, Routes } from "react-router-dom";
import Contact from "../contact";
import HomePage from "../home";
import AboutUs from "../about-us";
import BlogList from "../blogs/blog-list";
import BlogList1 from "../blogs/blog-details/1";
import BlogList2 from "../blogs/blog-details/2";
import BlogList3 from "../blogs/blog-details/3";
import ProductOne from "../products/product-1";
import ProductTwo from "../products/product-2";
import ProductThree from "../products/product-3";
import Product from "../products";
import IndustriesOne from "../industries/industries-1";
import IndustriesTwo from "../industries/industries-2";

const DesktopRoutes = ({ }) => {
    return (
        <Routes>
            <Route exact path={PathConstants.HOME} element={<HomePage />} />
            <Route path={PathConstants.ABOUTUS} element={<AboutUs />} />
            <Route path={PathConstants.CONTACT} element={<Contact />} />
            <Route path={PathConstants.BLOGLIST} element={<BlogList />} />
            <Route path={PathConstants.BLOGDETAIL1} element={<BlogList1 />} />
            <Route path={PathConstants.BLOGDETAIL2} element={<BlogList2 />} />
            <Route path={PathConstants.BLOGDETAIL3} element={<BlogList3 />} />
            <Route path={PathConstants.PRODUCT} element={<Product />} />
            <Route path={PathConstants.PRODUCTPAGE1} element={<ProductOne />} />
            <Route path={PathConstants.PRODUCTPAGE2} element={<ProductTwo />} />
            <Route path={PathConstants.PRODUCTPAGE3} element={<ProductThree />} />
            <Route path={PathConstants.INDUSTRIES1} element={<IndustriesOne />} />
            <Route path={PathConstants.INDUSTRIES2} element={<IndustriesTwo />} />
        </Routes>
    );
};

export default DesktopRoutes;
