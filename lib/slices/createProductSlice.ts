import { StateCreator } from "zustand";

export interface Product {
    category: {
        id: number;
        image: string;
        name: string;
    };
    description: string;
    id: number;
    images: string[];
    price: number;
    title: string;
    quantity?: number;
}

export interface ProductSlice {
    products: Product[];
    fetchProducts: () => void;
}

export const createProductSlice: StateCreator<ProductSlice> = (set) => ({
    products: [],
    fetchProducts: async () => {
        const res = await fetch('https://eombkdd57znkkyl.m.pipedream.net/')
        set({ products: await res.json() })
    },
})