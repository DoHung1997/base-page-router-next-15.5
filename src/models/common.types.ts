import React from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

export interface BreadcrumbType {
    path: string;
    title: string;
}

export interface LayoutProps {
    children: React.ReactNode;
}

export type NextPageWithLayout = NextPage & {
    Layout?: (props: LayoutProps) => React.ReactElement;
    Title?: string;
    Description?: string;
    Roles?: string[];
    BreadCrumbs?: BreadcrumbType[];
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
}

export type AppLayoutProps = {
    children: React.ReactNode;
    title?: string;
    description?: string;
    role?: string[];
    breadcrumb?: BreadcrumbType[];
}