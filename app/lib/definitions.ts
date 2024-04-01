import { HtmlAttributes } from "csstype";
import { ReactNode, ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";
import { Interface } from "readline";


export interface HtagProps {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
    className?: string;
}

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 's' | 'm' | 'l';
    children: ReactNode;
    className?: string;
}

export interface Tag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 's' | 'm';
    children: ReactNode;
    color?: 'red' | 'grey' | 'green' | 'ghost' | 'primary';
    href?: string;
    className?: string;
}

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable? : boolean;
    rating: number;
    setRating?: (rating : number) => void
}

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    color?: 'white' | 'blue' ;
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

export interface RootDummy {
    products: ProductDummy[]
    total: number
    skip: number
    limit: number
  }
  
export interface ProductDummy {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  }

export type TCategories = string[]


export interface PageItem {
    alias: string
    menu: string
    _id: string
    category: string
}

export interface MenuItem {
    _id: {
        secondCategory: string;
    }
    isOpen?: boolean
    pages: PageItem[]
}

export interface FirstLevelMenuItem {
    route: string
    name: string
    icon: string
    id: TopLevelCategory
}

export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export interface TopModel {
    _id: string
    tags: string[]
    secondCategory: string
    alias: string
    title: string
    category: string
    seoText: string
    tagsTitle: string
    metaTitle: string
    metaDescription: string
    firstCategory: TopLevelCategory
    advantages: Advantage[]
    createdAt: string
    updatedAt: string
    __v: number
    hh: HhData 
    qas: any[]
    addresses: any[]
    categoryOn: string
    blog: Blog
    sravnikus: Sravnikus
    learningclub: Learningclub
}

export interface Advantage {
    title: string
    description: string
    _id: string
}
  
export interface HhData {
    count: number
    juniorSalary: number
    middleSalary: number
    seniorSalary: number
    updatedAt: string
    _id: string
}
  
export interface Blog {
    h1: string
    metaTitle: string
    metaDescription: string
    views: number
    _id: string
}
  
export interface Sravnikus {
    metaTitle: string
    metaDescription: string
    qas: any[]
    _id: string
}
  
  export interface Learningclub {
    metaTitle: string
    metaDescription: string
    qas: any[]
    _id: string
}
  
export interface ProductModel {
  _id: string
  categories: string[]
  tags: string[]
  title: string
  image: string
  description: string
  link: string
  price: number
  credit: number
  oldPrice: number
  characteristics: Characteristic[]
  advantages?: string
  initialRating: number
  createdAt: string
  updatedAt: string
  __v: number
  html: string
  blog: Blog
  companyId: string
  clicks: number
  reviews: Review[]
  reviewCount: number
  reviewAvg?: number
}

export interface Characteristic {
  name: string
  value: string
}

export interface Blog {
  text: string
  _id: string
  bigImage?: string
}

export interface Review {
  _id: string
  name: string
  title: string
  description: string
  rating: number
  productId: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface SortProps {
    sort: SortEnum
    setSort: (sort: SortEnum) => void
    className?: string
}

export enum SortEnum {
    price, 
    rating
}
