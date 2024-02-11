import { HtmlAttributes } from "csstype";
import { ReactNode, ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";


export interface HtagProps {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
}

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 's' | 'm' | 'l';
    children: ReactNode;
}

export interface Tag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 's' | 'm';
    children: ReactNode;
    color?: 'red' | 'grey' | 'green' | 'ghost' | 'primary';
    href?: string;
}

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable? : boolean;
    rating: number;
    setRating?: (rating : number) => void
}

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    
}

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    
}

export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    
}

export interface Test {
    dummyData?: {products: string[]}
}
