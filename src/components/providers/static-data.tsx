import { ReactNode, createContext, useContext } from 'react';

export type ContextProps = Partial<{
  indicator: external.Indicator | null;
  kintoneUserSummary: website.graphData.KintoneUser[] | null;
  lastModified: string | null;
}>;

export type ProviderProps = {
  initialValue: {
    indicator: external.Indicator | null;
    kintoneUserSummary: website.graphData.KintoneUser[] | null;
    lastModified: string | null;
  };
  children: ReactNode;
};

const StaticDataContext = createContext<ContextProps>({});

export const useStaticData = () => {
  return useContext(StaticDataContext);
};

export const StaticDataProvider = (props: ProviderProps) => (
  <StaticDataContext.Provider value={props.initialValue}>
    {props.children}
  </StaticDataContext.Provider>
);
