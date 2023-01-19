import * as React from 'react';
import { hasJSDocParameterTags, isThisTypeNode } from 'typescript';
import { extensionsToTreatAsEsm } from '../../../../jest.config';
import { adjectives, starWars, uniqueNamesGenerator, Config } from 'unique-names-generator';
import  styles  from './names.css';

interface INamesState {
    adjective: string;
    starWarsWord: string;
}

export class Names extends React.Component<{}, INamesState>{
    constructor(props : {}) {
        super(props);

        this.state = {
            adjective: this.generateWord(adjectives),
            starWarsWord: this.generateWord(starWars),
        }
    }

    public componentDidMount(): void {
        const interval = setInterval(() => {
            this.setState({ adjective: this.generateWord(adjectives) });
        }, 2000);

        setTimeout(() => { clearInterval(interval) }, 6000);
    }

    public render() {
        return(
            <h1 className={styles.words}>
                <Adjective adjective={this.state.adjective} />
                {'\u00A0'}
                <StarWarsWord starWarsWord={this.state.starWarsWord} />
            </h1>
        );
    }

    private generateWord(dictionary: string[]): string {
        const defaultGeneratorConfig: Config = {
            length: 1,
            dictionaries: []
        };
        
    return uniqueNamesGenerator(Object.assign(
        {},
        defaultGeneratorConfig,
        { dictionaries: [ dictionary ] }
    ))

    }
}

//===============================================================================================

interface IFirstNameProps {
    adjective: string;
}

class Adjective extends React.Component<IFirstNameProps> {
    render() {
        console.log('========================');
        console.log('>> Adjective is printing');
        return <span>{this.props.adjective}</span>;
    }
}

interface ILastNamesProps {
    starWarsWord: string;
}

class StarWarsWord extends React.Component<ILastNamesProps> {
    render() {
        console.log('>> SW word is printing');
        return <span>{this.props.starWarsWord}</span>
    }
}

