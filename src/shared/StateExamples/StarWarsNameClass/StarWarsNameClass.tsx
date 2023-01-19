import React from 'react';
import { isThisTypeNode } from 'typescript';
import { starWars, uniqueNamesGenerator } from 'unique-names-generator';
import styles from './starWarsNameClass.css';

interface IstarWarsNameClassState {
     name: string;
     count:  number;
}


export class StarWarsNameClass extends React.PureComponent<{}, IstarWarsNameClassState> {
    state: Readonly<IstarWarsNameClassState> = { name: this.randomName(), count: 0 }; //READONLY !!!!!!обязательно через Readonly

    // constructor(props: {}) {
    //     super(props);

    //     this.state = { name: '123' };
    // }

    public render() {
        console.log('>>', this.state.count)
        return (
            <section className={styles.container}>
                <span className={styles.name}>{this.state.name}</span>
                <div className={styles.gap} />
                <button className={styles.button} onClick={this.handleClick}>Мне нужно имя!</button>
            </section>
        );
    }


    private handleClick = () => {
        this.setState({ name: this.randomName() });
        this.setState((state, props) => ({ count: state.count + 1 }), () => { console.log('>>', this.state.count); });//ЛУЧШЕ ТАК!!!!!!!!!!!!!!
        //console.log('>>', this.state.count);//ТАК ЗАЛОГИРУЮТСЯ СТАРЫЕ ДАННЫЕ!!!!!!!!!!!!!!!!!!!!!!!
        // this.setState({ count: this.state.count + 1 }); //WRONG!!!!!!!!!!!!!!!
    }

    private randomName(): string {
        return uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
    }

}


