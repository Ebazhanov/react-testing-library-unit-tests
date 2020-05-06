import React from "react";

export default function Header({test}) {
    return (
        <header>
            <h2 data-testid="h2tag" className="fancy-h1">{test}</h2>
        </header>
    );
}
