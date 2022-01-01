import { Tabs } from "@supabase/ui";

export default function TabsSize() {
  return (
    <Tabs size="large">
      <Tabs.Panel id="one" label="Tab one">
        Tab one content
      </Tabs.Panel>
      <Tabs.Panel id="two" label="Tab two">
        Tab two content
      </Tabs.Panel>
      <Tabs.Panel id="three" label="Tab three">
        Tab three content
      </Tabs.Panel>
    </Tabs>
  );
}

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <React.Fragment>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Dionysus Era</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </React.Fragment>
  );
};

const App = () => (
  <Container className="p-4 bg-dark">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header align-auto">Welcome To HimaLand</h1>
      <ExampleToast>
        Gucci
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
      <Button className='bg-dark p-3 mb-4'/>
    </Container>
  </Container>
);

var mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
