import { Header } from "../..";
import { MainLayoutProps } from "../../../types";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      {children}
    </div>
  );
};

export default MainLayout;
