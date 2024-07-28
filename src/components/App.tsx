import { FC, Suspense } from "react";
import { Layout } from "./layout/Layout";
import { RouterView } from "./router/RouterView";
import { Spinner } from "@chakra-ui/react";

export const App: FC = () => {
   

    return (
        <Layout header={(
            <p>Header</p>
        )}
        footer={(
            <p>Footer</p>
        )}
        >
          
          <Suspense fallback={<div className="uk-flex uk-flex-center"><Spinner color="teal" size='xl' /></div>}>
            <RouterView />
          </Suspense>

        </Layout >
    )
}

