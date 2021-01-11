const productController = require("../Controllers/productController");
const productSchema = require("../Models/productModels");
describe("product controller tests", () => {
  test("create product test case ", async () => {
    const createProductData = {
      title: "jeans",
      price: "3000",
      description: "rough",
      imageUrl: "xxxx",
    };
    const Product = new productSchema(createProductData);
    jest
      .spyOn(Product, "save")
      .mockImplementation(() => Promise.resolve(createProductData));
    const createProductResponse = await productController.createProduct(
      createProductData
    );
    expect(createProductResponse.price).toBe("3000");
  });
});
