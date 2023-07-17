import React from 'react';
import { styled } from 'styled-components';

const HelloDesign = styled.div`
    border-style: solid;
    border-color: grey;
    padding: 5px;
`

const Component = () => {
    return (
        <HelloDesign>
            hello!
        </HelloDesign>
    );
};

export default Component;