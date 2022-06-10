import { ReactNode, createContext, useContext } from 'react';

export type ContextProps = Partial<{
  indicator: external.Indicator | null;
  lastModified: string | null;
}>;

export type ProviderProps = {
  initialValue: { indicator: external.Indicator | null; lastModified: string | null };
  children: ReactNode;
};

const IndicatorContext = createContext<ContextProps>({});

export const useIndicator = () => {
  return useContext(IndicatorContext);
};

export const IndicatorProvider = (props: ProviderProps) => (
  <IndicatorContext.Provider value={props.initialValue}>{props.children}</IndicatorContext.Provider>
);
