import { AuthLiteClient } from 'trustauthx';
import * as config from './utils/config';

function App() {
  const authClient = new AuthLiteClient(
    config.API_KEY,
    config.API_SECRET,
    config.ORG_ID
  );
  return (
    <main>
      <h1>One-Click-Auth/TS-Examples</h1>
    </main>
  );
}

export default App;
