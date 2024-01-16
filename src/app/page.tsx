/* @jsxImportSource react */

import { ProductTable } from '@product/components/ProductTable';
import { ProductListHeader } from '@product/components/ProductListHeader';

interface ServerPageProps {
  pageParams: { slug: string[] };
  searchParams: { [key: string]: string | undefined };
}

const HomePage = async ({ searchParams }: ServerPageProps) => {
  const currentPage = searchParams.page ? Number(searchParams.page) : 1;
  return (
    <>
      <ProductListHeader />
      <ProductTable currentPage={currentPage} />
    </>
  );
};

export default HomePage;
