import { ReactNode, createContext, useContext } from 'react';

export type ContextProps = Partial<{
  indicator: external.Indicator | null;
}>;

export type ProviderProps = {
  initialValue: external.Indicator | null;
  children: ReactNode;
};

const IndicatorContext = createContext<ContextProps>({});

export const useIndicatorContext = () => {
  return useContext(IndicatorContext);
};

export const IndicatorProvider = (props: ProviderProps) => (
  <IndicatorContext.Provider value={{ indicator: props.initialValue }}>
    {props.children}
  </IndicatorContext.Provider>
);
