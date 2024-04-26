import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export const formatNumber = (num:number)=>{
  return  new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 }).format(num)
}

export function decimal(num: number): number {
  return Number(num) * Number(1e9)
}

export function unDecimal(num: number): number {
  return Number(num) / Number(1e9)
}

export const handlePaste = async () => {
    await navigator.clipboard.readText().then(text => {
    return text
      });
    };

export const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  export const pactusValidator=(value:string)=>{
    return !/^(tpc1z|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/gm.test(value)
  }

    export const polygonValidator=(value:string)=>{
    return !(/^(0x)?[0-9a-fA-F]{40}$/.test(value))
  }


