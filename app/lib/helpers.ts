import { FirstLevelMenuItem, TopLevelCategory } from "./definitions";


export const firstLevelMenu : FirstLevelMenuItem[] = [
    {route: 'books', name: 'Books', icon: '/books.svg', id: TopLevelCategory.Books},
    {route: 'courses', name: 'courses', icon: '/courses.svg', id: TopLevelCategory.Courses},
    {route: 'services', name: 'services', icon: '/services.svg', id: TopLevelCategory.Services},
    {route: 'products', name: 'products', icon: '/products.svg', id: TopLevelCategory.Products}
]


export const priceRu = (price : number) : string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽')