import type { GetStaticProps, NextPage } from 'next';
import { IndicatorProvider } from 'src/components/providers/indicator';
import { fetchKintonePluginIndicator } from 'src/lib/external';
import Page from 'src/components/pages/products';

type StaticProps = { indicator: external.Indicator | null };

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const indicator = await fetchKintonePluginIndicator();

  return {
    props: { indicator },
    revalidate: 10 * 60,
  };
};

const ProductsRoot: NextPage<StaticProps> = ({ indicator }) => (
  <IndicatorProvider initialValue={indicator}>
    <Page />
  </IndicatorProvider>
);

export default ProductsRoot;
