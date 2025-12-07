import Categories from '@/components/categories';
import { CATEGORIES_MODULE_CONFIG } from './config';

const CategoriesModule = () => {
  return (
    <div>
      <Categories categories={CATEGORIES_MODULE_CONFIG} />
    </div>
  );
};

export default CategoriesModule;
