import styled from 'styled-components';
import React from 'react';

const ExampleStyledComponent = styled.div`
    color: ${ props  => props.color};
    `;

export const ExampleComponent = () => (
    <ExampleStyledComponent color="red">
        <p>This is an example of using styled components in a react component.</p>
    </ExampleStyledComponent>

    
);


export const Grid = styled.div`
    

`;
export const Row = styled.div`
    display:flex;
    
`;

export const Col = styled.div`
    flex: ${(props) => props.size};
    
    `;