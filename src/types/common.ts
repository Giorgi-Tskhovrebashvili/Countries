export interface CountriesType {
  flags: {
    png: string;
  };
  name: {
    nativeName: {
      [key: string]: {
        official: string;
      };
    };
    common: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: any;
  currencies: string;
  languages: string;
  borders: string[];
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
  type: "text" | "search";
  placeholder: string;
  onChange: (event: any) => void;
  value?: string;
  name: string;
}

export interface ImageType {
  icon?: string;
  className?: string;
}

export interface FilterType {
  text: string;
  onClick: () => void;
}

export interface SearchBoxType {
  onChange: (event: any) => void;
}

export interface UseFetchType {
  api_url: string;
}
