/* eslint-disable @typescript-eslint/no-explicit-any */ 
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromComparison } from "../../Redux/feature/CompareSlice/CompareSlice"; 

const Comparepage = () => {
   

  const { compare } = useSelector((state: any) => state);

  console.log(compare);

  const dispatch = useDispatch();

  const handleCompareProduct = (id: string) => {
    const data : any ={id}
    dispatch(removeProductFromComparison(data));
  };

  if(compare.comparisonData <= 0){
    return <div className="text-center mt-10 p-10">
       
    <img
      src={"https://cdn-icons-png.flaticon.com/512/12512/12512899.png"}
      alt="No Comparison Products"
      className="w-52 h-52 mx-auto mb-4"
    />
    <h2 className="text-lg font-semibold text-gray-600">
      No products to compare!
    </h2>
    <p className="text-gray-500">Please add some products to compare.</p>
  </div>
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Product Comparison
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-200 p-2">Remove</th>
              {compare?.comparisonData?.map((product: any) => (
                <th key={product.id} className="border border-gray-200 p-2">
                  <button
                    onClick={() => handleCompareProduct(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    🗑️
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 p-2 font-semibold">
                Product Image
              </td>
              {compare?.comparisonData?.map((product: any) => (
                <td key={product.id} className="border border-gray-200 p-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-cover mx-auto"
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-200 p-2 font-semibold">
                Product Name
              </td>
              {compare?.comparisonData?.map((product: any) => (
                <td key={product.id} className="border border-gray-200 p-2">
                  {product.title}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-200 p-2 font-semibold">
                Unit Price
              </td>
              {compare?.comparisonData?.map((product: any) => (
                <td key={product.id} className="border border-gray-200 p-2">
                  <span className="font-bold">${product.price.toFixed(2)}</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-200 p-2 font-semibold">
                Product Desc
              </td>
              {compare?.comparisonData?.map((product: any) => (
                <td key={product.id} className="border border-gray-200 p-2">
                  {product.description}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-200 p-2 font-semibold">Type</td>
              {compare?.comparisonData?.map((product: any) => (
                <td key={product.id} className="border border-gray-200 p-2">
                  {product.Category.name}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-200 p-2 font-semibold">
                Shop:
              </td>
              {compare?.comparisonData?.map((product: any) => (
                <td key={product.id} className="border border-gray-200 p-2">
                  {product.shops.name}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-200 p-2 font-semibold">
                Stock:
              </td>
              {compare?.comparisonData?.map((product: any) => (
                <td key={product.id} className="border border-gray-200 p-2">
                  {product.stock}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparepage;
