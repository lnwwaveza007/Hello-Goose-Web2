import Index from "../component-spotlight/Spotlight";
import Items from "../component-items/Items";
import Headline from "../component-product/Headline";
import Category from "../component-category/Category";
import MoreButton from "../component-button-more/MoreButton";
import spotLight_Product from "../assets/data/spotlight-product";

function Home() {
  const spotList = spotLight_Product.map((Product) => (
    <Items
      content={Product.image}
      name={Product.name}
      description={Product.description}
    ></Items>
  ));
  return (
    <div>
      <Index />
      <Headline />
      <div className="flex flex-nowrap justify-around">{spotList}</div>
      <div className="">
        <Category categories={["Clothes", "Shoes", "Sports"]} />
      </div>
      {/** Category-product that's like spotlight**/}
      <div>
        <div className="flex  flex-nowrap  justify-around mt-3">
          {/** Category-product component-items1 **/}

          <Items
            content="Product-Image"
            name="Name"
            description="description description description description description description"
          ></Items>
          <Items
            content="Product-Image"
            name="Name"
            description="description description description description description description"
          ></Items>
          <Items
            content="Product-Image"
            name="Name"
            description="description description description description description description"
          ></Items>
        </div>
        {/** Category-product component-items2 **/}
        <div className="flex flex-nowrap justify-around mt-3">
          <Items
            content="Product-Image"
            name="Name"
            description="description description description description description description"
          ></Items>
          <Items
            content="Product-Image"
            name="Name"
            description="description description description description description description"
          ></Items>
          <Items
            content="Product-Image"
            name="Name"
            description="description description description description description description"
          ></Items>
        </div>
        {/** Category-product that's like spotlight**/}
      </div>
      <MoreButton />
    </div>
  );
}

export default Home;
