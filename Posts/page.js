import React, { Component } from 'react';
import { Nav } from "semantic-ui-react";
import './style.css';

class Page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: '',
            page: this.props.match.params.page
        }
    }
    async addComponent(name) {
        import(`../markdown/${name}.mdx`)
            .then(component =>
                this.setState({
                    Component: component.default
                })
            )
            .catch(() => {
                this.setState({
                    Component: ''
                })
            });
    }
    static capitalize(text) {
        return text.substr(0, 1).toUpperCase() + text.substr(1);
    }

    async componentDidMount() {
        await this.addComponent(Page.capitalize(this.state.page));
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            await this.addComponent(Page.capitalize(this.state.page));
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.match.params.page !== prevState.page) {
            return {
                page: nextProps.match.params.page
            }
        } else return null;
    }
    render() {
    const { Component } = this.state;

    return (
    <div className="container">
        <div>
        <Nav/>
        </div>
        <div className="content"> {Component ? <Component />: null}
        </div>
    </div>
    )
    }
}
export default Page;
/** */
        import {Tabs} from "semantic-ui-css";

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

                    import React, {useState} from 'react';
                    import ReactDOM from 'react-dom';

                    // Importing the Bootstrap CSS
                    import 'bootstrap/dist/css/bootstrap.min.css';

                    import Toast from 'react-bootstrap/Toast';
                    import Container from 'react-bootstrap/Container';
                    import Button from 'react-bootstrap/Button';

                    const ExampleToast = ({children}) => {
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
                            <Button className='bg-dark p-3 mb-4' />
                        </Container>
                    </Container>
                    );

                    var mountNode = document.getElementById('root');
                    ReactDOM.render(<App />, mountNode);
