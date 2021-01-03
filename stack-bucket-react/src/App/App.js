
import {Helmet} from "react-helmet";

// custom component

import BucketPage from "../pages/buckets";
import BucketDetailPage from "../pages/bucket-detail";

function App() {
  return (
    <div className="App">
      <Helmet>
        <link
            href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,500&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,300&display=swap'
            rel='stylesheet'
          />
      </Helmet>
      <p>learning react</p>
      <BucketPage />
      <BucketDetailPage />
    </div>
  );
}

export default App;
