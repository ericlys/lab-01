import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { useUser } from "@auth0/nextjs-auth0/client"
// import { useGetProductsQuery } from "../../graphql/generated/graphql";
import { ssrGetProducts, getServerPageGetProducts } from "../../graphql/generated/page";
import { withApollo } from "../../lib/withApollo";



function Home({data}){
  const { user } = useUser();
  // const {data, loading, error} = useGetProductsQuery();

  return (
    <div>
      <h1>Hello World</h1>
      <pre>
        {JSON.stringify(data.products, null, 2)}
      </pre>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>

    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    return await getServerPageGetProducts({}, ctx)
  }
});

export default withApollo(
  ssrGetProducts.withPage()(Home) //Redux - High Order Components, compose
);