import Page from "../Page";
import React from "react";

const Button = React.lazy(() => import("app_03/Button"));

const UiLibraryPage = () => (
  <Page title="UI Library Demo">
    <React.Suspense fallback="Loading Styled Component Button...">
      <Button>&#128133; Button</Button>
    </React.Suspense>
  </Page>
);

export default UiLibraryPage;