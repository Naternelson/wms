import { LayoutProps } from "@/utility";
export default function ({ children, header, sidebar }: LayoutProps) {
    return (
        <div>
            <HeaderContainer>{header}</HeaderContainer>
            <MainContainer>
                <SidebarContainer>{sidebar}</SidebarContainer>
                <ContentContainer>{children}</ContentContainer>
            </MainContainer>
        </div>
    );
}

const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
    return <div className="fixed inset-x-0 top-0 z-10">{children}</div>;
};

const MainContainer = ({ children }: { children: React.ReactNode }) => {
    const className = `
    grid
    min-h-dvh 
    pt-8
    grid-cols-1
    lg:grid-cols-[18rem_1fr]
    grid-rows-[1fr]
  `;
    return <div className={className}>{children}</div>;
};

const SidebarContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <aside className="bg-blueGrey-50 relative col-start-1 row-start-1 row-span-full max-lg:hidden shadow-lg">
            <div className="absolute inset-0">
                <div className="sticky top-8 bottom-0 left-0 h-full w-2xs p-6 overflow-y-auto max-h-[calc(100dvh-2rem)]">
                    {children}
                </div>
            </div>
        </aside>
    );
};

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
    const className = `
    relative 
    row-start-1 
    grid 
    grid-cols-subgrid 
    lg:col-start-2
  `;
  const extra = "mx-auto w-full max-w-2xl";
    return (
        <div className={className}>
            <main className=" grid-cols-1 gap-10 xl:max-w-5xl xl:grid-cols-[minmax(0,1fr)_var(--container-2xs)]">
                {children}
            </main>
        </div>
    );
}; 