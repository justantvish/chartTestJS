import BarChart from './components/Charts/BarChart/BarChart';
import Wrapper from './layouts/Wrapper/Wrapper';
import Header from './layouts/Header/Header';
import Main from './layouts/Main/Main';
import Card from './components/UI/Card/Card';

import './assets/styles/styles.scss';

function App() {

    return (
        <>
            <Wrapper>
                <Header title="Apex Chart" />
                <Main>
                    <Card>
                        <BarChart/>
                    </Card>
                </Main>
            </Wrapper>
        </>
    );
}

export default App;
