import { StarWarsNameClass } from "./StarWarsNameClass/StarWarsNameClass";
import styles from "./StateExamples.css";
import React from "react";

export function StateExamples() {
    return (
        <main className={styles.container}>
            <StarWarsNameClass />
        </main>
    );
} 