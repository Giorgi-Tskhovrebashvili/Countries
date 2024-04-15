export interface CountriesType {
    flags: {
      png: string;
    };
    name: {
      common: string;
    };
    population: number;
    region: string;
    capital: string;
}
  
export interface MainLayoutProps {
    children: React.ReactNode;
}
  
export interface HeaderType {
    onClick: (event: any) => void;
}

export interface ButtonType {
    className: string;
    onClick: (event: any) => void;
    children?: string;
    src?: string;
}
  
export interface InputType {
    className: string;
    type: 'text' | 'search';
    placeholder: string;
    onChange: () => void;
    value: string;
}

export interface ImageType {
    icon?: string
    className?: string;
}

export interface FilterType {
    text: string;
    onClick: () => void;
}