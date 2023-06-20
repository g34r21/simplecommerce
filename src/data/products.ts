// TODO: implement real data fetching
import type { IProduct } from '~/types/catalog';

const productsData: Record<string, IProduct> = {
  'milk-1': {
    title: 'Milk',
    price: 1.5,
    description:
      'Very long multiline paragraph with product description that will take a lot of space. Lorem ipsum dolor sit amet...',
    image:
      'https://mercadomadrid.com.co/5179-large_default/leche-alqueria-entera-bl1100m.jpg',
  },
  'milk-2': {
    title: 'SOmething',
    price: 12.5,
    description:
      'Very long multiline paragraph with product description that will take a lot of space. Lorem ipsum dolor sit amet...',
    image:
      'https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdytHZHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03f61f05144ca78dfc557a2b7aa994233a332b3d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/713202191407PM_12480761_MILO_ACTIV-GO_Doy_Pack_16x375gCO.png?locale=es',
  },
  'milk-3': {
    title: 'Else',
    price: 12.5,
    description:
      'Very long multiline paragraph with product description that will take a lot of space. Lorem ipsum dolor sit amet...',
    image: 'https://detoditocolombia.com.co/img/snackBBQ.png',
  },
  'milk-4': {
    title: 'SOmething',
    price: 12.5,
    description:
      'Very long multiline paragraph with product description that will take a lot of space. Lorem ipsum dolor sit amet...',
    image:
      'https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdytHZHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03f61f05144ca78dfc557a2b7aa994233a332b3d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/713202191407PM_12480761_MILO_ACTIV-GO_Doy_Pack_16x375gCO.png?locale=es',
  },
  'milk-6': {
    title: 'SOmething',
    price: 12.5,
    description:
      'Very long multiline paragraph with product description that will take a lot of space. Lorem ipsum dolor sit amet...',
    image:
      'https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdytHZHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03f61f05144ca78dfc557a2b7aa994233a332b3d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/713202191407PM_12480761_MILO_ACTIV-GO_Doy_Pack_16x375gCO.png?locale=es',
  },
  'milk-7': {
    title: 'SOmething',
    price: 12.5,
    description:
      'Very long multiline paragraph with product description that will take a lot of space. Lorem ipsum dolor sit amet...',
    image:
      'https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdytHZHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03f61f05144ca78dfc557a2b7aa994233a332b3d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/713202191407PM_12480761_MILO_ACTIV-GO_Doy_Pack_16x375gCO.png?locale=es',
  },
};

class Products {
  public static getAll(): Record<string, IProduct> {
    return productsData;
  }

  public static getById(id: string): IProduct | null {
    return productsData[id] || null;
  }
}

export default Products;
