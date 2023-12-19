import { AuthLiteClient } from 'trustauthx-shmbajaj';
import * as config from './utils/config';

function App() {
  console.log({ config });
  const authClient = new AuthLiteClient(
    config.API_KEY,
    config.API_SECRET,
    config.ORG_ID
  );
  console.log({ authClient });
  const url = authClient.generateUrl();
  console.log({ url });
  return (
    <main>
      <h1>One-Click-Auth/TS-Examples</h1>
    </main>
  );
}

export default App;
