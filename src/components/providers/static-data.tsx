import { ReactNode, createContext, useContext } from 'react';

export type ContextProps = Partial<{
  kintoneGraphData: website.graphData.KintoneUser[] | null;
  jsdelivrData:
    | {
        repository: string;
        data: external.jsdelivr.Stats;
      }[]
    | null;
  lastModified: string | null;
}>;

export type ProviderProps = {
  initialValue: {
    kintoneGraphData: website.graphData.KintoneUser[] | null;
    jsdelivrData:
      | {
          repository: string;
          data: external.jsdelivr.Stats;
        }[]
      | null;
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
