// import logo from './logo.svg';
import './App.css';
import store from './store/store';



import {Provider} from "react-redux"

import Container from './Components/Container' 




//展示组件和容器组件

function App() {
  return (
    <Provider store={store}>
      <Container></Container>
     </Provider>
  );
}

store.subscribe(App)
export default App;
