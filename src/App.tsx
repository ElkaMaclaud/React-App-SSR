import React, {useEffect, useState} from 'react';
import './main.global.css';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { applyMiddleware, createStore  } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, setToken } from './store/reducer';
import thunk from 'redux-thunk';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Post } from './shared/Post';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));


function AppComponent() {
    // const url = new URL(window.location.href);
    // console.log(url);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token') || window.__token__;
        store.dispatch(setToken(token));
            if (token) {
            localStorage.setItem('token', token)
        }
    }, []);

      
    return (
        <React.StrictMode>
           <Provider store={store}>
            {mounted && 
                <BrowserRouter>
                    <Layout>
                    <Header />
                    <Content>
                        <CardsList /> 
                        <Route path="/posts/:id">
                            <Post />
                        </Route>
                    </Content> 
                    </Layout> 
                </BrowserRouter> 
            }  
            </Provider>
        </React.StrictMode>
    );
}
export const App = () => <AppComponent />;
